import { SeatingArrangement } from "./task2.ts";

let TestCase = [
  {
    id: 1,
    input: "A, B, C",
    output: [
      ["A", "B", "C"],
      ["B", "C", "A"],
      ["C", "A", "B"],
    ],
  },
  {
    id: 2,
    input: "A, B, C, D",
    output: [
        ['A', 'B', 'C', 'D'],
        ['B', 'C', 'D', 'A'],
        ['C', 'D', 'A', 'B'],
        ['D', 'A', 'B', 'C']
    ]
  },
  {
    id: 3,
    input: "A, B",
    output: [
        ['A', 'B'],
        ['B', 'A']
    ]
  },
  {
    id: 4,
    input: "A",
    output: [["A"]]
  },
  {
    id: 5,
    input: "",
    output: 'Invalid input'
  },
  {
    id: 6,
    input: " ",
    output: 'Invalid input'
  },
  {
    id: 7,
    input: "1, 2, 4",
    output: [['1', '2', '4'], ['2', '4', '1'], ['4', '1', '2']]
  }
];

TestCase.forEach(({input, output, id}) => {
    let result = SeatingArrangement(input)
    if(JSON.stringify(result) === JSON.stringify(output)){
        console.log("Passed at ", id)
    }else{
        console.log("Failed at ", id, result, output)
    }
})