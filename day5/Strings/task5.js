
function countVowels(str) {
    if(typeof(str) !== "string" || str.trim() === "") return 'Invalid input'

    let count = 0
    let splitted = str.split("")
        for(let i = 0; i < splitted.length; i++){
          if (
            splitted[i].includes("a") ||
            splitted[i].includes("A") ||
            splitted[i].includes("e") ||
            splitted[i].includes("E") ||
            splitted[i].includes("i") ||
            splitted[i].includes("I") ||
            splitted[i].includes("o") ||
            splitted[i].includes("O") ||
            splitted[i].includes("u") ||
            splitted[i].includes("U")
          )
            count++;
        }

    return(count)
}

// console.log(countVowels('malayalam'))
// console.log(countVowels('aeiou'))

let TestCase = [
    {
        id : 1,
        input : 'malayalam',
        output : 4
    },
    {
        id : 2,
        input : 'aeiou',
        output : 5
    },
    {
        id : 3,
        input : "English",
        output : 2
    },
    {
        id : 4,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [1, 2, 4],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : ["hello", "hi"],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : 1234,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 14,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = countVowels(input)
    if(result === output) console.log("Passed")
    else console.log("Failed", result)
})