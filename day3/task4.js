import { ArrayUtility } from "../utility.js"
function Replace(arr1, arr2, positin) {
    if(((!Array.isArray(arr1)) || (!Array.isArray(arr2))) || positin > arr1.length || positin < 0 ) return "Invalid input"
    if(arr1.length >= 1 && arr2.length >= 1){
      arr1 = arr1.flat();
      arr2 = arr2.flat();
      let temp = [];
      let flatted = [];

      for (let i = 0; i < arr1.length; i++) {
        if (positin - 1 === i) {
          temp.push(arr1[i]);
          temp[i + 1] = arr2;
        } else if (positin === 0 && i === 0) {
          temp.push(arr2);
          temp[i + 1] = arr1;
          break;
        } else {
          temp.push(arr1[i]);
        }
      }
      flatted = temp.flat();
      return flatted;
    }
    else{
        return 'Invalid input'
    }
}

// console.log(Replace([1, 2, 3], [4, 5, 6], 0))
// console.log(Replace([3,5,6],[4, 7, 2, 6],3))
// console.log(Replace([2, 3, 4, [5, 6]], [7, 8], 3))

const TestCase = [
  {
    id: 1,
    firstArray: [1, 2, 3],
    secondArray: [4, 5, 6],
    position: 2,
    output: [1, 2, 4, 5, 6, 3],
  },
  {
    id: 2,
    firstArray: [3, 5, 6],
    secondArray: [4, 7, 2, 6],
    position: 3,
    output: [3, 5, 6, 4, 7, 2, 6],
  },
  {
    id: 3,
    firstArray: [12],
    secondArray: [2, 3, 4],
    position: 2,
    output: "Invalid input",
  },
  {
    id: 4,
    firstArray: [1, 2, 4],
    secondArray: [5, 6, 7],
    position: 0,
    output: [5, 6, 7, 1, 2, 4],
  },
  {
    id: 5,
    firstArray: [2, 3, 4, [5, 6]],
    secondArray: [7, 8],
    position: 3,
    output: [2, 3, 4, 7, 8, 5, 6],
  },
  {
    id: 6,
    firstArray: [2, 3, 4, [5, 6]],
    secondArray: [7, 8],
    position : 4,
    output : [2, 3, 4, 5, 7, 8, 6]
  },
  {
    id : 7,
    firstArray : [],
    secondArray : [1, 2, 4],
    positin : 3,
    output : 'Invalid input'
  },
  {
    id : 8,
    firstArray : [1, 2, 4],
    secondArray : [],
    position : 2,
    output : 'Invalid input'
  },
  {
    id : 9,
    firstArray : [],
    secondArray : [],
    position : 3,
    output : 'Invalid input'
  },
  {
    id : 10,
    firstArray : 234,
    secondArray : 567,
    position : 2,
    output : 'Invalid input'
  },
  {
    id : 11,
    firstArray : "hello hi",
    secondArray : "wonderful",
    position : 1,
    output : 'Invalid input'
  },
  {
    id : 12,
    firstArray : ["hi", "hello", "everyone"],
    secondArray : ["good", "evening", "friends"],
    position : 2,
    output : ["hi", "hello", "good", "evening", "friends", "everyone"]
  },
  {
    id : 13,
    firstArray : {},
    secondArray : [23, 56, 67],
    position : 2,
    output : 'Invalid input'
  },
  {
    id : 14,
    firstArray : null,
    secondArray : [23, 56, 89],
    position : 4,
    output : 'Invalid input'
  },
  {
    id: 15,
    firstArray : [43, 55, 23],
    secondArray : null,
    position : 0,
    output : 'Invalid input'
  },
  {
    id : 16,
    firstArray : [1, 2, 3],
    output : [5, 6, 7, 8],
    position : -3,
    output : 'Invalid input'
  }
];

TestCase.forEach(({firstArray, secondArray, position, output}) => {
    let result = Replace(firstArray, secondArray, position)
    let flag = ArrayUtility(result, output)
    console.log(flag)
})

// 