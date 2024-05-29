import fs from "fs";
import path from "path";
import os from "os";
import { describe, beforeEach, afterEach, test, expect } from "vitest";
import {
  flattenFileHierarchyAsync,
  getStarWarsPersonName,
  flattenFileHierarchySync,
  promisifiedSizeOfFileOrDirectoryAtPath,
  sizeOfFileOrDirectoryAtPathAsync,
  getStarWarsPeopleNames,
} from "./learnAsync";

const testDir = path.join(os.tmpdir(), "vitest-fs-tests");

function createTestDirectoryStructure() {
  const dirStructure = {
    "file1.txt": "Hello, World!",
    subdir1: {
      "file2.txt": "Hello again!",
      subdir2: {
        "file3.txt": "And hello once more!",
      },
    },
  };

  function createFiles(basePath, structure) {
    for (const name in structure) {
      const fullPath = path.join(basePath, name);
      const value = structure[name];
      if (typeof value === "string") {
        fs.writeFileSync(fullPath, value);
      } else {
        fs.mkdirSync(fullPath, { recursive: true });
        createFiles(fullPath, value);
      }
    }
  }

  createFiles(testDir, dirStructure);
}

function deleteTestDirectoryStructure() {
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
}

describe("File system function tests", () => {
  beforeEach(() => {
    deleteTestDirectoryStructure();
    fs.mkdirSync(testDir, { recursive: true });
    createTestDirectoryStructure();
  });

  afterEach(() => {
    deleteTestDirectoryStructure();
  });

  test("sizeOfFileOrDirectoryAtPathAsync test", () => {
    return new Promise((resolve) => {
      const filePath = path.join(testDir, "file1.txt");
      sizeOfFileOrDirectoryAtPathAsync(filePath, (fileSize, error) => {
        expect(error).toBeUndefined();
        expect(fileSize).toBe(13);
        resolve();
      });
    });
  });

  test("flattenFileHierarchySync test", () => {
    const result = flattenFileHierarchySync(testDir);
    expect(result).toEqual([
      path.join(testDir, "file1.txt"),
      path.join(testDir, "subdir1", "file2.txt"),
      path.join(testDir, "subdir1", "subdir2", "file3.txt"),
    ]);
  });

  test("flattenFileHierarchyAsync test", () => {
    flattenFileHierarchyAsync(testDir, (err, result) => {
      expect(result).toEqual([
        path.join(testDir, "file1.txt"),
        path.join(testDir, "subdir1", "file2.txt"),
        path.join(testDir, "subdir1", "subdir2", "file3.txt"),
      ]);
    });
  });

  test("promisifiedSizeOfFileOrDirectoryAtPath test", async () => {
    const filePath = path.join(testDir, "file1.txt");
    const fileSize = await promisifiedSizeOfFileOrDirectoryAtPath(filePath);
    expect(fileSize).toBe(13);
  });

  test("getStarWarsPersonName test", async () => {
    const person = await getStarWarsPersonName(2);
    expect(person).toBe("C-3PO");
  });

  test("getStarWarsPeopleNames test", async () => {
    const people = await getStarWarsPeopleNames([1, 2, 3]);
    expect(people).toEqual(["Luke Skywalker", "C-3PO", "R2-D2"]);
  });
});
