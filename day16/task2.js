function DoubleAppears(arr){
    if(!Array.isArray(arr)) return 'Invalid input'
   let frq = {}
   for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number') return 'Invalid input'
    if(arr[i] in frq) frq[arr[i]]++
    else frq[arr[i]] = 1
   }
   let keyArr = Object.keys(frq)
   let valArr = Object.values(frq)
   for(let i in valArr){
    if(valArr[i] > 2) return 'Only accept twice repetation'
   }
   for(let i in valArr) {
    if(valArr[i] === 1) return Number(keyArr[i])
   }
   return 'There is no unique element'
}

let TestCase = [
  {
    id: 1,
    input: [1, 2, 3, 2, 1],
    output: 3,
  },
  {
    id: 2,
    input: [1, 2, 4, 5, 2, 2],
    output: "Only accept twice repetation",
  },
  {
    id: 3,
    input: [12, 24, 43, 12, 34, 34, 43],
    output: 24,
  },
  {
    id: 4,
    input: [12, 23, 54, 23, 12, 54],
    output: "There is no unique element",
  },
  {
    id : 5,
    input : [23, 23, 54, 65],
    output : 54
  },
  {
    id : 6,
    input : ["hello", "hi"],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : ["", "", ""],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : [" ", " "],
    output : 'Invalid input'
  },
  {
    id : 9,
    input : [{greet : "hello"}],
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 11,
    input : "hello",
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
    input : null,
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output, id}) => {
    let result = DoubleAppears(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})