import { BinarySearchTree } from "./bst";

describe("Binary Search Tree Tests", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.insertNode(5);
    bst.insertNode(3);
    bst.insertNode(7);
    bst.insertNode(1);
    bst.insertNode(4);
    bst.insertNode(6);
    bst.insertNode(8);
  });

  afterEach(() => {
    bst = null;
  });

  test("Insertion", () => {
    const expected = [1, 3, 4, 5, 6, 7, 8];
    const result = [];
    bst.inOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);
  });

  test("Removal", () => {
    bst.remove(4); // Removing a leaf node
    let expected = [1, 3, 5, 6, 7, 8];
    let result = [];
    bst.inOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);

    bst.remove(7); // Removing a node with one child
    expected = [1, 3, 5, 6, 8];
    result = [];
    bst.inOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);

    bst.remove(5); // Removing a node with two children
    expected = [1, 3, 6, 8];
    result = [];
    bst.inOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);
  });

  test("Search", () => {
    expect(bst.hasData(5)).toBe(true);
    expect(bst.hasData(3)).toBe(true);
    expect(bst.hasData(7)).toBe(true);
    expect(bst.hasData(9)).toBe(false);
    expect(bst.hasData(1)).toBe(true);
  });

  test("In-order Traversal", () => {
    const expected = [1, 3, 4, 5, 6, 7, 8];
    const result = [];
    bst.inOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);
  });

  test("Pre-order Traversal", () => {
    const expected = [5, 3, 1, 4, 7, 6, 8];
    const result = [];
    bst.preOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);
  });

  test("Post-order Traversal", () => {
    const expected = [1, 4, 3, 6, 8, 7, 5];
    const result = [];
    bst.postOrderTraversal((data) => result.push(data));
    expect(result).toEqual(expected);
  });
});
