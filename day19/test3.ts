import { SortByScoreRank } from "./task3.ts";

let TestCase = [
  {
    id: 1,
    Input: [100, 90, 100, 80],
    output: [
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 90, rank: 2 },
      { score: 80, rank: 3 },
    ],
  },
  {
    id: 2,
    Input: [100, 100, 90, 80],
    output: [
      { score: 100, rank: 1 },
      { score: 100, rank: 1 },
      { score: 90, rank: 2 },
      { score: 80, rank: 3 },
    ],
  },
  {
    id: 3,
    Input: [45, 45, 45, 45],
    output: [
      { score: 45, rank: 1 },
      { score: 45, rank: 1 },
      { score: 45, rank: 1 },
      { score: 45, rank: 1 },
    ],
  },
  {
    id: 4,
    Input: [91, 34, 0, 65],
    output: [
      { score: 91, rank: 1 },
      { score: 65, rank: 2 },
      { score: 34, rank: 3 },
      { score: 0, rank: 4 },
    ],
  },
  {
    id: 5,
    Input: [91, 34, -5, 35],
    output: [
      { score: 91, rank: 1 },
      { score: 35, rank: 2 },
      { score: 34, rank: 3 },
      { score: -5, rank: 4 },
    ],
  },
  {
    id: 6,
    Input: [0, 0, 0, 0],
    output: [
      { score: 0, rank: 1 },
      { score: 0, rank: 1 },
      { score: 0, rank: 1 },
      { score: 0, rank: 1 },
    ],
  },
  {
    id: 7,
    Input: [],
    output: "Invalid input",
  },
];

TestCase.forEach(({ Input, output, id }) => {
  let result = SortByScoreRank(Input);
  if (JSON.stringify(result) === JSON.stringify(output))
    console.log("Passed at ", id);
  else console.log("Failed at ", id, result, output);
});