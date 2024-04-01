import { expect, test } from "vitest";

import { isPrime, generatePrimeSeries } from "./prime";

test("isPrime tests", () => {
  expect(() => {
    isPrime(-2);
  }).toThrow("must be a number greater than 1");

  expect(() => {
    isPrime(-2);
  }).toThrow("must be a number greater than 1");

  expect(isPrime(3)).toBe(true);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(67280421310721)).toBe(true);

  expect(() => {
    generatePrimeSeries(-3);
  }).toThrow("argument must be greater than 0");

  expect(() => {
    generatePrimeSeries("abc");
  }).toThrow("argument must be a number");

  expect(generatePrimeSeries(2)).toStrictEqual([2, 3]);
  expect(generatePrimeSeries(3)).toStrictEqual([2, 3, 5]);
});
