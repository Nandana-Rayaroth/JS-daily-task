function Amstrong(num) {
    if(num < 0) return false
    if(typeof(num) !== "number") return 'Invalid input'
    let converted = num.toString()
    let temp = []  
    let sum = 0

    let Length = converted.split("").length

    for(let i of converted) {
        temp.push(Math.pow(i, Length))
    }
    for (let j = 0; j < temp.length; j++) {
        sum = sum + temp[j];
    }
    if(sum === num){
        return true
    }
    else{
        return false
    }

}
// console.log(Amstrong(405))
// console.log(Amstrong(153))
// console.log(Amstrong(0))

const TestCase = [
    {
        id : 1,
        input : 123,
        output : false
    },
    {
        id : 2,
        input : 0,
        output : true
    },
    {
        id : 3,
        input : 370,
        output : true
    },
    {
        id : 4,
        input : 567,
        output : false
    },
    {
        id : 5,
        input : -234,
        output : false
    },
    {
        id : 6,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [123, 535, 657],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : ["hello", "hi", "nice"],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : "   ",
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
        input: 234/32,
        output : false
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = Amstrong(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})

// 