//import assert from "assert";
import { isEqual } from "lodash";

/**
 * Creates a linked list from an array, another list, or initializes an empty linked list if no argument is provided.
 * @param {Array|Object} [arg] - An optional argument that can be an array or another linked list.
 * @returns {Object} An object representing the linked list with head and tail pointers initialized based on the provided argument.
 */
export function createList(arg) {
  const list = { head: null, tail: null };

  if (Array.isArray(arg)) {
    arg.forEach((data) => addItemToList(list, data));
  } else if (typeof arg === "object") {
    let currentNode = arg.head;
    while (currentNode !== null) {
      addItemToList(list, currentNode.data);
      currentNode = currentNode.next;
    }
  }

  return list;
}

/**
 * Adds data into a fresh node towards the end of the list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {*} data - The data to be added to the new node.
 * @returns {Object} The newly created node.
 */
export function addItemToList(listRef, data) {
  const newNode = { data: data, next: null };

  if (listRef.head === null) {
    listRef.head = newNode;
    listRef.tail = newNode;
  } else {
    listRef.tail.next = newNode;
    listRef.tail = newNode;
  }

  return newNode;
}

/**
 * Returns an array representation of the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @returns {Array} An array containing the data from each node in the linked list.
 */

export function arrayFromList(listRef) {
  const array = [];
  let lastNode = listRef.head;
  while (lastNode !== null) {
    array.push(lastNode.data);
    lastNode = lastNode.next;
  }
  //array.push(lastNode.data);
  return array;
}

/**
 * Removes the last node from the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @returns {*} The data from the removed node, or null if the list is empty.
 */

export function removeFromEnd(listRef) {
  if (listRef.head === null) {
    return null;
  }

  let currentNode = listRef.head;
  let previousNode = null;

  while (currentNode.next !== null) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (previousNode === null) {
    listRef.head = null;
    listRef.tail = null;
  } else {
    listRef.tail = previousNode;
    previousNode.next = null;
  }
  const data = currentNode.data;
  currentNode = null;

  return data;
}

/**
 * Adds data before a given node in the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {Object} listNode - The node before which the new data should be inserted.
 * @param {*} data - The data to be added.
 * @returns {Object} Reference to the modified linked list.
 */

export function insertBefore(listRef, listNode, data) {
  if (listNode === null || listRef === null) {
    return null;
  }

  const newNode = { data: data, next: null };
  if (listRef.head === listNode) {
    // If listNode is the head
    newNode.next = listNode;
    listRef.head = newNode;
    return listRef;
  } else {
    let currentNode = listRef.head;
    let previousNode = null;
    while (currentNode !== listNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
  }
  return listRef;
}

/**
 * Adds data after a given node in the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {Object} listNode - The node after which the new data should be inserted.
 * @param {*} data - The data to be added.
 * @returns {Object} Reference to the modified linked list.
 */
export function insertAfter(listRef, listNode, data) {
  if (listNode === null || listRef === null) {
    return null;
  }
  const newNode = { data: data, next: null };
  let currentNode = listRef.head;
  while (currentNode !== listNode) {
    currentNode = currentNode.next;
  }
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  if (newNode.next === null) {
    listRef.tail = newNode;
  }

  return listRef;
}

/**
 * Removes a specified item from the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {*} listItem - The item to be removed.
 * @returns {Object} Reference to the modified linked list.
 */
export function removeItem(listRef, listItem) {
  if (listRef === null || listItem === null) {
    return null;
  }

  let currentNode = listRef.head;
  let previousNode = null;

  while (currentNode !== null && !isEqual(currentNode.data, listItem)) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (currentNode !== null) {
    if (previousNode === null) {
      listRef.head = currentNode.next;
      if (currentNode === listRef.tail) {
        listRef.tail = previousNode;
      }
    } else {
      previousNode.next = currentNode.next;
      if (currentNode === listRef.tail) {
        listRef.tail = previousNode;
      }
    }
  } else {
    return null;
  }
  currentNode = null;
  return listRef;
}

/**
 * Filters a linked list based on a predicate function.
 * @param {Object} listRef - Reference to the linked list.
 * @param {Function} predicate - The predicate function used for filtering.
 * @returns {Array} An array containing data that passes the filtering logic.
 * can make a call something like const array= filterList(listRef,isNumber)
 * predicate functions for verifying the datatypes can be imported from ./predicateFunctions.js
 */
export function filterList(listRef, predicate) {
  const filteredArray = [];
  let currentNode = listRef.head;

  while (currentNode !== null) {
    if (predicate(currentNode.data)) {
      filteredArray.push(currentNode.data);
    }
    currentNode = currentNode.next;
  }

  return filteredArray;
}
