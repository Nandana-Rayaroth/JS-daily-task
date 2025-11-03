import { objectEquality } from "../../objectutility.js";
function combineObject(obj1, obj2){
    if(typeof(obj1) !== "object" || typeof(obj2) !== "object" || obj1 === null || obj2 === null) return 'Invalid input'

    let result = Object.assign(obj1, obj2)
    return(result)
}

const TestCase = [
  {
      id : 1,
      input1 : {a: 1, b: 2},
      input2 : {b: 3, c: 4},
      output : {a: 1, b: 3, c: 4}
  },
  {
      id : 2,
      input1 : {a: 2, b: 3, c: 4},
      input2 : {a: 1, b: 2, c: 3},
      output : {a: 1, b: 2, c: 3}
  },
  {
      id : 3,
      input1 : "hello",
      input2 : {a: 2, b: 5},
      output : 'Invalid input'
  },
  {
      id : 4,
      input1 : {a: 4, b: 2},
      input2 : "hello",
      output : 'Invalid input'
  },
  {
      id : 5,
      input1 : "hello",
      input2 : "hi",
      output : 'Invalid input'
  },
  {
      id : 6,
      input1 : "",
      input2 : {a: 1, b: 5},
      output : 'Invalid input'
  },
  {
      id : 7,
      input1 : {a: 4, b: 9},
      input2 : "",
      output : 'Invalid input'
  },
  {
      id : 8,
      input1 : {},
      output : {},
      output : "Invalid input"
  },
  {
    id: 9,
    input1: {},
    input2: { a: 2, b: 4 },
    output: { a: 2, b: 4 },
  },
  {
    id: 10,
    input1 : 123,
    input2 : 545,
    output : 'Invalid input'
  },
  {
    id : 11,
    input1 : null,
    input2 : {a: 2, b: 5},
    output : 'Invalid input'
  },
  {
    id : 12,
    input1 : {a: 2, b: 4},
    input2 : undefined,
    output : 'Invalid input'
  },
  {
    id : 13,
    input1 : {a: 2, b: 4},
    input2 : null,
    output : 'Invalid input'
  },
  {
    id : 14,
    input1 : null,
    input2 : null,
    output : 'Invalid input'
  },
  {
    id : 15,
    input1 : "",
    input2 : "",
    output : 'Invalid input'
  }
];

TestCase.forEach(({input1, input2, output}) => {
    let result = combineObject(input1, input2)
    let flag = objectEquality(result, output)
    console.log(flag)
})


//