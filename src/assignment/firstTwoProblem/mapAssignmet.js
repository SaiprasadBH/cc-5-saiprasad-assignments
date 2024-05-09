/**
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
 * Converts Celsius temperature to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {string} - The temperature in Fahrenheit with two decimal places.
 */
function celsiusToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(2);
}

/**
 * Converts average temperature in the array of POIs from Celsius to Fahrenheit.
 * @param {object[]} poiArray - The array of POIs.
 * @returns {object[]} - The array of POIs with average temperature converted to Fahrenheit.
 */
export function changeAverageTemp(poiArray) {
  return poiArray.map((poi) => ({
    ...poi,
    averageTemperature: celsiusToFahrenheit(poi.averageTemperature),
  }));
}
