import { AnalyzeHeatmap } from "./task1.js";

let TestCase = [
  {
    id: 1,
    input: [
      [30, 32, 35],
      [28, 40, 33],
      [31, 36, 38],
    ],
    output: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.7,
      hottestPoint: [1, 1],
      coldestPoint: [1, 0],
    },
  },
  {
    id: 2,
    input: [
      [24, 54, 23],
      [54, 65, 58],
      [23, 53, 12],
    ],
    output: {
      maxTemp: 65,
      minTemp: 12,
      averageTemp: 40.7,
      hottestPoint: [1, 1],
      coldestPoint: [2, 2],
    },
  },
  {
    id: 3,
    input: [
      [13, 34, 54],
      [43, 89],
      [23, 54, 56, 78],
    ],
    output: {
      maxTemp: 89,
      minTemp: 13,
      averageTemp: 49.3,
      hottestPoint: [1, 1],
      coldestPoint: [0, 0],
    },
  },
  {
    id: 4,
    input: [
        [12, 43, 45],
        [23, 65, 6],
        [54, 23],
        []
    ],
    output: "Invalid input"
  },
  {
    id: 5,
    input: [[]],
    output: "Invalid input"
  }
  
];

TestCase.forEach(({id, input, output}) => {
    let result = AnalyzeHeatmap(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})