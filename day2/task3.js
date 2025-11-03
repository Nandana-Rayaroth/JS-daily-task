import { ArrayUtility } from "../utility.js";
function EvenList(list) {
  let sample = [];
  if (!Array.isArray(list)) return "Invalid input";
  if (list.length === 0) {
    return "Invalid input";
  } else {
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === "number") {
        if (list[i] % 2 === 0) {
          sample.push(list[i]);
        }
      } else {
        return "Invalid input";
      }
    }
    return sample;
  }
}
// console.log(EvenList([1, 4, 6, 3, 10]))

const TestCases = [
  {
    id: 1,
    input: [0, -5, 9, 4, -12],
    output: [0, 4, -12],
  },
  {
    id: 2,
    input: [23, 45, 89, 90],
    output: [90],
  },
  {
    id: 3,
    input: [],
    output: "Invalid input",
  },
  {
    id: 4,
    input: {},
    output: "Invalid input",
  },
  {
    id: 5,
    input: 24,
    output: "Invalid input",
  },
  {
    id: 6,
    input: NaN,
    output: "Invalid input",
  },
  {
    id: 7,
    input: null,
    output: "Invalid input",
  },
  {
    id: 8,
    input: [34, 456, "hello", 89],
    output: "Invalid input",
  },
  {
    id: 9,
    input: [34, 98, ""],
    output: "Invalid input",
  },
  {
    id: 10,
    input: ["hello", "hi"],
    output: "Invalid input",
  },
  {
    id: 11,
    input: "",
    output: "Invalid input",
  },
  {
    id: 12,
    input: "Morning",
    output: "Invalid input",
  },
  {
    id: 13,
    input: [, , ,],
    output: "Invalid input",
  },
  {
    id: 14,
    input: true,
    output: "Invalid input",
  },
  {
    id: 15,
    input: [-98, -456, -748, -34],
    output: [-98, -456, -748, -34],
  },
  {
    id: 16,
    input: [2.4, 10, 12, 3],
    output: [10, 12],
  },
];
TestCases.forEach(({ input, output }) => {
  let result = EvenList(input);
  let text = ArrayUtility(result, output)
  console.log(text)
});

//

