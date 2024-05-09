import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { sumOf, getEven, doubleEach } from "./mapFilterReduce";

let arr = [1, 2, 3, 4, 5];
describe("map filter reduce tests", () => {
  beforeEach(() => {
    arr = [1, 2, 3, 4, 5];
  });
  afterEach(() => {
    arr = null;
  });
  test("map test", () => {
    expect(doubleEach(arr)).toEqual([2, 4, 6, 8, 10]);
  });
  test("filter test", () => {
    expect(getEven(arr)).toEqual([2, 4]);
  });
  test("reduce test", () => {
    expect(sumOf(arr)).toEqual(15);
  });
});
