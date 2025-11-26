import { CommonKey } from "./task6.ts";

let TestCase = [
  {
    id: 1,
    obj1: { name: "Brad", age: "24" },
    obj2: { name: "Titan", place: "mars" },
    output: ["name"],
  },
  {
    id: 2,
    obj1: { name: "Amritha", age: 54, isEmployee: true },
    obj2: { name: "Anjana", age: 52, isEmployee: false },
    output: ["name", "age", "isEmployee"],
  },
  {
    id: 3,
    obj1: { name: "Archana", age: 43 },
    obj2: { isEmployee: true, stream: "Organization" },
    output: "No common keys",
  },
  {
    id: 4,
    obj1: { name: "Arjun" },
    obj2: { isEmployee: "Yes" },
    output: "No common keys",
  },
  {
    id: 5,
    obj1: {},
    obj2: {name: "Abhishek"},
    output: "Invalid input"
  },
  {
    id: 6,
    obj1: {name: "Anoij"},
    obj2: {},
    output: "Invalid input"
  }
];

TestCase.forEach(({id, obj1, obj2, output}) => {
    let result = CommonKey(obj1, obj2)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})