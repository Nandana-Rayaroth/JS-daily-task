function SortBySum(arr: number[][]){
    if(!Array.isArray(arr) || arr.length <= 0) return 'Invalid input'

    let sum:number[] = []
    let temp = []
    let sortted:number[][] = []
    for(let i:number = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            if(arr[i].length === 0) return 'Invalid input'
            sum.push(arr[i].reduce((acc:number, curr: number) => acc+curr, 0))
            temp.push({sum: sum[i], array: arr[i]})
        }
    }
    temp = temp.sort((a ,b) => b.sum - a.sum)
    for(let i:number = 0; i < temp.length; i++){
        sortted.push(temp[i].array)
    }
    return(sortted)
    
}

let TestCase = [
  {
      id: 1,
      Input: [[1, 2, 4], [4], [2, 7]],
      output : [[2, 7], [1, 2, 4], [4]]
  },
  {
      id: 2,
      Input : [[1, 2], [9, 5], [0, 4]],
      output: [[9, 5], [0, 4], [1, 2]]
  },
  {
      id: 3,
      Input: [[9,1], [0,2], [3, 2], [8, 1]],
      output: [[9, 1], [8, 1], [3, 2], [0, 2]]
  },
  {
    id: 4,
    Input: [[9, 1],[0, 2],[3, 2],[8, 1]],
    output: [[9,1], [8, 1], [3, 2], [0, 2]],
  },
  {
    id: 5,
    Input : [[-2, -5], [3, 4], [-1, 2]],
    output : [[3, 4], [-1, 2], [-2, -5]]
  },
  {
    id: 6,
    Input: [[1, 4], [-1, 2], [9, 1]],
    output : [[9, 1], [1, 4], [-1, 2]]
  },
  {
    id: 7,
    Input: [[], [1, 2]],
    output : 'Invalid input'
  },
  {
    id: 8,
    Input: [[]],
    output: 'Invalid input'
  },
  {
    id: 9,
    Input: [],
    output: 'Invalid input'
  },
  {
    id: 10,
    Input: [[2, 2, 2], [3, 3], [1, 1, 1, 1, 1, 1], [-1]],
    output: [[2, 2, 2], [3, 3], [1, 1, 1, 1, 1, 1], [-1]]
  },
  {
    id: 11,
    Input: [[8,2],[1,0],[9,1]],
    output: [[8,2],[9,1],[1,0]]
  },
  
];

TestCase.forEach(({Input, output, id}) => {
    let result = SortBySum(Input)
    if(JSON.stringify(result) === JSON.stringify(output)) console.log("Passed at ", id)
    else console.log("Failed at ",id, result, output)
})
