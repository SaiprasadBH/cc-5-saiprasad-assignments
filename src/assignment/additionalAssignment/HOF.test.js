import { describe, expect, test } from "vitest";
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
  authorAndTheirQuotes,
  getQuotesContainingWord,
  getQuoteStrings,
  getAuthorList,
  totalSalaryYoungerThanThirty,
  getFullName,
  getEmailsString,
  getHighestNutritionItem,
  getUniqueNutritions,
  getUniqueHealthConditionsForFruits,
  getCommonHealthConditionsForNuts,
  addTotalNutritions,
  getTotalNutritionValue,
  getItemsSolvingBoneIssues,
  getMaxNutritionTypesItem,
  getMinCarbsItem,
  getTotalProteinsFromNutsSolvingSugarIssues,
  processNaturalNumbers,
  getItemsSolvingMigraineWithHighVitamins,
  getTotalVitaminsFromOneFruitAndOneNut,
  segregateVowelsAndConsonants,
  generateAlphabets,
  getUniqueActors,
  getThreeMoviesPerYear,
  composedTrim,
} from "./HOF";
import { isArray, isNumber } from "lodash";

describe("This block contains tests for HOF problems from 1-12", () => {
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

describe("This block contains tests for problem number 13", () => {
  let infos;
  beforeEach(() => {
    infos = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];
  });
  afterEach(() => {
    infos = null;
  });

  test("authorAndTheirQuotes", () => {
    expect(authorAndTheirQuotes(infos)["Buddha"]).toEqual([
      "Peace comes from within. Do not seek it without",
      "You'll see it when you believe it.",
    ]);
  });
  test("getQuotesContainingWord test", () => {
    expect(getQuotesContainingWord(infos, "believe")).toEqual([
      "You'll see it when you believe it.",
    ]);
  });
  test("getQuoteStrings test", () => {
    expect(getQuoteStrings(infos)[0]).toEqual(
      "Genius is one percent inspiration and ninety-nine percent perspiration."
    );
    expect(getQuoteStrings(infos)[9]).toEqual(
      "Self-complacency is fatal to progress."
    );
    expect(getQuoteStrings(infos)[infos.length - 1]).toEqual(
      "You'll see it when you believe it."
    );
  });
  test("getAuthorList test", () => {
    expect(getAuthorList(infos)).toEqual([
      "Thomas Edison",
      "Yogi Berra",
      "Byron Pulsifer",
      "Lao Tzu",
      "Aristotle",
      "Margaret Sangster",
      "Buddha",
      "Karen Clark",
    ]);
  });
});

describe("This block contains tests for problem number 14", () => {
  let employees;
  beforeEach(() => {
    employees = [
      {
        firstName: "Molly",
        lastName: "Rojas",
        age: 38,
        email: "mollyrojas@plasmox.com",
        salary: 3065,
      },
      {
        firstName: "Marguerite",
        lastName: "Santiago",
        age: 27,
        email: "margueritesantiago@plasmox.com",
        salary: 2796,
      },
      {
        firstName: "Evelyn",
        lastName: "Oneil",
        age: 26,
        email: "evelynoneil@plasmox.com",
        salary: 3947,
      },
      {
        firstName: "Consuelo",
        lastName: "Case",
        age: 23,
        email: "consuelocase@plasmox.com",
        salary: 2819,
      },
      {
        firstName: "Earline",
        lastName: "Bush",
        age: 29,
        email: "earlinebush@plasmox.com",
        salary: 3494,
      },
      {
        firstName: "Sanford",
        lastName: "Hurley",
        age: 26,
        email: "sanfordhurley@plasmox.com",
        salary: 3068,
      },
      {
        firstName: "Todd",
        lastName: "Gomez",
        age: 33,
        email: "toddgomez@plasmox.com",
        salary: 3906,
      },
    ];
  });
  afterEach(() => {
    employees = null;
  });

  test("totalSalaryYoungerThanThirty test", () => {
    expect(totalSalaryYoungerThanThirty(employees)).toBe(16124);
  });
  test("getFullName test", () => {
    expect(getFullName(employees)).toEqual([
      "Molly Rojas",
      "Marguerite Santiago",
      "Evelyn Oneil",
      "Consuelo Case",
      "Earline Bush",
      "Sanford Hurley",
      "Todd Gomez",
    ]);
  });
  test("getEmailsString test", () => {
    expect(getEmailsString(employees)).toBe(
      "mollyrojas@plasmox.com, margueritesantiago@plasmox.com, evelynoneil@plasmox.com, consuelocase@plasmox.com, earlinebush@plasmox.com, sanfordhurley@plasmox.com, toddgomez@plasmox.com"
    );
  });
});

describe("Tests for problem number 15", () => {
  let items;

  beforeEach(() => {
    items = [
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: { protein: 8, carbs: 40, sugar: 30, vitamins: 45 },
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: { protein: 18, carbs: 20, sugar: 20, vitamins: 65 },
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 33, carbs: 26, vitamins: 64 },
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
      },
    ];
  });

  afterEach(() => {
    items = null;
  });

  test("getHighestNutritionItem test", () => {
    expect(getHighestNutritionItem(items)).toEqual({
      protein: { name: "Wallnut", value: 33 },
      carbs: { name: "Banana", value: 40 },
      sugar: { name: "Banana", value: 30 },
      vitamins: { name: "Badam", value: 65 },
    });
  });

  test("getUniqueNutritions test", () => {
    expect(getUniqueNutritions(items)).toEqual([
      "protein",
      "carbs",
      "sugar",
      "vitamins",
    ]);
  });

  test("getUniqueHealthConditionsForFruits test", () => {
    expect(getUniqueHealthConditionsForFruits(items)).toEqual([
      "constipation",
      "vitamin deficiency",
      "skin issues",
      "sleep problems",
      "heart problems",
      "bone issues",
      "migraine",
    ]);
  });

  test("getCommonHealthConditionsForNuts test", () => {
    expect(getCommonHealthConditionsForNuts(items)).toEqual([
      "bp",
      "protein deficiency",
      "skin issues",
    ]);
  });

  test("addTotalNutrition test", () => {
    const expectedItems = [
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: { protein: 8, carbs: 40, sugar: 30, vitamins: 45 },
        totalNutritions: 123,
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: { protein: 18, carbs: 20, sugar: 20, vitamins: 65 },
        totalNutritions: 123,
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutritions: 104,
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 33, carbs: 26, vitamins: 64 },
        totalNutritions: 123,
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutritions: 104,
      },
    ];

    expect(addTotalNutritions(items)).toEqual(expectedItems);
  });

  test("getTotalNutritionValue test", () => {
    const expectedTotal = 577;
    expect(getTotalNutritionValue(items)).toEqual(expectedTotal);
  });
  test("getItemSolvingBoneIssues test", () => {
    const expectedItems = [
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 33, carbs: 26, vitamins: 64 },
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
      },
    ];
    expect(getItemsSolvingBoneIssues(items)).toEqual(expectedItems);
  });

  test("getMinCarbsItem", () => {
    const foodWithLowestCarbs = getMinCarbsItem(items);
    expect(foodWithLowestCarbs).toEqual({
      name: "Badam",
      nutritions: {
        carbs: 20,
        protein: 18,
        sugar: 20,
        vitamins: 65,
      },
      treats: ["bp", "protein deficiency", "skin issues", "sugar"],
      type: "nut",
    });
  });
  test("getMaxNutritionTypesItem test", () => {
    const foodWithMaxNutritionTypes = getMaxNutritionTypesItem(items);
    expect(foodWithMaxNutritionTypes).toEqual({
      name: "Banana",
      nutritions: {
        carbs: 40,
        protein: 8,
        sugar: 30,
        vitamins: 45,
      },
      treats: [
        "constipation",
        "vitamin deficiency",
        "skin issues",
        "sleep problems",
      ],
      type: "fruit",
    });
  });

  test("getTotalProteinsFromNutsSolvingSugarIssues test", () => {
    expect(getTotalProteinsFromNutsSolvingSugarIssues(items)).toEqual(18);
  });

  test("getItemsSolvingMigraineWithHighVitamins", () => {
    const foodTreatsMigrane = getItemsSolvingMigraineWithHighVitamins(items);
    expect(foodTreatsMigrane).toEqual([
      {
        name: "Apple",
        nutritions: {
          carbs: 22,
          protein: 22,
          vitamins: 60,
        },
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        type: "fruit",
      },
    ]);
  });

  test("getTotalVitaminsFromOneFruitAndOneNut", () => {
    const totalVitamins = getTotalVitaminsFromOneFruitAndOneNut(items);
    expect(totalVitamins).toBe(110);
  });
});

describe("processNaturalNumbers and segragateVowelsAndConsonants", () => {
  test("should return correct sums for n = 1", () => {
    const result = processNaturalNumbers(1);
    expect(result).toEqual({ odd: 1, even: 0 });
  });

  test("should return correct sums for n = 2", () => {
    const result = processNaturalNumbers(2);
    expect(result).toEqual({ odd: 1, even: 2 });
  });

  test("should return correct sums for n = 5", () => {
    const result = processNaturalNumbers(5);
    expect(result).toEqual({ odd: 9, even: 6 });
  });

  test("should segregate vowels and consonants correctly", () => {
    const alphabets = generateAlphabets();
    const result = segregateVowelsAndConsonants(alphabets);
    expect(result).toEqual({
      vowels: ["a", "e", "i", "o", "u"],
      consonants: [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
    });
  });
});

describe("problem number 18", () => {
  const movieData = require("../textFiles/movies.json");
  test("getUniqueActors test", () => {
    const actorsArray = getUniqueActors(movieData);
    console.log(actorsArray);
  });

  test("getThreeMoviesPerYear test", () => {
    expect(getThreeMoviesPerYear(movieData)).toEqual({
      2017: ["The Book of Love", "Split", "xXx: Return of Xander Cage"],
      2018: ["Insidious: The Last Key", "The Strange Ones", "Sweet Country"],
    });
  });
});

describe("trim composition", () => {
  test("composedTrim test", () => {
    expect(composedTrim("   Hi  Saiprasad    Here    ")).toBe(
      "Hi Saiprasad Here"
    );
  });
});
