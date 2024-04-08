// import { expect, test, describe, beforeEach, afterEach, vi } from "vitest";
import LinkedList from "./linkedListOops";
import { isNumber } from "./predicateFunctions";

describe("Linked List Oops basic implementation tests", () => {
  let listRef = null;
  beforeEach(() => {
    listRef = new LinkedList();
    listRef.addData(1);
    listRef.addData("hello");
    listRef.addData([2]);
    listRef.addData({ name: "saiprasad", age: 22 });
  });
  afterEach(() => {
    listRef = null;
  });

  test("Linked List creation tests", () => {
    const emptyList = new LinkedList();
    emptyList.initializeList();
    expect(emptyList.firstNode).toBeNull();
    expect(emptyList.lastNode).toBeNull();

    const arrayWithData = [1, "hello", { key1: 0 }, 2.0];
    const listFromArray = new LinkedList();
    listFromArray.initializeList(arrayWithData);
    expect(listFromArray.firstNode.data).toBe(1);
    expect(listFromArray.lastNode.data).toBe(2.0);

    const objectWithData = {
      firstNode: {
        data: "one",
        nextNode: {
          data: "two",
          nextNode: {
            data: { three: 3 },
            nextNode: { data: 4.0, nextNode: null },
          },
        },
      },
    };
    const listFromList = new LinkedList();
    listFromList.initializeList(objectWithData);
    expect(listFromList.firstNode.data).toBe("one");
    expect(listFromList.lastNode.data).toBe(4.0);
  });

  test("Adding item to list tests", () => {
    const listNode1 = listRef.firstNode;
    expect(listNode1.data).toBe(1);
    expect(listNode1.nextNode.data).toBe("hello");
    expect(listNode1.nextNode.nextNode.data).toEqual([2]);
    expect(listNode1.nextNode.nextNode.nextNode.data).toEqual({
      name: "saiprasad",
      age: 22,
    });
    expect(listNode1.nextNode.nextNode.nextNode.nextNode).toBeNull();
  });

  test("Array from list tests", () => {
    const listAsArray = listRef.toArray();
    expect(listAsArray).toEqual([
      1,
      "hello",
      [2],
      { name: "saiprasad", age: 22 },
    ]);
  });

  test("Remove last node from list tests", () => {
    const lastNodeData = listRef.removeLastNode();
    expect(lastNodeData).toEqual({ name: "saiprasad", age: 22 });
    expect(listRef.lastNode.data).toEqual([2]);
    expect(listRef.lastNode.nextNode).toBeNull();
  });

  test("Remove node from list tests", () => {
    const secondNode = listRef.firstNode.nextNode;
    const removedNodeData = listRef.removeNode(secondNode);
    expect(removedNodeData).toEqual("hello");
    expect(listRef.firstNode.nextNode.data).toEqual([2]);
  });

  test("Insert after node tests", () => {
    const secondNode = listRef.firstNode.nextNode;
    listRef.insertAfter(secondNode, "world");
    expect(secondNode.nextNode.data).toEqual("world");

    listRef.insertAfter(listRef.lastNode, "saiprasad");
    expect(listRef.lastNode.data).toEqual("saiprasad");
  });

  test("Insert before node tests", () => {
    const thirdNode = listRef.firstNode.nextNode.nextNode;
    listRef.insertBefore(thirdNode, "hegde");
    expect(listRef.firstNode.nextNode.nextNode.data).toEqual("hegde");

    listRef.insertBefore(listRef.firstNode, "sirsi");
    expect(listRef.firstNode.data).toEqual("sirsi");
  });

  test("filter fuction tests", () => {
    expect(listRef.filter(isNumber)).toEqual([1]);
  });

  test("test for traverse function along with length function", () => {
    const mockFunction = vi.fn();
    listRef.traverse(mockFunction);
    expect(mockFunction.mock.calls.length).toBe(listRef.listLength());
  });
});
