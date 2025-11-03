function getTicketPrice(age){
    if(typeof(age) !== "number" || age <= 0 || (!Number.isInteger(age))) return 'Invalid input'

    if(age <= 12) {
        return ("ticket price for childrens $10")
    }
    else if(age >= 13 && age <= 59){
        return ("ticket price for adults $20")
    }
    else if(age >= 60){
        return ("ticket price for seniors $15")
    }
    else{
        return ("sorry")
    }
}

// getTicketPrice(24)
// getTicketPrice(12)
// getTicketPrice(68)

const TestCase = [
  {
    id: 1,
    input: 24,
    output: "ticket price for adults $20",
  },
  {
    id: 2,
    input: 12,
    output: "ticket price for childrens $10",
  },
  {
    id: 3,
    input: 68,
    output: "ticket price for seniors $15",
  },
  {
    id: 4,
    input: 10,
    output: "ticket price for childrens $10",
  },
  {
    id: 5,
    input: 13,
    output: "ticket price for adults $20",
  },
  {
    id: 6,
    input: 59,
    output: "ticket price for adults $20",
  },
  {
    id: 7,
    input: 60,
    output: "ticket price for seniors $15",
  },
  {
    id: 8,
    input : "",
    output: 'Invalid input'
  },
  {
    id : 9,
    input : "   ",
    output: 'Invalid input'
  },
  {
    id : 10,
    input : "hello",
    output : 'Invalid input'
  },
  {
    id : 11,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 12,
    input : [1, 2, 4],
    output : 'Invalid input'
  },
  {
    id : 13,
    input : {},
    output: 'Invalid input'
  },
  {
    id: 14,
    input : {greet : "hello"},
    output : 'Invalid input'
  },
  {
    id: 15,
    input : -32,
    output : 'Invalid input'
  },
  {
    id : 16,
    input : 34.65,
    output: 'Invalid input'
  }
];

TestCase.forEach(({input, output}) => {
    let result = getTicketPrice(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})

// 