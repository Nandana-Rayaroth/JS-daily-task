function isValidEmail(str){
    if(typeof(str) !== 'string' || !str || str.includes(" ") || str.length === 0) return false

    const Indexat = str.indexOf("@")
    const IndexDot = str.lastIndexOf(".")
    if (Indexat === -1 || IndexDot === -1) return false

    // let splitted = str.split("")
    // for(let i of splitted){
    //     let upper = i.toUpperCase()
    //     if(upper !== '@' && upper !== '.')
    //     if(upper === i) return false
    // }
    
    if(Indexat > IndexDot) return false
    if(Indexat === 0 || IndexDot === str.length - 1) return false
    if(IndexDot === 0 || Indexat === str.length - 1) return false

    if(IndexDot - Indexat < 2) return false
    const Extension = str.slice(IndexDot + 1)
    if(Extension.length < 2) return false
    else return true
    
}

// console.log(isValidEmail("nandana@gmail.com"))
// console.log(isValidEmail("nan.com"))
// console.log(isValidEmail("@nandana."))
// console.log(isValidEmail("knjWui.com"))

const TestCase = [
  {
    id: 1,
    input: "nandana@gmail.com",
    output: true,
  },
  {
    id: 2,
    input: "nan.com",
    output: false,
  },
  {
    id: 3,
    input: "@nandana.",
    output: false,
  },
  {
    id: 4,
    input: "knjWui.com",
    output : false
  },
  {
    id: 5,
    input : "",
    output : false
  },
  {
    id: 6,
    input : "   ",
    output: false
  },
  {
    id: 7,
    input : "John 123",
    output : false
  },
  {
    id: 8,
    input : "John@123.com",
    output: true
  },
  {
    id: 9,
    input: 1234,
    output : false
  },
  {
    id: 10,
    input: [1,23,4],
    output: false
  },
  {
    id: 11,
    input: [],
    output: false
  },
  {
    id: 12,
    input: {},
    output: false
  },
  {
    id: 13,
    input : {greet: "hello"},
    output : false
  },
  {
    id: 14,
    input : [{}],
    output : false
  },
  {
    id: 15,
    input : "hi hello",
    output : false
  }
];

TestCase.forEach(({input, output}) => {
    let result = isValidEmail(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})