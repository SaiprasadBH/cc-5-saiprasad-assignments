import fs from "fs";
import path from "path";

/**
 * Asynchronous function to calculate the total size of a file or directory at the given path.
 * If the path points to a file, the function returns the size of that file.
 * If the path points to a directory, the function calculates the total size of all files within that directory, including subdirectories.
 * @param {string} filePath - The path of the file or directory to calculate the size for.
 * @param {Function} callback - A callback function to handle the result or errors.
 * @returns {void} - This function does not return a value directly, instead it invokes the callback with the result.
 */
export function sizeOfFileOrDirectoryAtPathAsync(filePath, callback) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      callback(0, err);
      return;
    }

    if (stats.isFile()) {
      callback(stats.size);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          callback(0, err);
          return;
        }

        let totalSize = 0;
        let filesProcessed = 0;

        if (files.length === 0) {
          callback(totalSize);
          return;
        }

        files.forEach((file) => {
          const nestedFilePath = path.join(filePath, file);
          sizeOfFileOrDirectoryAtPathAsync(nestedFilePath, (size, err) => {
            if (err) {
              callback(0, err);
              return;
            }
            totalSize += size;
            filesProcessed++;

            if (filesProcessed === files.length) {
              callback(totalSize);
            }
          });
        });
      });
    }
  });
}

/**
 * Synchronously flattens the hierarchy of files within a directory.
 * Recursively traverses the directory and returns an array of file paths.
 * @param {string} directoryPath - The path of the directory to flatten.
 * @returns {Array} - An array containing the paths of all files within the directory and its subdirectories.
 */
export function flattenFileHierarchySync(directoryPath) {
  const result = [];

  function traverseDirectorySync(currentPath) {
    const stats = fs.statSync(currentPath);

    if (stats.isFile()) {
      result.push(currentPath);
    } else if (stats.isDirectory()) {
      const files = fs.readdirSync(currentPath);
      files.forEach((file) => {
        const filePath = path.join(currentPath, file);
        traverseDirectorySync(filePath);
      });
    }
  }

  traverseDirectorySync(directoryPath);
  return result;
}

/**
 * Asynchronously flattens the hierarchy of files within a directory using callbacks.
 * Recursively traverses the directory and returns an array of file paths.
 * @param {string} filePath The path of the directory containing files to flatten.
 * @param {function} callback - The callback function to call with the error or result.
 */
export function flattenFileHierarchyAsync(filePath, callback) {
  const result = [];
  function traverseDirectory(currentPath, callback) {
    fs.stat(currentPath, (err, stats) => {
      if (err) {
        return callback(err);
      }

      if (stats.isFile()) {
        result.push(currentPath);
        return callback();
      }

      if (stats.isDirectory()) {
        fs.readdir(currentPath, (err, files) => {
          if (err) {
            return callback(err);
          }

          let remaining = files.length;
          if (remaining === 0) {
            return callback();
          }

          files.forEach((file) => {
            const fpath = path.join(currentPath, file);
            traverseDirectory(fpath, (err) => {
              if (err) {
                return callback(err);
              }
              if (--remaining === 0) {
                callback();
              }
            });
          });
        });
      }
    });
  }

  traverseDirectory(filePath, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
}

/**
 * Promisified version of fs.stat
 *
 * This function takes a file path as input and returns a promise
 * that resolves with the stats object or rejects with an error.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<fs.Stats>} - A promise that resolves with the stats object.
 */
function promisifiedStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
}

/**
 * Promisified version of fs.readdir
 *
 * This function takes a directory path as input and returns a promise
 * that resolves with an array of file names or rejects with an error.
 *
 * @param {string} path - The path to the directory.
 * @returns {Promise<string[]>} - A promise that resolves with an array of file names.
 */
function promisifiedReaddir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

/**
 * Calculate the size of a file or directory at a given path
 *
 * This function takes a path to a file or directory and returns a promise
 * that resolves with the total size in bytes. If the path is a file, it resolves
 * with the file size. If the path is a directory, it recursively calculates the
 * total size of all files within the directory.
 *
 * @param {string} path - The path to the file or directory.
 * @returns {Promise<number>} - A promise that resolves with the total size in bytes.
 */
export function promisifiedSizeOfFileOrDirectoryAtPath(path) {
  return new Promise(async (resolve, reject) => {
    try {
      const stats = await promisifiedStat(path);
      if (stats.isFile()) {
        resolve(stats.size);
      } else if (stats.isDirectory()) {
        let totalSize = 0;
        const files = await promisifiedReaddir(path);
        for (const file of files) {
          const filePath = `${path}/${file}`;
          const fileSize =
            await promisifiedSizeOfFileOrDirectoryAtPath(filePath);
          totalSize += fileSize;
        }
        resolve(totalSize);
      } else {
        reject(new Error("Something went wrong"));
      }
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Fetches the name of a Star Wars character based on their ID.
 *
 * @async
 * @function getStarWarsPersonName
 * @param {number} personId - The ID of the Star Wars character.
 * @returns {Promise<string>} The name of the Star Wars character.
 * @throws {Error} Throws an error if the fetch operation fails or if the response is not ok.
 */

export async function getStarWarsPersonName(personId) {
  const baseURL = "https://swapi.dev/api/people";
  const url = `${baseURL}/${personId}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("some error occurred while fetching");
  }
  return data.name;
}

/**
 * Fetches the names of multiple Star Wars characters based on an array of IDs.
 *
 * @async
 * @function getStarWarsPeopleNames
 * @param {number[]} peopleIds - An array of IDs of the Star Wars characters.
 * @returns {Promise<string[]>} An array of names of the Star Wars characters. If a character is not found, a string indicating the ID not found is included.
 */

export async function getStarWarsPeopleNames(peopleIds) {
  const ids = peopleIds;
  const names = [];

  for (const id of ids) {
    try {
      const name = await getStarWarsPersonName(id);
      names.push(name);
    } catch (error) {
      names.push(`Person with ID ${id} not found`);
    }
  }

  return names;
}
