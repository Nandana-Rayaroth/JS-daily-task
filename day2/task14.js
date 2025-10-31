function checkPalindrome(str) {
    if(typeof(str) !== "string") return "Invalid input"
    str = str.replaceAll(/[.,!@#$%*?:;"'()\s]/g, "").toLowerCase()
    if(str.length === 0) return false
    let reversed = str.split("").reverse().join("")
    if(reversed === str) return true
    else return false
}
const TestCase = [
  {
    id: 1,
    input: "A man, a plan, a canal, Panama!",
    output: true,
  },
  {
    id: 2,
    input: "Racecar",
    output: true,
  },
  {
    id: 3,
    input: "Hello, world!",
    output : false
  },
  {
    id : 4,
    input : "",
    output : false
  },
  {
    id : 5,
    input : "     ",
    output : false
  },
  {
    id : 6,
    input : [1,2,4],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 9,
    input : {greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 10,
    input : "hello@olleh",
    output : true
  },
  {
    id : 11,
    input : "#@malayalam",
    output : true
  },
  {
    id : 12,
    input : "malAyalam",
    output : true
  },
  {
    id : 14,
    input : "English",
    output : false
  },
  {
    id : 15,
    input : "MALAYA*lam",
    output : true
  }
];

TestCase.forEach(({input, output}) => {
    let result = checkPalindrome(input) 
    if(result === output) console.log("Passed")
    else console.log("Failed", result, output)
})