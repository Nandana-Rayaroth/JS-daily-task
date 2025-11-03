
function extractUsername(email) {

    

    if(typeof(email) !== 'string' || !email.includes('@') || email.trim() === "") return 'Invalid input'

    let splitted = email
    for(let i = 0; i < splitted.length; i++) {
        if(splitted[i] === '@'){
            return splitted.slice(0,i)
        }
    }
}

// console.log(extractUsername('nandana@123'))

let TestCase = [
    {
        id : 1,
        input : 'John@123',
        output : 'John'
    },
    {
        id : 2,
        input : 'John123@',
        output : 'John123'
    },
    {
        id : 3,
        input : 'Joseph',
        output : 'Invalid input'
    },
    {
        id : 4,
        input : 'Mary',
        output : 'Invalid input'
    },
    {
        id : 5,
        input : [1, 2, 4],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "  ",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [" ", " "],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : 234,
        output : 'Invalid input'
    },
    {
        id : 10,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 11,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [{}],
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
        input : NaN,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = extractUsername(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})