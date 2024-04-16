/**
 * Compares two values and returns whether the first value is less than the second.
 * Supports comparison between numbers, strings, arrays, objects, and booleans.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} - True if value1 is less than value2, otherwise false.
 */
export function lessThan(value1, value2) {
  const type1 = typeof value1;
  const type2 = typeof value2;

  if (type1 === type2) {
    if (type1 === "number") {
      return value1 < value2;
    }
    if (type1 === "string") {
      return value1.length < value2.length;
    }
    if (type1 === "object" && Array.isArray(value1) && Array.isArray(value2)) {
      return value1.length < value2.length;
    }
    if (
      type1 === "object" &&
      !Array.isArray(value1) &&
      !Array.isArray(value2)
    ) {
      const keys1 = Object.keys(value1).length;
      const keys2 = Object.keys(value2).length;
      return keys1 < keys2;
    }
    if (type1 === "boolean") {
      return value1 < value2;
    }
  } else {
    const typeHierarchy = ["number", "string", "object", "array", "boolean"];
    return typeHierarchy.indexOf(type1) < typeHierarchy.indexOf(type2);
  }
  return value1 < value2;
}

/**
 * Compares two values and returns whether the first value is greater than the second.
 * Supports comparison between numbers, strings, arrays, objects, and booleans.
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} - True if value1 is greater than value2, otherwise false.
 */
export function greaterThan(value1, value2) {
  const type1 = typeof value1;
  const type2 = typeof value2;

  if (type1 === type2) {
    if (type1 === "number") {
      return value1 > value2;
    }
    if (type1 === "string") {
      return value1.length > value2.length;
    }
    if (type1 === "object" && Array.isArray(value1) && Array.isArray(value2)) {
      return value1.length > value2.length;
    }
    if (
      type1 === "object" &&
      !Array.isArray(value1) &&
      !Array.isArray(value2)
    ) {
      const keys1 = Object.keys(value1).length;
      const keys2 = Object.keys(value2).length;
      return keys1 > keys2;
    }
    if (type1 === "boolean") {
      return value1 > value2;
    }
  } else {
    const typeHierarchy = ["number", "string", "object", "array", "boolean"];
    return typeHierarchy.indexOf(type1) > typeHierarchy.indexOf(type2);
  }
  return value1 < value2;
}
