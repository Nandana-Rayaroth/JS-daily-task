function firstNonRepeat(str){
    if(typeof str !== 'string' || str.trim() === "") return 'Invalid input'
    let splitted = str.toLowerCase().replaceAll(" ", "").split("")
    let freq = {}
    for(let i in splitted){
        if(splitted[i] in freq) freq[splitted[i]]++
        else freq[splitted[i]] = 1
        
    }
    let keyArr = Object.keys(freq)
    let valArr = Object.values(freq)
    let Ind 

    for(let i in valArr){
        if(valArr[i]===1){
            Ind = i; break
        }
    }
    return splitted.indexOf((keyArr[Ind]))
}

let TestCase = [
    {
        id : 1,
        input : "roses are red",
        output : 1
    },
    {
        id : 2,
        input : "helleo hi",
        output : 5
    },
    {
        id : 3,
        input : "aaa bb",
        output : -1
    },
    {
        id : 4,
        input : "ababab",
        output : -1
    },
    {
        id : 5,
        input : "Hello",
        output : 0
    },
    {
        id : 6,
        input : "Helloh",
        output : 1
    },
    {
        id : 7,
        input : "a b c d a c b",
        output : 3
    },
    {
        id : 8,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 9,
        input : " A ",
        output : 0
    },
    {
        id : 10,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 11,
        input : 1324,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [1, 2, 3],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 14,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 15,
        input : ["hello", "hi"],
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = firstNonRepeat(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id)
})