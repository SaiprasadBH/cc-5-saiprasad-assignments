import { test, expect } from "vitest";
import {
  createList,
  addItemToList,
  arrayFromList,
  insertAfter,
  insertBefore,
  removeFromEnd,
  removeItem,
  filterList,
} from "./linkedList.js";

import {
  isArray,
  isBoolean,
  isNumber,
  isString,
  isUndefined,
  isNull,
  isObject,
} from "./predicateFunctions.js";

test("linked list test", () => {
  const listRef = createList();
  expect(listRef).toBeDefined();
  expect(listRef.head).toBeNull();

  //adding first item
  const listNode = addItemToList(listRef, 1);
  expect(listNode).toBeDefined();
  expect(listRef.head).toBe(listNode);
  expect(listNode.data).toBe(1);
  expect(listNode.next).toBeNull();

  //adding another item
  const listNode2 = addItemToList(listRef, 2);
  expect(listNode2.next).toBeNull();
  expect(listNode.next).toBe(listNode2);

  //adding another item
  const listNode3 = addItemToList(listRef, { name: "saiprasad", age: 21 });
  expect(listNode3.data).toStrictEqual({ name: "saiprasad", age: 21 });
  expect(listNode3.next).toBeNull();
  expect(listNode2.next).toBe(listNode3);

  const array = arrayFromList(listRef);
  expect(array).toEqual([1, 2, { name: "saiprasad", age: 21 }]);
});

test("insertBefore inserts the specified item before the given node", () => {
  const listRef = createList();

  const listNode1 = addItemToList(listRef, 1);
  const listNode2 = addItemToList(listRef, 2);
  const listNode3 = addItemToList(listRef, { name: "saiprasad", age: 21 });

  const head1 = insertBefore(listRef, listNode3, 3);

  expect(arrayFromList(head1)).toEqual([
    1,
    2,
    3,
    { name: "saiprasad", age: 21 },
  ]);
});

test("insertBefore inserts the specified item before the head of the list", () => {
  const listRef = createList();

  const listNode = addItemToList(listRef, { name: "saiprasad", age: 21 });

  const head2 = insertBefore(listRef, listNode, 4);

  expect(arrayFromList(head2)).toEqual([4, { name: "saiprasad", age: 21 }]);
});

test("insertAfter inserts the specified item after the given node", () => {
  const listRef = createList();

  const listNode2 = addItemToList(listRef, 2);
  const listNode3 = addItemToList(listRef, { name: "saiprasad", age: 21 });

  const head3 = insertAfter(listRef, listNode2, 5);

  expect(arrayFromList(head3)).toEqual([2, 5, { name: "saiprasad", age: 21 }]);
});

test("insertAfter inserts the specified item after the last node of the list", () => {
  const listRef = createList();

  const listNode3 = addItemToList(listRef, { name: "saiprasad", age: 21 });

  const head4 = insertAfter(listRef, listNode3, 6);

  expect(arrayFromList(head4)).toEqual([{ name: "saiprasad", age: 21 }, 6]);
});

test("removeFromEnd removes the last item from the list and returns its data", () => {
  const listRef = createList();
  addItemToList(listRef, 1);
  addItemToList(listRef, 2);
  addItemToList(listRef, { name: "saiprasad", age: 21 });
  const data1 = removeFromEnd(listRef);
  expect(data1).toStrictEqual({ name: "saiprasad", age: 21 });
});

test("removeFromEnd returns null when trying to remove from an empty list", () => {
  const listRef = createList();
  const data2 = removeFromEnd(listRef);
  expect(data2).toBeNull();
});

test("Handling null values for insert and remove operations", () => {
  const listRef = createList();
  const listNode10 = null;
  expect(insertAfter(listRef, listNode10)).toBeNull();
  expect(insertBefore(listRef, listNode10)).toBeNull();
  expect(removeItem(listRef, listNode10)).toBeNull();
});

//writing multiple tests to removeItem.
test("removeItem removes the specified item from the linked list", () => {
  const listRef = createList();
  const listNode1 = addItemToList(listRef, 1);
  const listNode2 = addItemToList(listRef, 2);
  const listNode3 = addItemToList(listRef, 3);
  const newListRef = removeItem(listRef, listNode2.data);
  expect(arrayFromList(newListRef)).toEqual([1, 3]);
});

test("removeItem returns null if the list reference is null", () => {
  const removedItem = removeItem(null, 1);
  expect(removedItem).toBeNull();
});

test("removeItem returns null if the item to remove is not found in the list", () => {
  const listRef = createList();
  const removedItem = removeItem(listRef, 1);
  expect(removedItem).toBeNull();
});

test("createList test", () => {
  const emptyList = createList();
  expect(emptyList.head).toBeNull();
  expect(arrayFromList(emptyList)).toEqual([]);

  const arrayData = [1, 2, 3, 4, 5];
  const listFromArray = createList(arrayData);
  expect(arrayFromList(listFromArray)).toEqual(arrayData);

  const originalList = createList([10, 20, 30]);
  const newListFromList = createList(originalList);
  expect(arrayFromList(newListFromList)).toEqual(arrayFromList(originalList));
  const emptyListNoArg = createList();
  expect(arrayFromList(emptyListNoArg)).toEqual([]);
});

//tests for filter function
test("filter list according to datatype", () => {
  const listRef = createList([1, 2, 3, { name: "saiprasad" }, 4, "hello"]);
  expect(filterList(listRef, isNumber)).toEqual([1, 2, 3, 4]);
  expect(filterList(listRef, isString)).toEqual(["hello"]);
  expect(filterList(listRef, isObject)).toStrictEqual([{ name: "saiprasad" }]);
});

test("updating tail position", () => {
  const listRef = createList([1, 2, 3, 4, 5]);
  expect(listRef.tail.data).toEqual(5);
  const item = removeFromEnd(listRef);
  expect(listRef.tail.data).toEqual(4);
  const head1 = removeItem(listRef, 4);
  expect(listRef.tail.data).toEqual(3);
  const lastnode = addItemToList(listRef, 10);
  expect(insertAfter(listRef, lastnode, 11).tail.data).toEqual(11);
});
