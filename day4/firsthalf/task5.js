function kebabCase(str){

    if(typeof(str) !== "string" || str.trim() === "") return 'Invalid input'

    let splitted = str.split("")

    if( splitted.includes(" ") || splitted.includes('@') || splitted.includes('#') || splitted.includes('!') || splitted.includes('$') || splitted.includes('%') || splitted.includes('&') || splitted.includes('*') || splitted.includes(',') || splitted.includes('.') || splitted.includes('/') || splitted.includes('?') 
        || splitted.includes('1') || splitted.includes('0') || splitted.includes('2') || splitted.includes('3') || splitted.includes('4') || splitted.includes('5') || splitted.includes('6') || splitted.includes('7') || splitted.includes('8') || splitted.includes('9')
    )
        return 'This is not camelCase'

    let result = []
    // console.log(splitted)

    for(let i = 0; i < splitted.length; i++) {
        if( i === 0 && (splitted[i] === splitted[i].toUpperCase())) return 'This is not camelCase'
        let upper = splitted[i].toUpperCase()
        if(splitted[i] === upper) {
            let lower = splitted[i].toLowerCase()
            result[i] = `-${lower}`
        }
        else{
            result.push(splitted[i])
        }
    }
    return(result.join(""))
    
}

// console.log(kebabCase('myFunction'))

let TestCase = [
  {
    id: 1,
    input: "myFunction",
    output: "my-function",
  },
  {
    id: 2,
    input: "helloEveryOne",
    output: "hello-every-one",
  },
  {
    id: 3,
    input: "goodMorningWhatANiceDay",
    output: "good-morning-what-a-nice-day",
  },
  {
    id: 4,
    input: "good",
    output: "good",
  },
  {
    id: 5,
    input: "hello Every One",
    output: "This is not camelCase",
  },
  {
    id : 6,
    input : "  ",
    output : 'Invalid input'
  },
  {
    id : 7,
    input : "",
    output : 'Invalid input'
  },
  {
    id : 8,
    input : "John@123",
    output : 'This is not camelCase'
  },
  {
    id :9,
    input : 'john1232',
    output : "This is not camelCase"
  },
  {
    id : 10,
    input : 'HelloHi',
    output : 'This is not camelCase'
  },
  {
    id : 11,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 12,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 13,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 14,
    input : undefined,
    output : 'Invalid input'
  },
  {
    id : 15,
    input : [" ", " "],
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
    let result = kebabCase(input)
    if(output === result) console.log("Passed")
    else console.log("Failed", result)
})

// 