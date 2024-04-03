import assert from "assert";

/**
 * Calculates the nth Fibonacci number using a recursive approach with memoization.
 * @param {BigInt} n - The index of the Fibonacci number to calculate.
 * @param {object} memo - An object to store previously computed Fibonacci numbers.
 * @returns {BigInt} The nth Fibonacci number.
 */
function fibonacciNumberRecursiveMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 0n) return 0n; // Use BigInt literal 0n
  if (n === 1n) return 1n; // Use BigInt literal 1n

  memo[n] =
    fibonacciNumberRecursiveMemo(n - 1n, memo) +
    fibonacciNumberRecursiveMemo(n - 2n, memo); // Use BigInt literals
  return memo[n];
}

assert.throws(() => {
  fibonacciNumberRecursiveMemo("hi");
}, Error);

assert.throws(() => {
  fibonacciNumberRecursiveMemo(-10n); // Use BigInt literal -10n
}, Error);

//large number
assert.strictEqual(
  fibonacciNumberRecursiveMemo(100n).toString(),
  "354224848179261915075",
  "fibonacciNumber(100) should return 354224848179261915075"
); //runs for large number as well

assert.equal(
  fibonacciNumberRecursiveMemo(1n),
  1n,
  "fibonacciNumber(1) must return 1"
);
assert.equal(
  fibonacciNumberRecursiveMemo(2n),
  1n,
  "fibonacciNumber(2) must return 1"
);
assert.equal(
  fibonacciNumberRecursiveMemo(3n),
  2n,
  "fibonacciNumber(3) must return 2"
);
assert.equal(
  fibonacciNumberRecursiveMemo(4n),
  3n,
  "fibonacciNumber(4) must return 3"
);
assert.equal(
  fibonacciNumberRecursiveMemo(5n),
  5n,
  "fibonacciNumber(5) must return 5"
);
assert.equal(
  fibonacciNumberRecursiveMemo(6n),
  8n,
  "fibonacciNumber(6) must return 8"
);
/**
 * Calculates the nth Fibonacci number using a recursive approach with memoization.
 * @param {BigInt} n - The index of the Fibonacci number to calculate.
 * @param {object} memo - An object to store previously computed Fibonacci numbers.
 * @returns {BigInt} The nth Fibonacci number.
 */
function fibonacciNumberRecursiveMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 0n) return 0n; // Use BigInt literal 0n
  if (n === 1n) return 1n; // Use BigInt literal 1n

  memo[n] =
    fibonacciNumberRecursiveMemo(n - 1n, memo) +
    fibonacciNumberRecursiveMemo(n - 2n, memo); // Use BigInt literals
  return memo[n];
}

assert.throws(() => {
  fibonacciNumberRecursiveMemo("hi");
}, Error);

assert.throws(() => {
  fibonacciNumberRecursiveMemo(-10n); // Use BigInt literal -10n
}, Error);

//large number
assert.strictEqual(
  fibonacciNumberRecursiveMemo(100n).toString(),
  "354224848179261915075",
  "fibonacciNumber(100) should return 354224848179261915075"
); //runs for large number as well

assert.equal(
  fibonacciNumberRecursiveMemo(1n),
  1n,
  "fibonacciNumber(1) must return 1"
);
assert.equal(
  fibonacciNumberRecursiveMemo(2n),
  1n,
  "fibonacciNumber(2) must return 1"
);
assert.equal(
  fibonacciNumberRecursiveMemo(3n),
  2n,
  "fibonacciNumber(3) must return 2"
);
assert.equal(
  fibonacciNumberRecursiveMemo(4n),
  3n,
  "fibonacciNumber(4) must return 3"
);
assert.equal(
  fibonacciNumberRecursiveMemo(5n),
  5n,
  "fibonacciNumber(5) must return 5"
);
assert.equal(
  fibonacciNumberRecursiveMemo(6n),
  8n,
  "fibonacciNumber(6) must return 8"
);
