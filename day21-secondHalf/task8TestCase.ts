import { CheckEven } from "./task8.ts";

let TestCase = [
  {
    id: 1,
    input: 23,
    output: "odd",
  },
  {
    id: 2,
    input: 4,
    output: "Even",
  },
  {
    id: 3,
    input: 4.56,
    output: "Invalid input",
  },
  {
    id: 4,
    input: -4,
    output: "Even",
  },
  {
    id: 5,
    input: 0,
    output: "Enter values greater than zero",
  },
  {
    id: 6,
    input: 23*43,
    output: 'odd'
  },
  {
    id: 7,
    input: 23/412432.453,
    output: 'Invalid input'
  },
  {
    id: 8,
    input: -43.54,
    output: 'Invalid input'
  },
  {
    id: 9,
    input: 0.120,
    output: 'Invalid input'
  },
  {
    id: 10,
    input: -0.1234,
    output: 'Invalid input'
  },
];

TestCase.forEach(({input, output, id}) => {
    let result = CheckEven(input)
    if(result === output) console.log("Passed at", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})