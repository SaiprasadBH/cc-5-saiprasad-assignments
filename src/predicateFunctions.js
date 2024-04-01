import { isNaN } from "lodash";

/**
 * Predicate function to check if a value is a number.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
export function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

/**
 * Predicate function to check if a value is a string.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export function isString(value) {
  return typeof value === "string";
}

/**
 * Predicate function to check if a value is an object (excluding arrays and null).
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Predicate function to check if a value is an array.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is an array, false otherwise.
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * Predicate function to check if a value is a boolean.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is a boolean, false otherwise.
 */

export function isBoolean(value) {
  return typeof value === "boolean";
}

/**
 * Predicate function to check if a value is null.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is null, false otherwise.
 */
export function isNull(value) {
  return value === null;
}

/**
 * Predicate function to check if a value is undefined.
 * @param {*} value - The value to be checked.
 * @returns {boolean} True if the value is undefined, false otherwise.
 */
export function isUndefined(value) {
  return value === undefined;
}
