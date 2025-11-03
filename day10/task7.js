const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve", 
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
]

const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "sevety",
    "eighty",
    "ninety"
]

function numberToText(num) {
    if(!Number.isInteger(num)) return 'Invalid input'
    if(num >= 20000) return 'Out of the range'
    if(num === 0) return "zero"
    let text = ""

    if(num < 0){
        text += "Negative "
        num = Math.abs(num)
    }

    if(num >= 1000){
        let thousand = Math.floor(num/1000)
        text += ones[thousand] + " thousand"

        num = num % 1000
        if(num > 0){
            text += " and "
        }
    }

    if(num >= 100){
        let hundreds = Math.floor(num/100)
        
        text += ones[hundreds] + " hundred"

        num = num % 100
        if(num > 0){
            text += " and"
        }
    }
    if(num > 0){
        if(num < 20){
            text += " "+ones[num]
        }
        else{
            let tenDigit = Math.floor(num / 10)
            let oneDigit = num % 10
            text += " "+tens[tenDigit]
            if(oneDigit > 0) 
                text += " "+ones[oneDigit]
        }
    }
    return (text.charAt(0).toUpperCase()+text.slice(1))
}

const TestCase = [
  {
    id: 1,
    input: 745,
    output: "Seven hundred and forty five",
  },
  {
    id: 2,
    input: 12345,
    output: "Twelve thousand and three hundred and forty five",
  },
  {
    id: 3,
    input: 1111,
    output: "One thousand and one hundred and eleven",
  },
  {
    id: 4,
    input: -100,
    output: "Negative one hundred",
  },
  {
    id: 5,
    input: 11.34,
    output: "Invalid input",
  },
  {
    id: 6,
    input: 1234.452,
    output: "Invalid input",
  },
  {
    id: 7,
    input: 20000,
    output: "Out of the range",
  },
  {
    id: 8,
    input: "hello",
    output: "Invalid input",
  },
  {
    id: 9,
    input: [12, 34, 56],
    output: "Invalid input",
  },
  {
    id: 10,
    input: [],
    output: "Invalid input",
  },
  {
    id: 11,
    input: {},
    output: "Invalid input",
  },
  {
    id: 12,
    input: { greet: "hello" },
    output: "Invalid input",
  },
  {
    id: 13,
    input: [" ", " ", " "],
    output: "Invalid input",
  },
  {
    id: 14,
    input: [{}],
    output: "Invalid input",
  },
  {
    id: 15,
    input: ["hello"],
    output: "Invalid input",
  },
];

TestCase.forEach(({ input, output }) => {
  let result = numberToText(input);
  if (result === output) console.log("Passed");
  else console.log("Failed");
});



// 