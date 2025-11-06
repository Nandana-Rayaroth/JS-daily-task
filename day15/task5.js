function ResetRowColum(arr){
    if(!Array.isArray(arr)) return 'Invalid input'
    let flagInd = []
    for(let i = 0; i < arr.length; i++){
        if (!Array.isArray(arr[i])) return "Invalid input";
        for(let j = 0; j < arr[i].length; j++){
            if(typeof arr[i][j] !== 'number') return 'Invalid input'
            if(arr[i][j] === 0){
                flagInd = [i,j]
            }
        }
    }
    if(flagInd.length === 2){
      for (let i = 0; i < arr.length; i++) {
        if (i === flagInd[0]) {
          for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
          }
        }
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (j === flagInd[1]) {
            arr[i][j] = 0;
          }
        }
      }
    }
    return arr;
    
    
}

// console.log(ResetRowColum([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]))
// console.log(ResetRowColum([
//     [0, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]))
// console.log(ResetRowColum([
//     [0, 4, 1],
//     [3, 2, 6],
//     [9, 0, 1]
// ]))

let TestCase = [
  {
    id: 1,
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    output: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  },
  {
    id: 2,
    input: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
    ],
  },
  {
    id: 3,
    input: [
      [2, 4, 1],
      [3, 2, 6],
      [9, 4, 1],
    ],
    output: [
      [2, 4, 1],
      [3, 2, 6],
      [9, 4, 1],
    ],
  },
  {
    id: 4,
    input: [
      [34, 54, 23],
      [12, 45, 90],
      [43, 10, 0],
    ],
    output: [
      [34, 54, 0],
      [12, 45, 0],
      [0, 0, 0],
    ],
  },
  {
    id: 5,
    input: [
      [34, 54, 23],
      [0, 45, 90],
      [43, 10, 12],
    ],
    output: [
      [0, 54, 23],
      [0, 0, 0],
      [0, 10, 12],
    ],
  },
  {
    id: 6,
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 0],
    ],
    output: [
      [1, 2, 0],
      [4, 5, 0],
      [7, 8, 0],
      [0, 0, 0],
    ],
  },
  {
    id: 7,
    input: [
      [0, 4, 1],
      [3, 2, 6],
      [9, 0, 1],
    ],
    output : [
        [0, 0, 1],
        [3, 0, 6],
        [0, 0, 0]
    ]
  },
  {
    id : 8,
    input : 'hello',
    output : 'Invalid input'
  },
  {
    id : 9,
    input : [1, 2, 4, 5],
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [["hello", "hi"], ["abc", "efg"]],
    output : 'Invalid input'
  },
  {
    id : 11,
    input : [[1, 2], [3, 4], [5, 6], [0, 8]],
    output : [[0, 2], [0, 4], [0, 6], [0, 0]]
  },
  {
    id : 12,
    input : [[1, 2, 3], [2, 1, 4], [3, 0, "hello"]],
    output : 'Invalid input'
  },
  {
    id : 13,
    input : 1234,
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

TestCase.forEach(({input, output, id}) => {
    let result = ResetRowColum(input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})