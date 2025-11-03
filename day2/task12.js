

function maxProduct(arr) {
  if ((!Array.isArray(arr)) || (arr.length < 3)) return "Invalid input";
  let sortted = arr.sort((a, b) => a - b);

  let firstMax = sortted[sortted.length - 1];
  let secondMax = sortted[sortted.length - 2];
  let thirdMax = sortted[sortted.length - 3];

  let maxProduct = firstMax * secondMax * thirdMax;
  if(!maxProduct&&maxProduct!==0) return 'Invalid input'
   return maxProduct
}

// console.log(maxProduct(["hello", "hi", "wow"]));
// maxProduct([1,2,3,4,5])

const TestCase = [
  {
    id : 1,
    input : [1, 2, 3, 4],
    output : 24
  },
  {
    id : 2,
    input : [-4, -3, -2, -1, 0],
    output : 0
  },
  {
    id : 3,
    input : [-1, -2, -3, -4, -5],
    output : -6
  },
  {
    id : 4,
    input : [23, 45],
    output : 'Invalid input'
  },
  {
    id : 5,
    input : [1, 2, 3],
    output : 6
  },
  {
    id : 6,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 8,
    input : "hello",
    output : 'Invalid input'
  },
  {
    id : 9,
    input : ["hello", "hi", "hello"],
    output : 'Invalid input'
  },
  {
    id : 10,
    input : undefined,
    output : 'Invalid input'
  },
  {
    id : 11,
    input : null,
    output : 'Invalid input'
  },
  {
    id : 12,
    input : 345,
    output : 'Invalid input'
  },
  {
    id : 13,
    input : true,
    output : 'Invalid input'
  },
  {
    id : 14,
    input : " ",
    output : 'Invalid input'
  },
  {
    id : 15,
    input : "",
    output : 'Invalid input'
  }
]

TestCase.forEach(({input, output}) => {
  let result = maxProduct(input)
  if(result === output) console.log("Passed")
  else console.log("failed");
})

// 
