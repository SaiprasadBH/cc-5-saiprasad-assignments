import { describe, expect, test } from "vitest";
import { alphabetIterable, numberIterable } from "./polymorphism";

describe("Polymorphism tests", () => {
  test("numIterable test", () => {
    let numArray = [];
    for (let num of numberIterable) {
      numArray.push(num);
    }
    expect(numArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const numbers = [...numberIterable];
    expect(numbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("alphabetIterable using while loop test", () => {
    let aplabets = "";
    const iterator = alphabetIterable[Symbol.iterator]();
    let result = iterator.next();

    while (!result.done) {
      aplabets += result.value;
      result = iterator.next();
    }

    expect(aplabets).toEqual("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  });

  test("alphabetIterable test using for-of loop", () => {
    let aplabets = "";
    for (let char of alphabetIterable) {
      aplabets += char;
    }
    expect(aplabets).toEqual("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let alphabetArray = [...alphabetIterable];
    expect(alphabetArray).toEqual(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  });
});
