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
export class LinkedList {
  /**
   * Create a new LinkedList.
   */
  constructor(data) {
    this.firstNode = null;
    this.lastNode = null;

    if (data !== undefined) {
      assert(
        Array.isArray(data) || data instanceof LinkedList,
        "The argument must be an array or a LinkedList"
      );

      if (Array.isArray(data)) {
        for (let i = data.length - 1; i >= 0; i--) {
          const newNode = new Node(data[i]);
          newNode.nextNode = this.firstNode;
          this.firstNode = newNode;
          if (this.lastNode === null) {
            this.lastNode = newNode;
          }
        }
      } else {
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

  /**
   * Directly implementing the iterable protocol.
   * @returns {Object} - An iterator object.
   */
  [Symbol.iterator]() {
    let currentNode = this.firstNode;
    return {
      next() {
        if (currentNode !== null) {
          const value = currentNode.data;
          currentNode = currentNode.nextNode;
          return { value, done: false };
        }
        return { done: true };
      },
    };
  }
}

/**
 * Represents a linked list data structure with a generator-based iteration.
 */
export class LinkedListWithGenerator {
  /**
   * Create a new LinkedListWithGenerator.
   */
  constructor(data) {
    this.firstNode = null;
    this.lastNode = null;

    if (data !== undefined) {
      assert(
        Array.isArray(data) || data instanceof LinkedListWithGenerator,
        "The argument must be an array or a LinkedListWithGenerator"
      );

      if (Array.isArray(data)) {
        for (let i = data.length - 1; i >= 0; i--) {
          const newNode = new Node(data[i]);
          newNode.nextNode = this.firstNode;
          this.firstNode = newNode;
          if (this.lastNode === null) {
            this.lastNode = newNode;
          }
        }
      } else {
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

  /**
   * Using generator function to implement the iterable protocol.
   * @returns {Generator} - A generator that yields each node's data.
   */
  *[Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      yield currentNode.data;
      currentNode = currentNode.nextNode;
    }
  }
}
