/**
 * Represents a node in a Binary Search Tree.
 */
export class Node {
  /**
   * Create a new Node.
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a Binary Search Tree (BST).
 */
export class BinarySearchTree {
  /**
   * Create a new Binary Search Tree.
   */
  constructor(compare) {
    this.root = null;
    this.compare = compare;
  }

  /**
   * Insert a new node into the tree.
   * @param {*} data - The data to be inserted.
   */
  insertNode(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNodeRecursively(this.root, newNode);
    }
  }

  /**
   * Recursively insert a new node into the tree.
   * @param {Node} parentNode - The parent node.
   * @param {Node} newNode - The new node to be inserted.
   */
  insertNodeRecursively(parentNode, newNode) {
    const parent = parentNode;
    if (this.compare(newNode.data, parent.data)) {
      if (parent.left === null) {
        parent.left = newNode;
      } else {
        this.insertNodeRecursively(parent.left, newNode);
      }
    } else if (parent.right === null) {
      parent.right = newNode;
    } else {
      this.insertNodeRecursively(parent.right, newNode);
    }
  }

  /**
   * Remove a node with the specified data from the tree.
   * @param {*} data - The data of the node to be removed.
   */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  /**
   * Recursively remove a node with the specified data from the tree.
   * @param {Node} node - The current node.
   * @param {*} key - The data of the node to be removed.
   * @returns {Node} The updated node.
   */
  removeNode(node, key) {
    const currentNode = node;
    if (currentNode === null) {
      return null;
    }
    if (this.compare(key, currentNode.data)) {
      currentNode.left = this.removeNode(currentNode.left, key);
      return currentNode;
    }
    if (this.compare(currentNode.data, key)) {
      currentNode.right = this.removeNode(currentNode.right, key);
      return node;
    }
    if (currentNode.left === null) {
      return currentNode.right;
    }
    if (currentNode.right === null) {
      return currentNode.left;
    }
    const minRight = this.findMinNode(currentNode.right);
    currentNode.data = minRight.data;
    currentNode.right = this.removeNode(currentNode.right, minRight.data);
    return currentNode;
  }

  /**
   * Find the minimum node in a subtree.
   * @param {Node} node - The root node of the subtree.
   * @returns {Node} The minimum node.
   */
  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  /**
   * Perform an in-order traversal of the tree.
   * @param {function} callback - A function to be called on each node's data.
   */
  inOrderTraversal(callback) {
    this.inOrderTraversalRecursively(this.root, callback);
  }

  /**
   * Recursively perform an in-order traversal of the tree.
   * @param {Node} node - The current node.
   * @param {function} callback - A function to be called on each node's data.
   */
  inOrderTraversalRecursively(node, callback) {
    if (node !== null) {
      this.inOrderTraversalRecursively(node.left, callback);
      callback(node.data);
      this.inOrderTraversalRecursively(node.right, callback);
    }
  }

  /**
   * Perform a pre-order traversal of the tree.
   * @param {function} callback - A function to be called on each node's data.
   */
  preOrderTraversal(callback) {
    this.preOrderTraversalRecursively(this.root, callback);
  }

  /**
   * Recursively perform a pre-order traversal of the tree.
   * @param {Node} node - The current node.
   * @param {function} callback - A function to be called on each node's data.
   */
  preOrderTraversalRecursively(node, callback) {
    if (node !== null) {
      callback(node.data);
      this.preOrderTraversalRecursively(node.left, callback);
      this.preOrderTraversalRecursively(node.right, callback);
    }
  }

  /**
   * Perform a post-order traversal of the tree.
   * @param {function} callback - A function to be called on each node's data.
   */
  postOrderTraversal(callback) {
    this.postOrderTraversalRecursively(this.root, callback);
  }

  /**
   * Recursively perform a post-order traversal of the tree.
   * @param {Node} node - The current node.
   * @param {function} callback - A function to be called on each node's data.
   */
  postOrderTraversalRecursively(node, callback) {
    if (node !== null) {
      this.postOrderTraversalRecursively(node.left, callback);
      this.postOrderTraversalRecursively(node.right, callback);
      callback(node.data);
    }
  }

  /**
   * Check if the tree contains a node with the specified data.
   * @param {*} data - The data to search for.
   * @returns {boolean} True if the tree contains the data, otherwise false.
   */
  hasData(data) {
    return this.search(this.root, data);
  }

  /**
   * Recursively search for a node with the specified data.
   * @param {Node} node - The current node.
   * @param {*} data - The data to search for.
   * @returns {boolean} True if the node with the data is found, otherwise false.
   */
  search(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    if (this.compare(data, node.data)) {
      return this.search(node.left, data);
    }
    return this.search(node.right, data);
  }
}
