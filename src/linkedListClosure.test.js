import LinkedList from "./linkedListClosure";
import { isNumber } from "./predicateFunctions";

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  test("Abstraction test", () => {
    expect(list.firstNode).toBeUndefined();
    expect(list.lastNode).toBeUndefined();
  });

  test("addData and toArray", () => {
    list.addData(1);
    list.addData(2);
    list.addData(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test("removeLastNode", () => {
    list.addData(1);
    list.addData(2);
    list.addData(3);
    expect(list.removeLastNode()).toBe(3);
    expect(list.toArray()).toEqual([1, 2]);
  });

  test("removeNode", () => {
    const nodeToRemove = list.addData(1);
    list.addData(2);
    list.addData(3);
    expect(list.removeNode(nodeToRemove)).toBe(1);
    expect(list.toArray()).toEqual([2, 3]);
  });

  test("insertAfter", () => {
    const node = list.addData(1);
    list.insertAfter(node, 2);
    list.insertAfter(node, 3);
    expect(list.toArray()).toEqual([1, 3, 2]);
  });

  test("insertBefore", () => {
    const node = list.addData(1);
    list.insertBefore(node, 2);
    list.insertBefore(node, 3);
    expect(list.toArray()).toEqual([2, 3, 1]);
  });

  test("listLength", () => {
    list.addData(1);
    list.addData(2);
    list.addData(3);
    expect(list.listLength()).toBe(3);
  });

  test("traverse", () => {
    list.addData("saiprasad");
    list.addData(1);
    list.addData(2);
    list.addData(3);
    const mockFunction = vi.fn();
    list.traverse(mockFunction);
    expect(mockFunction.mock.calls.length).toBe(list.listLength());
  });

  test("filter", () => {
    list.addData(1);
    list.addData(2);
    list.addData(3);
    list.addData("saiprasad");
    expect(list.filter(isNumber)).toEqual([1, 2, 3]);
  });
});
