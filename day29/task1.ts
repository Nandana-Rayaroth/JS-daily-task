function toFahrentheit(C : number){
    let F : number = (C * 1.8) + 32
    if(!Number.isInteger(F)) return (Number(Number.parseFloat(F).toFixed(3)))
    else return F
}

let TestCase = [
    {
        id: 1,
        input: 20,
        output: 68
    },
    {
        id: 2,
        input: 100,
        output: 212
    },
    {
        id: 3,
        input: 0,
        output: 32
    },
    {
        id: 4,
        input: -1,
        output: 30.2
    },
    {
        id: 5,
        input : -32,
        output: -25.6
    },
    {
        id: 6,
        input: -33.8,
        output: -28.84
    },
    {
        id : 7,
        input: -1.8,
        output: 28.76
    },
    {
        id: 8,
        input: 0.43,
        output : 32.774
    },
    {
        id: 9,
        input: 43,
        output: 109.4
    },
    {
        id: 10,
        input: 42,
        output: 107.6
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = toFahrentheit(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, "Expected : ", output, "Got : ", result)
})