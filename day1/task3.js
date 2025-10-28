
const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

function Recreater(std) {
  if(std.length === 0 || !Array.isArray(std)) return 'Invalid input'
    const created = [];
    let keys = []
    let values = []
    let Invalid = ''
    std.forEach((i) => {
      keys.push(Object.keys(i));
      values.push(Object.values(i));

      if (typeof i.marks !== "number" || typeof i.name !== "string") Invalid = "Invalid input";
      if (i.name === "" || i.marks === "") Invalid = "Invalid input";
      
      if (
        !Object.keys(i).includes("name") ||
        !Object.keys(i).includes("marks")
      ) Invalid = 'Invalid input'
       
    })

    if(Invalid == 'Invalid input'){
      return(Invalid)
    }
    if(keys.length !== values.length){
      return 'Invalid input'
    }
    
    for (let i = 0; i < std.length; i++) {
      created[i] = std[i];
      if (std[i].marks < 50) {
        created[i].status = "Fail";
      } else {
        created[i].status = "Pass";
      }
      delete created[i].marks;
    }
    return created
}


// console.log(Recreater(students))

const TestCases = [
  {
    id : 1,
    input : [
      { name : "Alice", marks : 42 },
      { name : "Bob", marks : 67 },
      { name : "Charlie", marks : 35}
    ],
    output : [
      { name : 'Alice', status : 'Fail' },
      { name : 'Bob', status : 'Pass' },
      { name : 'Charlie', status : 'Fail'}
    ]
  },
  {
    id : 2,
    input : [
      { name : 'Grace', marks : 69 },
      { name : 'Mary', marks : 54 },
      { name : 'John', marks : 45 }
    ],
    output : [
      { name : 'Grace', status : 'Pass' },
      { name : 'Mary', status : 'Pass' },
      { name : 'John', status : 'Fail'}
    ]
  },
  {
    id : 3,
    input : [
      { name : 'Alice' },
      { name : 'Grace' },
      { name : 'Charlie' }
    ],
    output : 'Invalid input'
  },
  {
    id : 4,
    input : [
      { marks : 68 },
      { marks : 23 },
      { marks : 56 }
    ],
    output : 'Invalid input'
  },
  {
    id : 5,
    input : [
      { name : 'Alice', marks : 89 },
      { name : 'Rose', marks : 56 },
      { name : 'Elizabeth'}
    ],
    output : 'Invalid input'
  },
  {
    id : 6,
    input : [
      { name : 'Alice', marks : 34 },
      { name : 'John', marks: 54 },
      { marks : 45 }
    ],
    output : 'Invalid input'
  },
  {
    id : 7,
    input : [
      { name : 'Grace', marks : "2354"}
    ],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : [
      { name : 'Grace', marks : 89 },
      { name : 343, marks : 88 }
    ],
    output : 'Invalid input'
  },
  {
    id : 9,
    input : [
      { name : "", marks: 78}
    ],
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [
      {name : 'Alice', marks : ""}
    ],
    output : 'Invalid input'
  },
  {
    id: 11,
    input : [
      { name : {}, marks : 3214}
    ],
    output : 'Invalid input'
  },
  {
    id : 12,
    input : [
      { name : 'John', marks : {} }
    ],
    output : 'Invalid input'
  },

  {
    id : 13,
    input : [
      { name : 'Alice', marks :     54}
    ],
    output : [ { name : 'Alice', status : 'Pass' }]
  },
  {
    id : 14,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 15,
    input : {},
    output : 'Invalid input'
  }
]
TestCases.forEach(({input, output}) => {
  let result = Recreater(input)
  if(JSON.stringify(result) === JSON.stringify(output)){
    console.log("Pass")
  }else{
    console.log("Failed")
    console.log(result);
  }
})
