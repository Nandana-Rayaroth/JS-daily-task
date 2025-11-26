import { removeDigit } from "./task8.ts";

let TestCase = [
  {
    id: 1,
    input: "Room 45 on floor 3",
    output: "Room ## on floor #",
  },
  {
    id: 2,
    input: "Room43 at floor3",
    output: "Room## at floor#",
  },
  {
    id: 3,
    input: "#fref43",
    output: "#fref##",
  },
  {
    id: 4,
    input: "ABV46 nklfj 543",
    output: "ABV## nklfj ###",
  },
  {
    id: 5,
    input: "AFRnbr562",
    output: "AFRnbr###",
  },
  {
    id: 6,
    input: "afsgergw",
    output: "afsgergw",
  },
  {
    id: 7,
    input: "",
    output: "Invalid input"
  },
  {
    id: 8,
    input: "345234",
    output: "######"
  }
];

TestCase.forEach(({input, output, id}) => {
    let result = removeDigit(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at" , id, "Expected : ", output, "Got: ", result)
})