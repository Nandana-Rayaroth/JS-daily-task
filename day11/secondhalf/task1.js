import { ArrayUtility } from "../../utility.js";
function IncreassOrder(arr){
  if(!Array.isArray(arr)) return "Invalid input"

    if(arr.length <= 50){
      let unique = [];
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) !== "number") return 'Invalid input'
        if (!unique.includes(arr[i])) {
          unique.push(arr[i]);
        }
      }
      let min = Math.min(...unique);
      result.push(min);

      let indMin = unique.indexOf(min);

      if (unique.slice(indMin + 1).length >= 3) {
        unique = unique.slice(indMin + 1);
      }

      for (let i = 0; i <= unique.length; i++) {
        if (!result.includes(unique[i])) {
          if (result.length > 3) {
            break;
          }
          if (unique[i] > min) {
            result.push(unique[i]);
            min = unique[i];
          }
        }
      }
      return(result);
    }
    else{
        return("Maximum 50 input")
    }
}
// IncreassOrder([6, 9, 2, 0, 5, 7, 8, 2, 8])                                   
// IncreassOrder([10, 20, 15, 30, 22, 40])
// IncreassOrder([8, 3, 12, 89, 0, 6])
// IncreassOrder([23, 79, 34, 89, 45, 90, 45, 67])
// IncreassOrder([56, 98, 23, 10, 0, 20, 50, 45, 103, 678])
// IncreassOrder([45, 67, 12, 45, 90, 76, -4])
// IncreassOrder([-65, 0, 56, 20, 34, 56, 78, 50])
// IncreassOrder([45, 34, 56, 98, 23])
// IncreassOrder([654, -89, 0, 45, 82, 54])
// IncreassOrder([56, 89, 132, 56, 34, 65])
// IncreassOrder([56, 65, 32, 89, 34])
// IncreassOrder([56, 24, 65, 78, 12, 345])
// IncreassOrder([45, 67, 23, 56, 89])
// IncreassOrder([65, 23, 475, 678, 988])
// IncreassOrder([67, 244, 675, 890, 2342])

const TestCase = [
  {
    id: 1,
    input: [6, 9, 2, 0, 5, 7, 8, 2, 8],
    output: [0, 5, 7, 8],
  },
  {
    id: 2,
    input: [10, 20, 15, 30, 22, 40],
    output: [10, 20, 30, 40],
  },
  {
    id: 3,
    input: [8, 3, 12, 89, 0, 6],
    output: [0, 8, 12, 89],
  },
  {
    id: 4,
    input: [23, 79, 34, 89, 45, 90, 45, 67],
    output: [23, 79, 89, 90],
  },
  {
    id: 5,
    input: [56, 98, 23, 10, 0, 20, 50, 45, 103, 678],
    output: [0, 20, 50, 103],
  },
  {
    id: 6,
    input: [45, 67, 12, 45, 90, 76, -4],
    output: [-4, 45, 67, 90],
  },
  {
    id: 7,
    input: [-65, 0, 56, 20, 34, 56, 78, 50],
    output: [-65, 0, 56, 78],
  },
  {
    id: 8,
    input: [45, 34, 56, 98, 23],
    output: [23, 45, 56, 98],
  },
  {
    id: 9,
    input: [654, -89, 0, 45, 82, 54],
    output: [-89, 0, 45, 82],
  },
  {
    id: 10,
    input : 345,
    output : 'Invalid input'
  },
  {
    id: 11,
    input : ["hello", "hi"],
    output : 'Invalid input'
  },
  {
    id : 12,
    input : 1234,
    output : 'Invalid input'
  },
  {
    id : 13,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 14,
    input : {greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 15,
    input : [{}],
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
  let result = IncreassOrder(input)

  let flag = ArrayUtility(result, output)
  console.log(flag)

})