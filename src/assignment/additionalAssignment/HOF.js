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
