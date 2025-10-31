
function passWordChecker(str){
    if(typeof str !== "string" || str.length <= 0 || str.trim() === "") return 'Invalid input'
    let length = str.split("").length
    let splitted = str.split("")
    let Password

    if(length < 6){
        Password = "Password is Weak"
    }
    else if(length >= 6 && length <=7){
        for(let i = 0; i < length; i++){
            if(splitted.includes('0') || splitted.includes('1') || splitted.includes('2') || splitted.includes('3') || splitted.includes('4') || splitted.includes('5') || splitted.includes('6') || splitted.includes('7') || splitted.includes('8') || splitted.includes('9')){
                Password = "Medium"
            }
            else if(splitted.includes('@') || splitted.includes('#') || splitted.includes('&') || splitted.includes('$') || splitted.includes('%') || splitted.includes('!')){
                Password = "Medium"
            }
        }
    }
    else if(length >= 8) {

        for(let i = 0; i < length; i++) {
            let upper = splitted[i].toUpperCase()
            let lower = splitted[i].toLowerCase()
            if (
              splitted.includes(upper) &&
              splitted.includes(lower) &&
              (splitted.includes("0") ||
                splitted.includes("1") ||
                splitted.includes("2") ||
                splitted.includes("3") ||
                splitted.includes("4") ||
                splitted.includes("5") ||
                splitted.includes("6") ||
                splitted.includes("7") ||
                splitted.includes("8") ||
                splitted.includes("9")) &&
                (splitted.includes("@") ||
                splitted.includes("#") ||
                splitted.includes("&") ||
                splitted.includes("$") ||
                splitted.includes("%") ||
                splitted.includes("!"))
            ) {
              Password = "Strong"
            }
        }
        if(Password !== "Strong"){
            Password =
              "Not Strong, include Number, uppercase, lowercase, and special character";
        }   
    }
    else{
        Password = "password is weak"
    }
    return(Password)
}

// console.log(passWordChecker('egwrerge'))
// console.log(passWordChecker('etrh'))
// console.log(passWordChecker('Abi123@avfgs'))

const TestCase = [
  {
    id: 1,
    input: "egwrerge",
    output:
      "Not Strong, include Number, uppercase, lowercase, and special character",
  },
  {
    id: 2,
    input: "etrh",
    output: "Password is Weak",
  },
  {
    id: 3,
    input: "Abi123@avfgs",
    output: "Strong",
  },
  {
    id: 4,
    input: "wayanad kerala",
    output:
      "Not Strong, include Number, uppercase, lowercase, and special character",
  },
  {
    id: 5,
    input: "abcdefgh@",
    output:
      "Not Strong, include Number, uppercase, lowercase, and special character",
  },
  {
    id: 6,
    input: "abC@12",
    output: "Medium",
  },
  {
    id: 7,
    input: "Ab@1",
    output: "Password is Weak",
  },
  {
    id: 8,
    input : 1234,
    output : 'Invalid input'
  },
  {
    id: 9,
    input : "    ",
    output : 'Invalid input'
  },
  {
    id : 10,
    input : [],
    output : 'Invalid input'
  },
  {
    id: 11,
    input : [" ", " ", " "],
    output : 'Invalid input'
  },
  {
    id : 12,
    input : [{}],
    output : 'Invalid input'
  },
  {
    id : 13,
    input : [{greet : "hello"}],
    output : 'Invalid input'
  },
  {
    id : 14,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 15,
    input : null,
    output : 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
    let result = passWordChecker(input)
    if(result === output) console.log("Passed")
    else console.log("Failed"); 
})

// 