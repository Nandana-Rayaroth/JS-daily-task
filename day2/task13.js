
function logestWord(list) {
    if(!Array.isArray(list) || (list.length <= 1)) return 'Invalid input'
    let max = []
    for(let i = 0; i < list.length; i++) {
        if(typeof(list[i]) !== "string") return 'Invalid input'
        if(list[i].length > max.length){
            max = list[i]
        }
    }
    return max
}

// console.log(logestWord(["programming", "is", "fun"]))

const TestCase = [
  {
    id: 1,
    input: ["cat", "dog", "elephant", "tiger"],
    output: "elephant",
  },
  {
    id: 2,
    input: ["apple", "banana", "orange"],
    output: "banana",
  },
  {
    id: 3,
    input: ["programming", "is", "fun"],
    output: "programming",
  },
  {
    id: 4,
    input: "hello",
    output: "Invalid input",
  },
  {
    id: 5,
    input: [],
    output: "Invalid input",
  },
  {
    id: 6,
    input: {},
    output: "Invalid input",
  },
  {
    id: 7,
    input: [123, 453, 54645],
    output: "Invalid input",
  },
  {
    id : 8,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 9,
    input : 1234,
    output : 'Invalid input'
  },
  {
    id : 10,
    input : true,
    output : 'Invalid input'
  },
  {
    id : 11,
    input : undefined,
    output : 'Invalid input'
  },
  {
    id : 12,
    input : {greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 13,
    input : ["good morning everyone"],
    output : 'Invalid input'
  },
  {
    id : 14,
    input : -435,
    output : 'Invalid input'
  },
  {
    id : 15,
    input : "",
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
    let result = logestWord(input)
    if(result === output) console.log("Passed")
    else console.log("Failed"); 
})

// 