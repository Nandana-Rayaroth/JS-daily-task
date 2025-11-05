
function ConstructStr(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length === 0 || str2.length === 0) return 'Invalid input'

    let splitted = str1.toLowerCase().split("")
    let splittedTwo = str2.toLowerCase().split("")
    for(let i = 0; i < splitted.length; i++){
        if(!splittedTwo.includes(splitted[i])) return false
    }
    return true
}

let TestCase = [
    {
        id : 1,
        str1 : "aa",
        str2 : "aab",
        output : true
    },
    {
        id : 2,
        str1 : "a",
        str2 : "b",
        output : false
    },
    {
        id : 3,
        str1 : "Abacd",
        str2 : "abcdfrg",
        output : true
    },
    {
        id : 4,
        str1 : 'hello',
        str2 : 'hi',
        output : false
    },
    {
        id : 5,
        str1 : 789,
        str2 : 241,
        output : 'Invalid input'
    },
    {
        id : 6,
        str1 : "",
        str2 : 'hello',
        output : 'Invalid input'
    },
    {
        id : 7,
        str1 : "hello",
        str2 : '',
        output : 'Invalid input'
    },
    {
        id : 8,
        str1 : 90,
        str2 : 'hi',
        output : 'Invalid input'
    },
    {
        id : 9,
        str1 : 'hello',
        str2 : 45,
        output : 'Invalid input'
    },
    {
        id : 10,
        str1 : "",
        str2 : "",
        output : 'Invalid input'
    },
    {
        id : 11,
        str1 : undefined,
        str2 : 'hi',
        output : 'Invalid input'
    },
    {
        id : 12,
        str1 : 'hello',
        str2 : undefined,
        output : 'Invalid input'
    },
    {
        id : 13,
        str1 : null,
        str2 : 'hello',
        output : 'Invalid input'
    },
    {
        id : 14,
        str1 : 'hello',
        str2 : null,
        output : 'Invalid input'
    },
    {
        id : 15,
        str1 : null,
        str2 : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({str1, str2, output, id}) => {
    let result = ConstructStr(str1, str2)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id)
})