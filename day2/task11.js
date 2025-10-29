function PerfectSquare(num) {
  let temp;
  let checker;
  if(num === 0) return true
  if((num < 0 && num !== 0) || typeof(num) !== "number") return 'Invalid input'
  for (let i = 1; i < num; i++) {
    temp = i * i;
    if (num === temp) {
      checker = true;
      return checker;
    } else {
      checker = false;
    }
  }
  return checker;
}

// console.log(PerfectSquare(23));

const TestCase = [
  {
    id : 1,
    input : 56,
    output : false
  },
  {
    id : 2,
    input : 0,
    output : true
  },
  {
    id : 3,
    input : -23,
    output : 'Invalid input'
  },
  {
    id : 4,
    input : {},
    output : 'Invalid input'
  },
  {
    id : 5,
    input : [],
    output : 'Invalid input'
  },
  {
    id : 6,
    input : "hello",
    output : 'Invalid input'
  },
  {
    id : 7,
    input : ["hihihi", "uiyiuyui", "ioouoiui"],
    output : 'Invalid input'
  },
  {
    id : 8,
    input : 4.5,
    output : false
  },
  {
    id : 9,
    input : true,
    output : 'Invalid input'
  },
  {
    id : 10,
    input : undefined,
    output : 'Invalid input'
  },
  {
    id : 11,
    input : null,
    output : 'Invalid input'
  },
  {
    id : 12,
    input : 24/2,
    output : false
  },
  {
    id : 13,
    input : [12, 34, 576, 787],
    output : 'Invalid input'
  },
  {
    id : 14,
    input : { name : "hello"},
    output : 'Invalid input'
  },
  {
    id : 15,
    input : -20 * 2,
    output : 'Invalid input'
  }
  
]
TestCase.forEach(({input, output}) => {
  let result = PerfectSquare(input)
  if(result === output) console.log("Passed")
  else console.log("Failed");
})

// 