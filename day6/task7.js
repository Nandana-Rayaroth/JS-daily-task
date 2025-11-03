import { ArrayUtility } from "../utility.js";
function wrapper(arr) {
  if(!Array.isArray(arr) || arr.length === 0) return 'Invalid input'
  let result = [];
  
  function flatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      
      if (Array.isArray(arr[i])) {
        flatArray(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  return flatArray(arr)
}

// console.log(wrapper([1, [2, 3, [4]], 5]))
// console.log(wrapper([1,2,[2, 4, [6, 7, [6, 3], 4],[43, 67, [34, 56]]]]))
// console.log(wrapper([4, [6, 8], 9]))

const TestCase = [
  {
    id : 1,
    input : [1, 2, [4, 5], 6],
    output : [1, 2, 4, 5, 6]
  },
  {
    id : 2,
    input : [2, 3, [5, 7], 8],
    output : [2, 3, 5, 7, 8]
  },
  {
    id : 3,
    input : [5, 7, [1, 3, [4, 3, 8]]],
    output : [5, 7, 1, 3, 4, 3, 8]
  },
  {
    id : 4,
    input : [-1, 4, 5, [-12, -14, -16, [23, 45], [34, 24, [65, 677]]]],
    output : [-1, 4, 5, -12, -14, -16, 23, 45, 34, 24, 65, 677]
  },
  {
    id : 5,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 6,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 7,
    input : "",
    output : "Invalid input"
  },
  {
    id : 8,
    input : "hello",
    output : 'Invalid input'
  },
  {
    id : 9,
    input : "   ",
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
    input : 12344,
    output : 'Invalid input'
  },
  {
    id : 13,
    input : true,
    output : 'Invalid input'
  },
  {
    id : 14,
    input : 123*2,
    output : 'Invalid input'
  },
  {
    id : 15,
    input : '      ',
    output : 'Invalid input'
  }
]

TestCase.forEach(({input, output}) => {
  let result = wrapper(input)
  let flag = ArrayUtility(output, result)
  console.log(flag)
})

//