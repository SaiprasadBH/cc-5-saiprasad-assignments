import { isEqual } from "lodash";

/**
 * Adds data into a fresh node towards the end of the list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {*} data - The data to be added to the new node.
 * @returns {Object} The newly created node.
 */
export function addItemToList(listRef, data) {
  const nodeData = data;
  const listReference = listRef;
  const newNode = { data: nodeData, next: null };

  if (listReference.head === null) {
    listReference.head = newNode;
    listReference.tail = newNode;
  } else {
    listReference.tail.next = newNode;
    listReference.tail = newNode;
  }

  return newNode;
}

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
    if (arg.head === undefined || arg.tail === undefined || arg === undefined) {
      return null;
    }
    let currentNode = arg.head;
    while (currentNode !== null) {
      addItemToList(list, currentNode.data);
      currentNode = currentNode.next;
    }
  }

  return list;
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

  return array;
}

/**
 * Removes the last node from the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @returns {*} The data from the removed node, or null if the list is empty.
 */

export function removeFromEnd(listRef) {
  const listReference = listRef;
  if (listReference.head === null) {
    return null;
  }

  let currentNode = listReference.head;
  let previousNode = null;

  while (currentNode.next !== null) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (previousNode === null) {
    listReference.head = null;
    listReference.tail = null;
  } else {
    listReference.tail = previousNode;
    previousNode.next = null;
  }
  const { data } = currentNode;
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
  const listReference = listRef;
  if (listNode === null || listReference === null) {
    return null;
  }

  const newNode = { data, next: null };
  if (listReference.head === listNode) {
    // If listNode is the head
    newNode.next = listNode;
    listReference.head = newNode;
    return listReference;
  }
  let currentNode = listReference.head;
  let previousNode = null;
  while (currentNode !== listNode) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  previousNode.next = newNode;
  newNode.next = currentNode;

  return listReference;
}

/**
 * Adds data after a given node in the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {Object} listNode - The node after which the new data should be inserted.
 * @param {*} data - The data to be added.
 * @returns {Object} Reference to the modified linked list.
 */
export function insertAfter(listRef, listNode, data) {
  const listReference = listRef;
  if (listNode === null || listReference === null) {
    return null;
  }
  const newNode = { data, next: null };
  let currentNode = listReference.head;
  while (currentNode !== listNode) {
    currentNode = currentNode.next;
  }
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  if (newNode.next === null) {
    listReference.tail = newNode;
  }

  return listReference;
}

/**
 * Removes a specified item from the linked list.
 * @param {Object} listRef - Reference to the linked list.
 * @param {*} listItem - The item to be removed.
 * @returns {Object} Reference to the modified linked list.
 */
export function removeItem(listRef, listItem) {
  const listReference = listRef;
  if (listReference === null || listItem === null) {
    return null;
  }

  let currentNode = listReference.head;
  let previousNode = null;

  while (currentNode !== null && !isEqual(currentNode.data, listItem)) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (currentNode !== null) {
    if (previousNode === null) {
      listReference.head = currentNode.next;
      if (currentNode === listRef.tail) {
        listReference.tail = previousNode;
      }
    } else {
      previousNode.next = currentNode.next;
      if (currentNode === listRef.tail) {
        listReference.tail = previousNode;
      }
    }
  } else {
    return null;
  }
  currentNode = null;
  return listReference;
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
