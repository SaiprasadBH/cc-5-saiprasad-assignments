import assert from "assert";

/**
 * Represents a single node in the linked list.
 */
class Node {
  /**
   * Create a new Node.
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

/**
 * Represents a linked list data structure.
 */
export default class LinkedList {
  /**
   * Create a new LinkedList.
   */
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }

  /**
   * Initialize the linked list with provided data.
   * @param {Array|LinkedList} data - The data to initialize the list with.
   * If `data` is an array, it initializes the list with the elements of the array.
   * If `data` is another LinkedList, it initializes this list as a copy of `data`.
   * If `data` is `undefined`, the list remains empty.
   */

  initializeList(data) {
    assert(
      data === undefined || Array.isArray(data) || data instanceof Object,
      "The argument must be undefined, an array, or a list"
    );

    if (data === undefined) {
      this.firstNode = null;
      this.lastNode = null;
      return;
    }

    if (Array.isArray(data)) {
      this.firstNode = null;
      this.lastNode = null;
      for (let i = data.length - 1; i >= 0; i--) {
        const newNode = new Node(data[i]);
        newNode.nextNode = this.firstNode;
        this.firstNode = newNode;
        if (this.lastNode === null) {
          this.lastNode = newNode;
        }
      }
      return;
    }

    assert(
      data instanceof Object,
      "The item must be a list to create another list"
    );
    let currentNode = data.firstNode;
    while (currentNode !== null) {
      const newNode = new Node(currentNode.data);
      if (this.firstNode === null) {
        this.firstNode = newNode;
        this.lastNode = newNode;
      } else {
        this.lastNode.nextNode = newNode;
        this.lastNode = newNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  /**
   * Add data to the end of the list.
   * @param {*} data - The data to be added to the list.
   * @returns {Node} - The node that was added to the list.
   */
  addData(data) {
    assert(data !== null, "Data should not be empty");
    const newNode = new Node(data);
    if (this.firstNode === null) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
    return newNode;
  }

  /**
   * Convert the linked list to an array.
   * @returns {Array} - An array representation of the linked list.
   */

  toArray() {
    assert(
      this.firstNode !== null,
      "You must have items in the list to convert it into an array"
    );
    const array = [];
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    return array;
  }

  /**
   * Remove the last node from the list and return its data.
   * @returns {*} - The data of the removed node.
   */
  removeLastNode() {
    assert(
      this.firstNode !== null,
      "There are no elements in the list to remove"
    );
    let currentNode = this.firstNode;
    let previousNode = null;
    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (previousNode === null) {
      this.firstNode = null;
      this.lastNode = null;
    } else {
      previousNode.nextNode = null;
      this.lastNode = previousNode;
    }
    return currentNode.data;
  }

  /**
   * Remove a specific node from the list.
   * @param {Node} nodeToRemove - The node to be removed.
   * @returns {*} - The data of the removed node, or `null` if the node was not found.
   */
  removeNode(nodeToRemove) {
    assert(
      this.firstNode !== null,
      "There are no elements in the list to remove"
    );
    assert(nodeToRemove !== undefined, "Node should be defined to remove it");

    let previousNode = null;
    let currentNode = this.firstNode;

    if (currentNode === nodeToRemove) {
      this.firstNode = currentNode.nextNode;
      if (currentNode.nextNode === null) {
        this.lastNode = null;
      }
      return currentNode.data;
    }

    while (currentNode !== null) {
      if (currentNode === nodeToRemove) {
        previousNode.nextNode = currentNode.nextNode;
        if (currentNode.nextNode === null) {
          this.lastNode = previousNode;
        }
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  /**
   * Insert data after a specific node in the list.
   * @param {Node} existingNode - The node after which the data should be inserted.
   * @param {*} data - The data to be inserted.
   * @returns {Node} - The newly inserted node.
   */
  insertAfter(existingNode, data) {
    assert(
      existingNode !== undefined && existingNode !== null,
      "You must define the position of the node correctly"
    );
    assert(data !== null, "You must define the data to be added");

    const newNode = new Node(data);

    let currentNode = this.firstNode;
    let previousNode = null;
    while (currentNode !== null) {
      if (currentNode === existingNode) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        if (currentNode === this.lastNode) {
          this.lastNode = newNode;
        }
        return newNode;
      }
      // eslint-disable-next-line no-unused-vars
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  /**
   * Insert data before a specific node in the list.
   * @param {Node} existingNode - The node before which the data should be inserted.
   * @param {*} data - The data to be inserted.
   * @returns {Node} - The newly inserted node.
   */
  insertBefore(existingNode, data) {
    assert(
      existingNode !== undefined || existingNode !== null,
      "You must define the position of the node correctly"
    );
    assert(data !== null, "You must define the data to be added");

    const newNode = new Node(data);
    let previousNode = null;
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      if (currentNode === existingNode) {
        if (previousNode === null) {
          this.firstNode = newNode;
        } else {
          previousNode.nextNode = newNode;
        }
        newNode.nextNode = currentNode;
        return newNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  /**
   * Get the length of the list.
   * @returns {number} - The length of the list.
   */
  listLength() {
    let count = 0;
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return count;
  }

  /**
   * Traverse the list and apply a function to each node.
   * @param {Function} visit - The function to apply to each node.
   */
  traverse(visit) {
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      visit(currentNode);
      currentNode = currentNode.nextNode;
    }
  }

  /**
   * Filter the list based on a predicate function.
   * @param {Function} predicate - The predicate function used to filter the list.
   * @returns {Array} - An array containing the filtered elements.
   */

  filter(predicate) {
    assert(
      this.firstNode !== null,
      "You must have at least one node to filter the list"
    );
    const resultArr = this.toArray();
    return resultArr.filter((data) => predicate(data));
  }
}
