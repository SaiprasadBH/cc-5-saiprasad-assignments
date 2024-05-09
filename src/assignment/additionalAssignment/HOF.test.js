import {
  addTenandCheckDivisibilityByFour,
  createCutOff,
  eliminateUandG,
  processPurchases,
  startsWithMangOrEndsWithFy,
  transformStringCraftCode,
  nthFib,
  getEmails,
  getAge,
  getSugarlessFood,
  getFoodSafteyStatus,
  getChilliAndOilFood,
  getSecondLargestNumber,
  getSecondLargestNUmberWithReduce,
  someImparative,
  someReduce,
} from "./HOF";
import { isArray, isNumber } from "lodash";

describe("HOF tests", () => {
  test("cutoff function test", () => {
    const cutoff100 = createCutOff(100);
    expect(cutoff100(120)).toBe(false);
    expect(cutoff100(30)).toBe(true);
  });

  test("transformStringCraftCode test", () => {
    expect(
      transformStringCraftCode([
        "CraftCode is a nice company",
        "We love CraftCode",
        "We are working in CraftCode",
        "Where is CraftCode?",
      ])
    ).toEqual([
      "CodeCraft is a nice company",
      "We love CodeCraft",
      "We are working in CodeCraft",
      "Where is CodeCraft?",
    ]);
  });

  test("filteredPurchases test", () => {
    const purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;

    expect(processPurchases(purchases)).toEqual(`items qty
mango 60
onion 41
water 20`);
  });

  test("eliminateUandG test", () => {
    const items = ["browl", "faaast", "energy", "stand", "eat", "lunch"];
    expect(eliminateUandG(items)).toEqual(["browl", "faaast", "stand", "eat"]);
  });
  test("startsWithMangOrEndsWithFy", () => {
    const items = [
      "mangalore",
      "semangin",
      "2 lonely",
      "verify",
      "rectify",
      "mangala",
      "notifyy",
    ];
    expect(startsWithMangOrEndsWithFy(items)).toEqual([
      "mangalore",
      "verify",
      "rectify",
      "mangala",
    ]);
  });
  test("addTenandCheckDivisibilityByFour", () => {
    const items = [34, 45, 2, 53, 84, 542, 31, 23];
    expect(addTenandCheckDivisibilityByFour(items)).toEqual([44, 12, 552]);
  });
  test("finding nth fibonacci number where n is the element of array", () => {
    expect(nthFib([2, 1, 5, 7])).toEqual([1, 1, 5, 13]);
  });

  test("getEmails test", () => {
    const elements = [
      "34, brighten street, email: BS@sft.com",
      "Behind hotel paragon, rode street, micHel@sun.it",
      "ulef court, cown street, email:cown@street",
      "CodeCraft",
    ];
    expect(getEmails(elements)).toEqual(["bs@sft.com", "michel@sun.it"]);
  });

  test("getAge test", () => {
    const people = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jeniffer",
        age: 65,
      },
    ];
    expect(getAge(people)).toEqual([13, 56, 45, 67, 65]);
  });

  test("getSugarLessFood test", () => {
    const foods = [
      { idli: ["rice", "urad", "oil", "cashew", "water"] },
      { chapathi: ["atta", "gluten", "water", "oil", "sugar"] },
      { pizza: ["maida", "sugar", "oil", "chiili", "flakes", "sause"] },
      { "paneer masala": ["paneer", "onion", "tomato", "garlic", "oil"] },
    ];
    expect(getSugarlessFood(foods)).toEqual(["idli", "paneer masala"]);
  });

  test("getChilliAndOilFood test", () => {
    const foods = [
      { idli: ["rice", "urad", "oil", "cashew", "water"] },
      { chapathi: ["atta", "gluten", "water", "oil", "sugar"] },
      { pizza: ["maida", "sugar", "oil", "chilli", "flakes", "sause"] },
      { "paneer masala": ["paneer", "onion", "tomato", "garlic", "oil"] },
    ];
    expect(getChilliAndOilFood(foods)).toEqual(["pizza"]);
  });

  test("getFoodSafteyStatus test", () => {
    const foods = [
      { idli: ["rice", "urad", "oil", "cashew", "water"] },
      { chapathi: ["atta", "gluten", "water", "oil", "sugar"] },
      { pizza: ["maida", "sugar", "oil", "chilli", "flakes", "sause"] },
      { "paneer masala": ["paneer", "onion", "tomato", "garlic", "oil"] },
    ];

    expect(getFoodSafteyStatus(foods)).toEqual([
      { idli: "safe" },
      { chapathi: "unsafe" },
      { pizza: "unsafe" },
      { "paneer masala": "safe" },
    ]);
  });
  test("getSecondLargestNumber test", () => {
    const numbers = [10, 1, 5, 20, 31];
    expect(getSecondLargestNumber(numbers)).toBe(20);
  });
  test("getSecondLargestNumberWithReduce", () => {
    const numbers = [10, 20, 5, 6, 7, 40];
    expect(getSecondLargestNUmberWithReduce(numbers)).toBe(20);
  });

  test("someImparitive test", () => {
    const items = ["hello", 1, 2, 3, true];
    expect(someImparative(items, isNumber)).toBe(true);
    expect(someImparative(items, isArray)).toBe(false);
  });
  test("someReduce test", () => {
    const items = ["hello", 1, 2, 3, true];
    expect(someReduce(items, isNumber)).toBe(true);
    expect(someReduce(items, isArray)).toBe(false);
  });
});
