import assert from "assert";

export function isPrime(num) {
  //pre-conditions for isPrime
  assert(typeof num === "number" && num > 1, "must be a number greater than 1");
  if (num <= 3) return true;

  // Check if num is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Iterate through potential factors of num
  // Starting from 5, we only need to check up to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

export function generatePrimeSeries(count) {
  //pre-conditions for generatePrieSeries
  assert(typeof count === "number", "argument must be a number");
  assert(count > 0, "argument must be greater than 0");

  const series = [];
  let num = 2;
  while (series.length < count) {
    try {
      if (isPrime(num)) {
        series.push(num);
      }
    } catch (error) {
      console.error(error.message);
    }
    num++;
  }
  return series;
}
