
function sumOfDigits(n) {
    if(typeof(n) !== "number") return 'Invalid number'
    n = Math.floor(n)
    if(n < 0){
        n = Math.abs(n)
    }

    let temp = [n]
    let splitted = temp.toString().split("")
    let sum = 0 
    for(let i = 0; i < splitted.length; i++) {
        sum = sum + Number(splitted[i])
    }
    return(sum)
    
}

// console.log(sumOfDigits(23.12))

const TestCase = [
    {
        id : 1,
        input : 300,
        output : 3
    },
    {
        id : 2,
        input : 230,
        output : 5
    },
    {
        id : 3,
        input : 108,
        output : 9
    },
    {
        id : 4,
        input : -120,
        output : 3
    },
    {
        id : 5,
        input : 23.12,
        output : 5
    },
    {
        id : 6,
        input : -56,
        output : 11
    },
    {
        id : 7,
        input : "hello",
        output : 'Invalid number'
    },
    {
        id : 8,
        input : "",
        output : 'Invalid number'
    },
    {
        id : 9,
        input : [1, 2, 4],
        output : 'Invalid number'
    },
    {
        id : 10,
        input : [" ", " "," "],
        output : 'Invalid number'
    },
    {
        id : 11,
        input : "  ",
        output : 'Invalid number'
    },
    {
        id : 12,
        input : {},
        output : 'Invalid number'
    },
    {
        id : 13,
        input : {greet : "hello"},
        output : 'Invalid number'
    },
    {
        id : 14,
        input : [{}],
        output : 'Invalid number'
    },
    {
        id : 15,
        input : 12 * 2,
        output : 6
    }
]

TestCase.forEach(({input, output}) => {
    let result = sumOfDigits(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})