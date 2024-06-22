/**
 * This module exports two iterable objects:
 * - numberIterable: Iterates over numbers from 0 to 9.
 * - alphabetIterable: Iterates over uppercase alphabet letters from A to Z.
 */

/**
 * numberIterable
 *
 * An iterable object that produces numbers from 0 to 9.
 *
 * @type {Object}
 * @property {Function} [Symbol.iterator] - A method that returns an iterator.
 */
export const numberIterable = {
  [Symbol.iterator]() {
    let number = 0;

    return {
      next() {
        if (number < 10) {
          return { value: number++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

/**
 * alphabetIteratorCreator
 *
 * A function that creates an iterator for uppercase alphabet letters from A to Z.
 *
 * @returns {Object} - An iterator object with a next() method.
 */
const alphabetIteratorCreator = () => {
  let charCode = "A".codePointAt(0);
  return {
    next() {
      if (charCode <= "Z".codePointAt(0)) {
        return { value: String.fromCharCode(charCode++), done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

/**
 * alphabetIterable
 *
 * An iterable object that produces uppercase alphabet letters from A to Z.
 *
 * @type {Object}
 * @property {Function} [Symbol.iterator] - A method that returns an iterator created by alphabetIterator function.
 */
export const alphabetIterable = {
  [Symbol.iterator]: alphabetIteratorCreator,
};
