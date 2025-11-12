import { DetectSymmetry } from "./task1.ts";

let TestCase = [
  {
    id: 1,
    Input: [
      [1, 2, 3],
      [2, 5, 6],
      [3, 6, 9],
    ],
    output: { horizontal: false, vertical: false, diagonal: true },
  },
  {
    id: 2,
    Input: [
      [1, 4, 1],
      [8, 0, 8],
      [1, 4, 1],
    ],
    output: { horizontal: true, vertical: true, diagonal: true },
  },
  {
    id: 3,
    Input: [
      [1, 4, 6, 1],
      [2, 9, 7, 2],
      [0, 7, 8, 0],
      [1, 4, 6, 1],
    ],
    output: { horizontal: true, vertical: true, diagonal: true },
  },
  {
    id: 4,
    Input: [
      [1, 2, 3, 4, 1],
      [8, 3, 2, 7, 8],
      [3, 1, 6, 4, 3],
      [7, 7, 5, 3, 7],
      [1, 2, 3, 4, 1],
    ],
    output: { horizontal: true, vertical: true, diagonal: true },
  },
  {
    id: 5,
    Input: [[1]],
    output: { horizontal: true, vertical: true, diagonal: true },
  },
  {
    id: 6,
    Input: [
      [1, 2, 3, 4, 1],
      [8, 3, 2, 7, 8],
      [3, 1, 6, 4, 3],
      [7, 17, 5, 3, 7],
      [1, 2, 3, 4, 1],
    ],
    output: { horizontal: true, vertical: true, diagonal: false },
  },
  {
    id: 7,
    Input: [
      [1, 4, 6, 1],
      [2, 9, 7, 2],
      [0, 17, 8, 0],
      [1, 4, 6, 1],
    ],
    output: { horizontal: true, vertical: true, diagonal: false },
  },
  {
    id: 8,
    Input: [
      [1, 4, 1],
      [8, 0, 8],
      [10, 4, 1],
    ],
    output: { horizontal: false, vertical: false, diagonal: false },
  },
  {
    id: 9,
    Input: [
      [1, 4, 1],
      [8, 0, 8],
      [10, 4],
    ],
    output: "Invalid input",
  },
  {
    id: 10,
    Input: [
      [1, 4, 1],
      [8, 8],
      [10, 4, 0],
    ],
    output: "Invalid input",
  },
  {
    id: 11,
    Input: [
      [4, 1],
      [8, 8, 0],
      [10, 4, 0],
    ],
    output: "Invalid input",
  },
  {
    id: 12,
    Input: [
      [8, 8, 0],
      [10, 4, 0],
    ],
    output: 'Invalid input'
  },
];

TestCase.forEach(({Input, output, id}) => {
    let result = DetectSymmetry(Input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})