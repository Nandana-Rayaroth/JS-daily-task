
function isPrime(n) {
    let flag = 0
    if(n <= 1){
        return("Invalid input")
    }
    else{
        if(n === Math.round(n)){
          for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
              flag = flag + 1;
            }
          }
          if (flag > 2) {
            return "False";
          } else {
            return "True";
          }
        }
        else{
            return "Invalid input"
        }
    }

}

// isPrime(29)

const TestCases = [
    {
        id : 1,
        input : 45,
        output : 'False'
    },
    {
        id : 2,
        input : 0,
        output : 'Invalid input'
    },
    {
        id : 3,
        input : -67,
        output : 'Invalid input'
    },
    {
        id : 4,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : 4.6,
        output : 'Invalid input'
    },
    {
        id : 6,
        input: "467",
        output :'Invalid input'
    },
    {
        id : 7,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 9,
        input : NaN,
        output : 'Invalid input'
    },
    {
        id : 10,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [4,7,8],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 13,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : 12/4,
        output : 'True'
    },
    {
        id : 15,
        input : false,
        output : 'Invalid input'
    }
]

TestCases.forEach(({input, output}) => {
    let result = isPrime(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})

// 