/**
 * Create a new Node.
 * @param {*} data - The data to be stored in the node.
 * @returns {Object} - A node object.
 */
function createNode(data) {
  return {
    data: data,
    nextNode: null,
  };
}

/**
 * Represents a linked list data structure.
 * @param {Array|LinkedList} [data] - Optional initial data for the linked list.
 * @returns {Object} - A linked list object.
 */
export default function LinkedList(data) {
  let firstNode = null;
  let lastNode = null;

  if (data !== undefined) {
    if (Array.isArray(data) || data instanceof LinkedList) {
      if (Array.isArray(data)) {
        for (let i = data.length - 1; i >= 0; i--) {
          const newNode = createNode(data[i]);
          newNode.nextNode = firstNode;
          firstNode = newNode;
          if (lastNode === null) {
            lastNode = newNode;
          }
        }
      } else {
        let currentNode = data.firstNode;
        while (currentNode !== null) {
          const newNode = createNode(currentNode.data);
          if (firstNode === null) {
            firstNode = newNode;
            lastNode = newNode;
          } else {
            lastNode.nextNode = newNode;
            lastNode = newNode;
          }
          currentNode = currentNode.nextNode;
        }
      }
    } else {
      const newNode = createNode(data);
      firstNode = newNode;
      lastNode = newNode;
    }
  }

  /**
   * Add data to the end of the list.
   * @param {*} data - The data to be added to the list.
   * @returns {Object} - The node that was added to the list.
   */
  function addData(data) {
    assert(data !== null, "Data should not be empty");
    const newNode = createNode(data);
    if (firstNode === null) {
      firstNode = newNode;
      lastNode = newNode;
    } else {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
    return newNode;
  }

  /**
   * Convert the linked list to an array.
   * @returns {Array} - An array representation of the linked list.
   */
  function toArray() {
    assert(
      firstNode !== null,
      "You must have items in the list to convert it into an array"
    );
    const array = [];
    let currentNode = firstNode;
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
  function removeLastNode() {
    assert(firstNode !== null, "There are no elements in the list to remove");
    let currentNode = firstNode;
    let previousNode = null;
    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (previousNode === null) {
      firstNode = null;
      lastNode = null;
    } else {
      previousNode.nextNode = null;
      lastNode = previousNode;
    }
    return currentNode.data;
  }

  /**
   * Remove a specific node from the list.
   * @param {Object} nodeToRemove - The node to be removed.
   * @returns {*} - The data of the removed node, or `null` if the node was not found.
   */
  function removeNode(nodeToRemove) {
    assert(firstNode !== null, "There are no elements in the list to remove");
    assert(nodeToRemove !== undefined, "Node should be defined to remove it");

    let previousNode = null;
    let currentNode = firstNode;

    if (currentNode === nodeToRemove) {
      firstNode = currentNode.nextNode;
      if (currentNode.nextNode === null) {
        lastNode = null;
      }
      return currentNode.data;
    }

    while (currentNode !== null) {
      if (currentNode === nodeToRemove) {
        previousNode.nextNode = currentNode.nextNode;
        if (currentNode.nextNode === null) {
          lastNode = previousNode;
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
   * @param {Object} existingNode - The node after which the data should be inserted.
   * @param {*} data - The data to be inserted.
   * @returns {Object} - The newly inserted node.
   */
  function insertAfter(existingNode, data) {
    assert(
      existingNode !== undefined && existingNode !== null,
      "You must define the position of the node correctly"
    );
    assert(data !== null, "You must define the data to be added");

    const newNode = createNode(data);

    let currentNode = firstNode;
    let previousNode = null;
    while (currentNode !== null) {
      if (currentNode === existingNode) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        if (currentNode === lastNode) {
          lastNode = newNode;
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
   * @param {Object} existingNode - The node before which the data should be inserted.
   * @param {*} data - The data to be inserted.
   * @returns {Object} - The newly inserted node.
   */
  function insertBefore(existingNode, data) {
    assert(
      existingNode !== undefined || existingNode !== null,
      "You must define the position of the node correctly"
    );
    assert(data !== null, "You must define the data to be added");

    const newNode = createNode(data);
    let previousNode = null;
    let currentNode = firstNode;
    while (currentNode !== null) {
      if (currentNode === existingNode) {
        if (previousNode === null) {
          firstNode = newNode;
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
  function listLength() {
    let count = 0;
    let currentNode = firstNode;
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
  function traverse(visit) {
    let currentNode = firstNode;
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
  function filter(predicate) {
    assert(
      firstNode !== null,
      "You must have at least one node to filter the list"
    );
    const resultArr = toArray();
    return resultArr.filter((data) => predicate(data));
  }

  return {
    addData,
    toArray,
    removeLastNode,
    removeNode,
    insertAfter,
    insertBefore,
    listLength,
    traverse,
    filter,
  };
}
