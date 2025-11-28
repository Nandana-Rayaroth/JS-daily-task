import { SelectionSort } from "./selectionsort.js";

let TestCase = [
  {
    id: 1,
    input: [7, 12, 9, 11, 3],
    output: [3, 7, 9, 11, 12],
  },
  {
    id: 2,
    input: [81, 54, 32, 1, 98, 43],
    output: [1, 32, 43, 54, 81, 98],
  },
  {
    id: 3,
    input: [43, 54, 90, 100, 12, 2, 0, 190],
    output: [0, 2, 12, 43, 54, 90, 100, 190],
  },
  {
    id: 4,
    input: [980, 234, 2142, 5432, 123, 9834],
    output: [123, 234, 980, 2142, 5432, 9834],
  },
  {
    id: 5,
    input: [12, 34, 54, 76, 89],
    output: [12, 34, 54, 76, 89],
  },
  {
    id: 6,
    input: [90, 86, 56, 34, 12, 5],
    output: [5, 12, 34, 56, 86, 90],
  },
  {
    id: 7,
    input: [124, 452, 5234, 123, 34],
    output: [34, 123, 124, 452, 5234],
  },
  {
    id: 8,
    input: [],
    output: "Invalid input"
  },
  {
    id: 9,
    input: [34, 54, -84, 45, 32],
    output: [-84, 32, 34, 45, 54]
  }
];

TestCase.forEach(({input, output, id}) => {
    let result = SelectionSort(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id)
})