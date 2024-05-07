/**
 * Doubles each element in the array.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array with each element doubled.
 */
export function doubleEach(arr) {
  return arr.map((item) => item * 2);
}

/**
 * Filters even numbers from the array.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array containing only even numbers.
 */
export function getEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

/**
 * Calculates the sum of all elements in the array.
 * @param {number[]} arr - The input array.
 * @returns {number} - The sum of all elements in the array.
 */
export function sumOf(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}
