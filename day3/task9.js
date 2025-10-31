
function Unique(str) {
    if(typeof(str) !== "string" || str.length === 0 || str.trim() === "") return 'Invalid input'

    let sample = str.split("").toString().toLowerCase()
    let temp = []

    temp = [...new Set(sample)]
    return temp.join("").replaceAll(/[,]/g,"")
}

// console.log(Unique('Malayalam'))

const TestCase = [
    {
        id : 1,
        input : 'apple',
        output : 'aple'
    },
    {
        id : 2,
        input : 'banana',
        output : 'ban'
    },
    {
        id : 3,
        input : 'Malayalam',
        output : 'maly'
    },
    {
        id : 4,
        input : 'MALAYALAM',
        output : 'maly'
    },
    {
        id : 5,
        input : 'malayalaM',
        output : 'maly'
    },
    {
        id : 6,
        input : '12312',
        output : '123'
    },
    {
        id : 7,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : "    ",
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : ["hello"],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : {greet : "hi"},
        output : 'Invalid input'
    },
    {
        id : 13,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : false,
        output : 'Invalid input'
    }
]
TestCase.forEach(({input, output}) => {
    let result = Unique(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})

// 