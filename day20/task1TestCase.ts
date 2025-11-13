import { TeamSelection } from "./task1.ts";

let TestCase = [
  {
    id: 1,
    Input: ["a", "b", "c", "d", "e", "f", "g"],
    size: 2,
    output: [
      ["a", "b"],
      ["b", "c"],
      ["c", "d"],
      ["d", "e"],
      ["e", "f"],
      ["f", "g"],
      ["g", "a"],
    ],
  },
  {
    id: 2,
    Input: ["12", "13", "14"],
    size: 3,
    output: ["12", "13", "14"],
  },
  {
    id: 3,
    Input: ["12", "13", "14"],
    size: 2,
    output: [
      ["12", "13"],
      ["13", "14"],
      ["14", "12"],
    ],
  },
  {
    id: 4,
    Input: ["a", "b", "c", "d", "b"],
    size: 2,
    output: "Invalid input",
  },
  {
    id: 5,
    Input: ["a", "b", "c", "d", "e", "f", "g"],
    size: 3,
    output: [
      ["a", "b", "c"],
      ["b", "c", "d"],
      ["c", "d", "e"],
      ["d", "e", "f"],
      ["e", "f", "g"],
      ["f", "g", "a"],
      ["g", "a", "b"],
    ],
  },
  {
    id: 6,
    Input: ["a", "b", "c", "d", "e", "f", "g"],
    size: 1,
    output: "Invalid team size",
  },
  {
    id: 7,
    Input: [""],
    size: 3,
    output: "Invalid team size",
  },
  {
    id: 8,
    Input: [" ", " ", " "],
    size: 2,
    output: "Invalid input",
  },
  {
    id: 9,
    Input: [" ", "", " "],
    size: 2,
    output: "Invalid input",
  },
  {
    id: 10,
    Input: ["a", "b", "c", "d"],
    size: 5,
    output: "Invalid team size",
  },
  {
    id: 11,
    Input: ["a", "b", "c", "s"],
    size: -3,
    output: "Invalid team size",
  },
  {
    id: 12,
    Input: ["Joseph", "Thomas", "John", "Jones"],
    size: 2,
    output: [
      ["Joseph", "Thomas"],
      ["Thomas", "John"],
      ["John", "Jones"],
      ["Jones", "Joseph"],
    ],
  },
];

TestCase.forEach(({ Input, size, output, id }) => {
  let result = TeamSelection(Input, size);
  if (JSON.stringify(result) === JSON.stringify(output))
    console.log("Passed at ", id);
  else console.log("Failed at ", id, result, output);
});