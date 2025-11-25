import { VowelCount } from "./task7.ts"; 
let TestCase = [
    {
        id : 1,
        input : "hello everyone",
        output : 6
    },
    {
        id : 2,
        input : "aeAE",
        output : 4
    },
    {
        id : 3,
        input : "IioOu",
        output : 5
    },
    {
        id : 4,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 6,
        input : "chjklmn",
        output : 0
    },
    {
        id : 7,
        input : "3242 1342",
        output : 0
    },
    {
        id : 8,
        input : "aeiouAeiou",
        output : 10
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = VowelCount(input)
    if(result === output) console.log("Passed at ", id);
    else console.log("Failed at ", id, "Expected : " ,output, "Got : ", result )
})