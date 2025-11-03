


function modified(str) {
    if(typeof(str) !== "string") return 'Invalid input'
    
    let trimmed = str.trim()
    if(trimmed === "") return 'Invalid input'
    let punchRemove = trimmed.replace(/[!, ,., ', @, *, &, $, #, %]/g, "").toLowerCase()
    // console.log(punchRemove)
    return punchRemove

}
// let str1 = ' Hello, World! '
// console.log(modified(str1))

const TestCase = [
    {
        id : 1,
        input : 'Hello, World!',
        output : 'helloworld'
    },
    {
        id : 2,
        input : ' HEllo, World!..',
        output : 'helloworld'
    },
    {
        id : 3,
        input : 'HELLO, WORLD!',
        output : 'helloworld'
    },
    {
        id : 4,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 6,
        input : "nandana@123",
        output : 'nandana123'
    },
    {
        id : 7,
        input : "hello@  *123",
        output : "hello123"
    },
    {
        id : 8,
        input : 34,
        output : 'Invalid input'
    },
    {
        id : 9,
        input : 12 * 4,
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [" ", " "],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 12,
        input: {},
        output : 'Invalid input'
    },
    {
        id : 13,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 14,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 15,
        input : undefined,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = modified(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})


