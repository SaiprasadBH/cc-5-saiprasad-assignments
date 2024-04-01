import assert from "assert";

function isPrime(num) {
  //pre-conditions for isPrime
  assert(typeof num === "number" && num > 1, "must be a number greater than 1");

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//post-conditions for isPrime
assert.throws(() => {
  isPrime("a");
}, Error); //instead of assert(!isPrime("a"),"isPrime("a") must return false"); it's a better implementation

assert.throws(() => {
  isPrime(-2);
}, Error);

try {
  assert(isPrime(9) === false, "isPrime(9) must return false");
} catch (error) {
  console.error(error.message);
}

try {
  assert(isPrime(3), "isPrime(3) must return true");
} catch (error) {
  console.error(error.message);
}

function generatePrimeSeries(count) {
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

//post-conditions for generatePrimeSeries

assert.throws(() => generatePrimeSeries("abc"), Error);
assert.throws(() => generatePrimeSeries(-10), Error);

try {
  assert.deepStrictEqual(
    generatePrimeSeries(2),
    [2, 3],
    "generatePrimeSeries(2) should return [2, 3]"
  );
} catch (error) {
  console.error(error.message);
}

try {
  assert.deepStrictEqual(
    generatePrimeSeries(4),
    [2, 3, 5, 7],
    "generatePrimeSeries(4) should return [2, 3, 5, 7]"
  );
} catch (error) {
  console.error(error.message);
}
