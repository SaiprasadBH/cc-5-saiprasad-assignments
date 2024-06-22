import { LinkedList, LinkedListWithGenerator } from "./linkedListGenerator";

describe("Linked List Iterable Tests", () => {
  test("LinkedList iteration test", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const result = [];
    for (const value of list) {
      result.push(value);
    }
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("LinkedListWithGenerator iteration test", () => {
    const list = new LinkedListWithGenerator([6, 7, 8, 9, 10]);
    const result = [];
    for (const value of list) {
      result.push(value);
    }
    expect(result).toEqual([6, 7, 8, 9, 10]);
  });

  test("Empty LinkedList iteration test", () => {
    const list = new LinkedList();
    const result = [];
    for (const value of list) {
      result.push(value);
    }
    expect(result).toEqual([]);
  });

  test("Empty LinkedListWithGenerator iteration test", () => {
    const list = new LinkedListWithGenerator();
    const result = [];
    for (const value of list) {
      result.push(value);
    }
    expect(result).toEqual([]);
  });
});
