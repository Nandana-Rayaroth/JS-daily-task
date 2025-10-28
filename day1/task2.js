
let InpStr = "CAT"
function  PatternCreter(InpStr){
  if (typeof InpStr !== "string" || InpStr.trim() === "") {
    return "Invalid input";
  }
  let sample = []
  let print = ""
  
  for(let i = 0; i < InpStr.length; i++){
    sample.push(InpStr[i])
    print += sample.join(" ") + "\n"
  }
  let length = sample.length
  for(let i = 0; i < length; i++){
    sample.shift()
    print += sample.join(" ") + "\n";
  }
  return print
}

// console.log(PatternCreter(InpStr))

const TestCases = [
  {
    id: 1,
    input: "JESUS",
    output: `
    J
    J E
    J E S
    J E S U
    J E S U S
    E S U S
    S U S
    U S
    S`,
  },
  {
    id: 2,
    input: "NANDANA",
    output: `
    N
    N A
    N A N
    N A N D
    N A N D A
    N A N D A N
    N A N D A N A
    A N D A N A
    N D A N A
    D A N A
    A N A
    N A
    A`,
  },
  {
    id: 3,
    input: "KERALA",
    output: `
    K
    K E
    K E R
    K E R A
    K E R A L
    K E R A L A
    E R A L A
    R A L A
    A L A
    L A
    A`,
  },
  {
    id: 4,
    input: "HELLO",
    output: `
    H
    H E
    H E L
    H E L L
    H E L L O
    E L L O
    L L O
    L O
    O`,
  },
  {
    id: 5,
    input: "EVERYONE",
    output: `
    E
    E V
    E V E
    E V E R
    E V E R Y
    E V E R Y O
    E V E R Y O N
    E V E R Y O N E
    V E R Y O N E
    E R Y O N E
    R Y O N E
    Y O N E
    O N E
    N E
    E`,
  },
  {
    id: 6,
    input: "",
    output: "Invalid input",
  },
  {
    id: 7,
    input: " ",
    output: "Invalid input",
  },
  {
    id: 8,
    input: 56,
    output: "Invalid input",
  },
  {
    id: 9,
    input: {},
    output: "Invalid input",
  },
  {
    id: 10,
    input: [],
    output: "Invalid input",
  },
  {
    id: 11,
    input: true,
    output: "Invalid input",
  },
  {
    id: 12,
    input: null,
    output: "Invalid input",
  },
  {
    id: 13,
    input: undefined,
    output: "Invalid input",
  },
  {
    id : 14,
    input : 'CAT',
    output : `
    C
    C A
    C A T
    A T
    T`
  },
  {
    id : 15,
    input : 'HI HELLO',
    output : `
    H
    H I
    H I  
    H I   H
    H I   H E
    H I   H E L
    H I   H E L L
    H I   H E L L O
    I   H E L L O
      H E L L O
    H E L L O
    E L L O
    L L O
    L O
    O`
  }
];

TestCases.forEach(({input, output}) => {
  let result = PatternCreter(input)
  if(result.trim().replaceAll(/\s+/g, ' ') === output.trim().replaceAll(/\s+/g, ' ')) 
    console.log(`Pass test`)
  else {
    console.log(`Failed test `);
    console.log(result.replaceAll(/\s+/g, " "));
    console.log(output.replaceAll(/\s+/g, " "));
  }
})