
function maxProduct(arr) {
    if(!Array.isArray(arr) || arr.length <= 0) return "Invalid input"

    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) !== 'number') return "Invalid input"
    }
    if (arr.length < 3) return "Minimum three elements";

    let sortted = arr.sort((a, b) => a - b)

    let firstMax = sortted[sortted.length - 1]
    let secondMax = sortted[sortted.length - 2]
    let thirdMax = sortted[sortted.length - 3]

    let maxProduct = firstMax*secondMax*thirdMax
    return maxProduct
}

// maxProduct([89, 55, 44, 77, 0]);
// maxProduct([1, 2, 3, 4])
// maxProduct([-4, -3, -2, -1, 0])
// maxProduct([-1, -2, -3, -4, -5])

const TestCase = [
  {
    id: 1,
    input: [1, 2, 3, 4],
    output: 24,
  },
  {
    id: 2,
    input: [-4, -3, -2, -1, 0],
    output: 0,
  },
  {
    id: 3,
    input: [-1, -2, -3, -4, -5],
    output: -6,
  },
  {
    id: 4,
    input: [89, 55, 44, 77, 0],
    output: 376915,
  },
  {
    id: 5,
    input: [12, 34],
    output: "Minimum three elements",
  },
  {
    id : 6,
    input : [1, 2, 3],
    output : 6
  },
  {
    id : 7,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : [       ],
    output : 'Invalid input'
  },
  {
    id : 9,
    input : [" ", " ", " ", " "],
    output : 'Invalid input'
  },
  {
    id : 10,
    input : ["hello", "hi"],
    output : 'Invalid input'
  },
  {
    id : 11,
    input : [{}],
    output : 'Invalid input',
  },
  {
    id : 12,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 13,
    input : { greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 14,
    input : 123,
    output : 'Invalid input'
  },
  {
    id : 15,
    input : null,
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
    let result = maxProduct(input)
    if(result === output) console.log("Passed")
    else console.log("Failed");
})

//
