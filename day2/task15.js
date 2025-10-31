
function reverseWithorder(str){
  if(typeof(str) !== "string" || str.trim() === "") return 'Invalid input'
  str = str.trim()
  if(str.length === 0) return 'Invalid input'
  let temp = str.split(" ")
  let sample2 = []
  for(let i=0; i<temp.length; i++){
    sample2[i] = temp[i].split("").reverse().join("")
  }

  return(sample2.toString().replace(/[,]/g," ")) 
}

const TestCase = [
  {
    id: 1,
    input: "Hello world",
    output: "olleH dlrow",
  },
  {
    id: 2,
    input: "Programmers are awesome",
    output: "sremmargorP era emosewa",
  },
  {
    id: 3,
    input: "Programming is fun",
    output: "gnimmargorP si nuf",
  },
  {
    id : 4,
    input : "Malayalam",
    output : "malayalaM"
  },
  {
    id : 5,
    input : "",
    output : 'Invalid input'
  },
  {
    id : 6,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : [1, 2, 3, 5],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 9,
    input : { greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 11,
    input : 245,
    output : 'Invalid input'
  },
  {
    id : 12,
    input : "2445",
    output : '5442'
  },
  {
    id : 13,
    input : true,
    output : 'Invalid input'
  },
  {
    id : 14,
    input : null,
    output : 'Invalid input'
  },
  {
    id : 15,
    input : undefined,
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
  let result = reverseWithorder(input)
  if(result === output) console.log("Passed")
  else console.log("Failed"); 
})

// 