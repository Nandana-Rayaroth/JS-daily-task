
function patternPrinter(n) {
    if(!Number.isInteger(n) || n <= 0) return 'Invalid input'
    let temp = []
    let text = ""

    for(let i = 65; i <= 90; i++){
        temp.push(String.fromCharCode(i) + " ")
    }
    for(let i = 0; i < n; i++) {
        // console.log(temp[i].repeat(i+1).split('').join(" "))
        text += temp[i].repeat(i+1) +"\n"
    }
    return text
}

// patternPrinter(5)

const TestCase = [
    {
        id : 1,
        input : 5,
        output : `
            A
            B B
            C C C
            D D D D
            E E E E E
        `,
    },
    {
        id : 2,
        input : 2,
        output : `
            A
            B B
        `,
    },
    {
        id : 3,
        input : 2.4,
        output : 'Invalid input'
    },
    {
        id : 4,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : -4,
        output : 'Invalid input'
    },
    {
        id : 6,
        input : 3*2,
        output : `
            A
            B B
            C C C
            D D D D
            E E E E E
            F F F F F F
        `
    },
    {
        id : 7,
        input : "  ",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : "hello",
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
        input : {},
        output : 'Invalid input'
    },
    {
        id : 12,
        input : { greet : "hello" },
        output : 'Invalid input'
    },
    {
        id : 13,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : true,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = patternPrinter(input)
    if(result.trim().replaceAll(/\s+/g, " ") === output.trim().replaceAll(/\s+/g, " ")) console.log("Passed")
    else console.log("Failed"); 
})

// 