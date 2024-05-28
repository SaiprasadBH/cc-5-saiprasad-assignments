import { readFile } from "fs/promises";

/**
 * Problem number 1
 * Creates a function to check if a number is less than or equal to a given cutoff value.
 * @param {number} cutOffValue - The cutoff value.
 * @returns {function} - The cutoff function.
 */
export function createCutOff(cutOffValue) {
  return function (number) {
    return number <= cutOffValue;
  };
}

/**
 * Problem number 2
 * Transforms an array of strings by replacing occurrences of 'CraftCode' with 'CodeCraft'.
 * @param {string[]} str - The array of strings to transform.
 * @returns {string[]} - The transformed array.
 */
export function transformStringCraftCode(strings) {
  return strings.map((str) => str.replace(/CraftCode/gi, "CodeCraft"));
}

/**
 * Problem number 3
 * Processes a string of purchases, excluding those containing '4', and adds 10 to the quantity.
 * @param {string} purchases - The string of purchases.
 * @returns {string} - The processed purchases.
 */
export function processPurchases(purchases) {
  const items = purchases.split("\n");
  return items
    .filter((item) => !item.includes("4"))
    .map((item) => {
      const [name, qty] = item.split(" ");
      return `${name} ${isNaN(qty) ? qty : parseInt(qty) + 10}`;
    })
    .join("\n");
}

/**
 * Problem number 4
 * Eliminates items containing 'u' or 'g'.
 * @param {string[]} items - The array of items.
 * @returns {string[]} - The filtered array.
 */
export function eliminateUandG(items) {
  return items.filter((item) => !item.includes("u") && !item.includes("g"));
}

/**
 * Problem number 5
 * Filters items starting with 'mang' or ending with 'fy'.
 * @param {string[]} items - The array of items.
 * @returns {string[]} - The filtered array.
 */
export function startsWithMangOrEndsWithFy(items) {
  const regex = /^mang|fy$/;
  return items.filter((item) => regex.test(item));
}

/**
 * Problem number 6
 * Adds 10 to each item and filters those divisible by 4.
 * @param {number[]} items - The array of numbers.
 * @returns {number[]} - The filtered array.
 */
export function addTenandCheckDivisibilityByFour(items) {
  const elements = items;
  return elements.map((item) => (item += 10)).filter((item) => item % 4 === 0);
}

/**
 * Problem number 7
 * Generates the nth Fibonacci number recursively.
 * @param {number} ele - The index of the Fibonacci number to generate.
 * @returns {number} - The nth Fibonacci number.
 */
function generateFibonacci(ele) {
  if (ele === 0) return 0;
  if (ele === 1) return 1;

  return generateFibonacci(ele - 1) + generateFibonacci(ele - 2);
}

/**
 * Maps each element in the array to its corresponding Fibonacci number.
 * @param {number[]} arr - The array of indices.
 * @returns {number[]} - The array of Fibonacci numbers.
 */
export function nthFib(arr) {
  return arr.map((index) => generateFibonacci(index));
}

/**
 * Problem number 8
 * Extracts emails from an array of strings.
 * @param {string[]} elements - The array of strings containing emails.
 * @returns {string[]} - The array of extracted emails.
 */
export function getEmails(elements) {
  const mailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  return elements
    .map((ele) => {
      const matchedMail = ele.match(mailRegex) || [];
      return matchedMail.map((email) => email.toLowerCase());
    })
    .reduce((acc, emails) => acc.concat(emails), []);
}

/**
 * Problem number 9
 * Extracts ages from an array of people objects.
 * @param {Object[]} elements - The array of objects containing 'age' property.
 * @returns {number[]} - The array of extracted ages.
 */
export function getAge(people) {
  return people.map((ele) => ele.age);
}

//Problem number 10
/**
 * Filter foods to get only those that don't contain sugar.
 * @param {Array<Object>} foods - An array of food objects where each object represents a food with its ingredients.
 * @returns {Array<string>} - An array of food names that don't contain sugar.
 */
export function getSugarlessFood(foods) {
  return foods
    .filter((food) => {
      const ingredients = Object.values(food)[0];
      return !ingredients.includes("sugar");
    })
    .map((food) => Object.keys(food)[0]);
}

/**
 * Filter foods to get only those containing both oil and chilli.
 * @param {Array<Object>} foods - An array of food objects where each object represents a food with its ingredients.
 * @returns {Array<string>} - An array of food names that contain both oil and chilli.
 */
export function getChilliAndOilFood(foods) {
  return foods
    .filter((food) => {
      const ingredients = Object.values(food)[0];
      return ingredients.includes("oil") && ingredients.includes("chilli");
    })
    .map((food) => Object.keys(food)[0]);
}

/**
 * Check the safety status of each food based on its ingredients (sugar presence).
 * @param {Array<Object>} foods - An array of food objects where each object represents a food with its ingredients.
 * @returns {Array<Object>} - An array of objects containing food names and their safety status.
 */
export function getFoodSafteyStatus(foods) {
  return foods.reduce((acc, food) => {
    const foodName = Object.keys(food)[0];
    const ingredients = food[foodName];
    acc.push({ [foodName]: ingredients.includes("sugar") ? "unsafe" : "safe" });
    return acc;
  }, []);
}

//Problem number 11
/**
 * Find the second largest number in an array of numbers.
 * @param {Array<number>} numbers - An array of numbers.
 * @returns {number} - The second largest number.
 */
export function getSecondLargestNumber(numbers) {
  let largest = Number.MIN_VALUE;
  let secLargest = Number.MIN_VALUE;
  numbers.forEach((number) => {
    if (number > largest) {
      secLargest = largest;
      largest = number;
    } else if (number > secLargest && number < largest) {
      secLargest = number;
    }
  });
  return secLargest;
}

/**
 * Find the second largest number in an array of numbers using reduce.
 * @param {Array<number>} nums - An array of numbers.
 * @returns {number} - The second largest number.
 */
export function getSecondLargestNUmberWithReduce(nums) {
  const [largest, secondLargest] = nums.reduce(
    ([largest, secondLargest], number) => {
      if (number > largest) {
        return [number, largest];
      }
      if (number > secondLargest && number < largest) {
        return [largest, number];
      }
      return [largest, secondLargest];
    },
    [Number.MIN_VALUE, Number.MIN_VALUE]
  );
  return secondLargest;
}

//Problem number 12
/**
 * Check if any item in the array satisfies the given predicate using imperative approach.
 * @param {Array} items - The array of items to be checked.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if at least one item satisfies the predicate, otherwise false.
 */
export function someImparative(items, predicate) {
  for (let i = 0; i < items.length; i++) {
    if (predicate(items[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Check if any item in the array satisfies the given predicate using reduce.
 * @param {Array} items - The array of items to be checked.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if at least one item satisfies the predicate, otherwise false.
 */
export function someReduce(items, predicate) {
  return items.reduce((acc, item) => {
    if (predicate(item)) {
      acc = true;
    }
    return acc;
  }, false);
}

//Problem number 13
/**
 * Organizes quotes by their authors.
 *
 * @param {Array<Object>} informations - Array of objects containing quote information.
 * @returns {Object} - An object where each author is a key with an array of their quotes as the value.
 */
export function authorAndTheirQuotes(informations) {
  return informations.reduce((acc, info) => {
    const quote = info.text;
    const author = info.author;

    if (Object.keys(acc).includes(author)) {
      let authorCopy = acc[author];
      authorCopy.push(quote);
    } else {
      acc[author] = [quote];
    }
    return acc;
  }, {});
}

/**
 * Retrieves quotes containing a specific word.
 *
 * @param {Array<Object>} informations - Array of objects containing quote information.
 * @param {string} word - The word to search for within quotes.
 * @returns {Array<string>} - Array of quotes containing the specified word.
 */
export function getQuotesContainingWord(informations, word) {
  return informations
    .filter((info) => info.text.toLowerCase().includes(word.toLowerCase()))
    .map((info) => info.text);
}

/**
 * Retrieves an array of quote strings.
 *
 * @param {Array<Object>} informations - Array of objects containing quote information.
 * @returns {Array<string>} - Array of quote strings.
 */
export function getQuoteStrings(informations) {
  return informations.map((info) => info.text);
}

/**
 * Retrieves a list of unique authors.
 *
 * @param {Array<Object>} informations - Array of objects containing quote information.
 * @returns {Array<string>} - Array of unique author names.
 */
export function getAuthorList(informations) {
  return informations.reduce((acc, info) => {
    if (!acc.includes(info.author)) {
      acc.push(info.author);
    }
    return acc;
  }, []);
}

//Problem number 14

/**
 * Calculates the total salary of employees younger than thirty.
 *
 * @param {Array<Object>} employees - Array of employee objects.
 * @returns {number} - Total salary of employees younger than thirty.
 */
export function totalSalaryYoungerThanThirty(employees) {
  return employees.reduce((acc, emp) => {
    if (emp.age < 30) {
      acc += emp.salary;
    }
    return acc;
  }, 0);
}

/**
 * Retrieves an array of full names of employees.
 *
 * @param {Array<Object>} employees - Array of employee objects.
 * @returns {Array<string>} - Array of full names.
 */
export function getFullName(employees) {
  return employees.reduce((acc, emp) => {
    acc.push(emp.firstName + " " + emp.lastName);
    return acc;
  }, []);
}

/**
 * Retrieves a string containing all email addresses of employees, separated by commas.
 *
 * @param {Array<Object>} employees - Array of employee objects.
 * @returns {string} - A string containing all email addresses separated by commas.
 */
export function getEmailsString(employees) {
  return employees.reduce((acc, emp) => {
    if (acc === "") {
      acc += emp.email;
    } else {
      acc += ", " + emp.email;
    }
    return acc;
  }, "");
}

//Problem number 15

/**
 * Retrieves the item with the highest value for each nutrition type from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object} - An object containing the highest nutrition values for each type.
 */
export function getHighestNutritionItem(items) {
  return items.reduce((highest, item) => {
    const nutritions = item.nutritions;
    for (let key in nutritions) {
      if (!highest[key] || nutritions[key] > highest[key].value) {
        highest[key] = { name: item.name, value: nutritions[key] };
      }
    }
    return highest;
  }, {});
}

/**
 * Retrieves an array of unique nutrition types from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {string[]} - An array containing unique nutrition types.
 */
export function getUniqueNutritions(items) {
  return items.reduce((nutritionArray, item) => {
    Object.keys(item.nutritions).forEach((nutrition) => {
      if (!nutritionArray.includes(nutrition)) {
        nutritionArray.push(nutrition);
      }
    });
    return nutritionArray;
  }, []);
}

/**
 * Retrieves an array of unique health conditions treated by fruits from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {string[]} - An array containing unique health conditions treated by fruits.
 */
export function getUniqueHealthConditionsForFruits(items) {
  return items.reduce((uniqueConditions, item) => {
    if (item.type === "fruit") {
      item.treats.forEach((condition) => {
        if (!uniqueConditions.includes(condition)) {
          uniqueConditions.push(condition);
        }
      });
    }
    return uniqueConditions;
  }, []);
}

/**
 * Retrieves an array of common health conditions treated by nuts from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {string[]} - An array containing common health conditions treated by nuts.
 */
export function getCommonHealthConditionsForNuts(items) {
  const nutTreats = items
    .filter((item) => item.type === "nut")
    .map((item) => item.treats);

  if (nutTreats.length === 0) return [];

  return nutTreats.reduce((commonConditions, treats) => {
    return commonConditions.filter((condition) => treats.includes(condition));
  }, nutTreats[0]);
}

/**
 * Adds total nutrition value for each item in the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object[]} - An array containing items with added total nutrition values.
 */
export function addTotalNutritions(items) {
  return items.map((item) => {
    const totalNutritions = Object.values(item.nutritions).reduce(
      (total, value) => total + value,
      0
    );
    return { ...item, totalNutritions };
  });
}

/**
 * Retrieves the total nutrition value of all items in the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {number} - The total nutrition value of all items.
 */
export function getTotalNutritionValue(items) {
  return items.reduce((total, item) => {
    const totalNutritions = Object.values(item.nutritions).reduce(
      (sum, value) => sum + value,
      0
    );
    return total + totalNutritions;
  }, 0);
}

/**
 * Retrieves items that treat bone issues from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object[]} - An array containing items treating bone issues.
 */
export function getItemsSolvingBoneIssues(items) {
  return items.filter((item) => item.treats.includes("bone issues"));
}

/**
 * Retrieves the item with the most nutrition types from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object} - The item with the most nutrition types.
 */
export function getMaxNutritionTypesItem(items) {
  return items.reduce((maxNutritionTypesItem, currentItem) => {
    const nutritionTypesCount = Object.keys(currentItem.nutritions).length;
    if (
      nutritionTypesCount > Object.keys(maxNutritionTypesItem.nutritions).length
    ) {
      return currentItem;
    } else {
      return maxNutritionTypesItem;
    }
  }, items[0]);
}

/**
 * Retrieves items treating migraine with high vitamins from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object[]} - An array containing items treating migraine with high vitamins.
 */
export function getItemsSolvingMigraineWithHighVitamins(items) {
  return items.filter(
    (item) => item.treats.includes("migraine") && item.nutritions.vitamins >= 60
  );
}

/**
 * Retrieves the item with the least carbs from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {object} - The item with the least carbs.
 */
export function getMinCarbsItem(items) {
  return items.reduce((minCarbsItem, currentItem) => {
    if (
      currentItem.nutritions.carbs !== undefined &&
      currentItem.nutritions.carbs < minCarbsItem.nutritions.carbs
    ) {
      return currentItem;
    } else {
      return minCarbsItem;
    }
  }, items[0]);
}

/**
 * Retrieves the total proteins from nuts treating sugar issues from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {number} - The total proteins from nuts treating sugar issues.
 */
export function getTotalProteinsFromNutsSolvingSugarIssues(items) {
  return items
    .filter((item) => item.type === "nut" && item.treats.includes("sugar"))
    .reduce((sum, nut) => sum + nut.nutritions.protein, 0);
}

/**
 * Retrieves the total vitamins from one fruit and one nut from the provided items.
 * @param {object[]} items - An array of item objects.
 * @returns {number} - The total vitamins from one fruit and one nut.
 */
export function getTotalVitaminsFromOneFruitAndOneNut(items) {
  const fruitsWithoutSugar = items.filter(
    (item) => item.type === "fruit" && !item.treats.includes("sugar")
  );

  const nuts = items.filter((item) => item.type === "nut");

  const totalVitamins =
    fruitsWithoutSugar[0].nutritions.vitamins + nuts[0].nutritions.vitamins;

  return totalVitamins;
}

//Problem number 16
/**
 * Generates an array of natural numbers from 1 to n.
 *
 * @param {number} n - The number up to which natural numbers are generated.
 * @returns {number[]} An array of natural numbers from 1 to n.
 */
function generateNaturalNumbers(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}

/**
 * Segregates an array of numbers into odd and even numbers.
 *
 * @param {number[]} numbers - The array of numbers to segregate.
 * @returns {Object} An object with two properties: odd (array of odd numbers) and even (array of even numbers).
 */
function segregateOddEven(numbers) {
  return numbers.reduce(
    (acc, num) => {
      if (num % 2 === 0) {
        acc.even.push(num);
      } else {
        acc.odd.push(num);
      }
      return acc;
    },
    { odd: [], even: [] }
  );
}

/**
 * Calculates the sum of odd and even numbers from an object containing odd and even arrays.
 *
 * @param {Object} obj - An object with two properties: odd (array of odd numbers) and even (array of even numbers).
 * @returns {Object} An object with two properties: odd (sum of odd numbers) and even (sum of even numbers).
 */
function sumOddEven(obj) {
  return {
    odd: obj.odd.reduce((sum, num) => sum + num, 0),
    even: obj.even.reduce((sum, num) => sum + num, 0),
  };
}

/**
 * Processes natural numbers up to n by generating them, segregating into odd and even, and calculating their sums.
 *
 * @param {number} n - The number up to which natural numbers are processed.
 * @returns {Object} An object with two properties: odd (sum of odd numbers) and even (sum of even numbers).
 */
export function processNaturalNumbers(n) {
  const numbers = generateNaturalNumbers(n);
  const segregated = segregateOddEven(numbers);
  return sumOddEven(segregated);
}

//Problem number 17
/**
 * Generates an array of lowercase alphabets from 'a' to 'z'.
 *
 * @returns {string[]} An array of lowercase alphabets from 'a' to 'z'.
 */
export function generateAlphabets() {
  const alphabets = [];
  for (let i = 97; i <= 122; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets;
}

/**
 * Segregates an array of alphabets into vowels and consonants.
 *
 * @param {string[]} alphabets - The array of alphabets to segregate.
 * @returns {Object} An object with two properties: vowels (array of vowels) and consonants (array of consonants).
 */
export function segregateVowelsAndConsonants(alphabets) {
  const vowels = ["a", "e", "i", "o", "u"];
  return alphabets.reduce(
    (acc, letter) => {
      if (vowels.includes(letter)) {
        acc.vowels.push(letter);
      } else {
        acc.consonants.push(letter);
      }
      return acc;
    },
    { vowels: [], consonants: [] }
  );
}

//Problem number 18
/**
 * Retrieves a list of unique actors from the provided movie data.
 * @param {object[]} movies - An array of movie objects.
 * @returns {string[]} - An array containing unique actor names.
 */
export function getUniqueActors(movies) {
  return movies
    .map((movie) => movie.cast)
    .reduce((actorsArray, castArray) => {
      let actorsArrayCopy = actorsArray;
      castArray.forEach((actor) => {
        if (!actorsArray.includes(actor)) {
          actorsArrayCopy.push(actor);
        }
      });
      return actorsArray;
    }, []);
}

/**
 * Retrieves up to three movie titles per year from the provided movie data.
 * @param {object[]} movies - An array of movie objects.
 * @returns {object} - An object containing movie titles per year.
 */
export function getThreeMoviesPerYear(movies) {
  return movies.reduce((moviesPerYear, movie) => {
    let moviesPerYearCopy = moviesPerYear;
    if (!moviesPerYear[movie.year]) {
      moviesPerYear[movie.year] = [];
    }
    if (moviesPerYear[movie.year].length < 3) {
      moviesPerYearCopy[movie.year].push(movie.title);
    }
    return moviesPerYear;
  }, {});
}

//Problem number 19
/**
 * Trims leading whitespace from the provided string.
 * @param {string} str - The input string.
 * @returns {string} - The string with leading whitespace removed.
 */
function trimLeading(str) {
  return str.replace(/^\s+/, "");
}

/**
 * Trims trailing whitespace from the provided string.
 * @param {string} str - The input string.
 * @returns {string} - The string with trailing whitespace removed.
 */
function trimTrailing(str) {
  return str.replace(/\s+$/, "");
}

/**
 * Replaces multiple spaces in the provided string with a single space.
 * @param {string} str - The input string.
 * @returns {string} - The string with multiple spaces replaced by a single space.
 */
function singleSpace(str) {
  return str.replace(/\s+/g, " ");
}

/**
 * Composes functions from right to left.
 * @param {...Function} functions - The functions to compose.
 * @returns {Function} - The composed function.
 */
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

/**
 * Composes trimming functions to trim leading and trailing whitespace and replace multiple spaces with a single space.
 * @param {string} input - The input string.
 * @returns {string} - The input string with leading and trailing whitespace removed and multiple spaces replaced by a single space.
 */
export const composedTrim = compose(trimTrailing, trimLeading, singleSpace);
