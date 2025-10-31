import { ArrayUtility } from "../utility.js";

function LengthSort(str) {
    if(!Array.isArray(str) || str.length <= 1 ) return 'Invalid input'
    
    for(let i = 0; i < str.length; i ++){
        if (typeof str[i] !== "string" || str[i] === "") return "Invalid input";
    }

    let splitted = str.toString().split(",")
    let sortted = splitted.sort((a, b) => a.length - b.length)
    return sortted
}

const TestCase = [
  {
    id: 1,
    input: ["open", "source", "programming", "is", "fun"],
    output: ["is", "fun", "open", "source", "programming"],
  },
  {
    id: 2,
    input: ["hello", "world"],
    output: ["hello", "world"],
  },
  {
    id: 3,
    input: ["cat", "dog", "elephant", "tiger"],
    output: ["cat", "dog", "tiger", "elephant"],
  },
  {
    id : 4,
    input : "",
    output : 'Invalid input'
  },
  {
    id: 5,
    input : {},
    output : 'Invalid input'
  },
  {
    id: 6,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : [{ greeting : "hello"}],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : "hello",
    output : 'Invalid input'
  },
  {
    id : 9,
    input : 1234,
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [12,324,4546],
    output : 'Invalid input'
  },
  {
    id : 11,
    input : null,
    output : 'Invalid input'
  },
  {
    id : 12,
    input : undefined,
    output : 'Invalid input'
  },
  {
    id : 13,
    input : ["", "", ""],
    output : 'Invalid input'
  },
 {
    id : 14,
    input : "     ",
    output : 'Invalid input'
 },
 {
    id : 15,
    input : "abc, ghtuv, lmo, qrt",
    output : 'Invalid input'
 }
];

TestCase.forEach(({input, output}) => {
    let result = LengthSort(input)
    let flag = ArrayUtility(result, output)
    console.log(flag); 
})