import { objectEquality } from "../objectutility.js";

function deepClone(obj1) {
    let result = JSON.parse(JSON.stringify(obj1))
    return result
}

// let obj = {
//   name: "JavaScript",
//   country: "US",
//   dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
// };

// console.log(deepClone(obj))

const TestCase = [
  {
    id: 1,
    input: { name: "John", mark: 34 },
    output: { name: "John", mark: 34 },
  },
  {
    id: 2,
    input: {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    },
    output: {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    },
  },
  {
    id : 3,
  }
];
TestCase.forEach(({input, output}) => {
  let result = deepClone(input)
  let flag = objectEquality(result, output)
  console.log(flag)
})

// 