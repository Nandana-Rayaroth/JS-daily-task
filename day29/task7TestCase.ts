import { ConvertToObj } from "./task7.ts";

let TestCase = [
  {
    id: 1,
    input: "?name=John&age=20&active=true",
    output: { name: "John", age: "20", active: "true" },
  },
  {
    id: 2,
    input: "?name=John",
    output: { name: "John" },
  },
  {
    id: 3,
    input: "name=John&age=20&active=true",
    output: "Invalid URL",
  },
  {
    id: 4,
    input: "?nameJohn",
    output: "Invalid URL",
  },
  {
    id: 5,
    input: "",
    output: "Invalid URL",
  },
  {
    id: 6,
    input: "?nameJohn&age20&activetrue",
    output: "Invalid URL"
  },
  {
    id: 7,
    input: "bhgbuhuhp",
    output: "Invalid URL"
  }
];

TestCase.forEach(({input, output, id}) => {
    let result = ConvertToObj(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})