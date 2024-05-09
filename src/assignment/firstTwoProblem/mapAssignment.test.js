import { nthFib, changeAverageTemp } from "./mapAssignmet";

describe("map tests", () => {
  test("finding nth fibonacci number where n is the element of array", () => {
    expect(nthFib([2, 1, 5, 7])).toEqual([1, 1, 5, 13]);
  });

  test("Changing average temperature unit", () => {
    const poiArray = [
      {
        placeName: "Paris",
        famousFor: "Eiffel Tower",
        averageTemperature: 15.6,
      },
      {
        placeName: "New York City",
        famousFor: "Statue of Liberty",
        averageTemperature: 12.8,
      },
      {
        placeName: "Tokyo",
        famousFor: "Sushi",
        averageTemperature: 16.2,
      },
      {
        placeName: "Rio de Janeiro",
        famousFor: "Carnival",
        averageTemperature: 24.5,
      },
      {
        placeName: "Sydney",
        famousFor: "Sydney Opera House",
        averageTemperature: 21.3,
      },
      {
        placeName: "Cairo",
        famousFor: "Pyramids of Giza",
        averageTemperature: 25.7,
      },
      {
        placeName: "Rome",
        famousFor: "Colosseum",
        averageTemperature: 19.8,
      },
      {
        placeName: "Cape Town",
        famousFor: "Table Mountain",
        averageTemperature: 17.2,
      },
      {
        placeName: "Bali",
        famousFor: "Beaches",
        averageTemperature: 27.9,
      },
      {
        placeName: "Machu Picchu",
        famousFor: "Inca Ruins",
        averageTemperature: 14.1,
      },
    ];
    expect(changeAverageTemp(poiArray)).toStrictEqual([
      {
        placeName: "Paris",
        famousFor: "Eiffel Tower",
        averageTemperature: "60.08",
      },
      {
        placeName: "New York City",
        famousFor: "Statue of Liberty",
        averageTemperature: "55.04",
      },
      {
        placeName: "Tokyo",
        famousFor: "Sushi",
        averageTemperature: "61.16",
      },
      {
        placeName: "Rio de Janeiro",
        famousFor: "Carnival",
        averageTemperature: "76.10",
      },
      {
        placeName: "Sydney",
        famousFor: "Sydney Opera House",
        averageTemperature: "70.34",
      },
      {
        placeName: "Cairo",
        famousFor: "Pyramids of Giza",
        averageTemperature: "78.26",
      },
      {
        placeName: "Rome",
        famousFor: "Colosseum",
        averageTemperature: "67.64",
      },
      {
        placeName: "Cape Town",
        famousFor: "Table Mountain",
        averageTemperature: "62.96",
      },
      {
        placeName: "Bali",
        famousFor: "Beaches",
        averageTemperature: "82.22",
      },
      {
        placeName: "Machu Picchu",
        famousFor: "Inca Ruins",
        averageTemperature: "57.38",
      },
    ]);
  });
});
