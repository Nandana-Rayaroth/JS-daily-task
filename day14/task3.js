function vowelReverse(str){
    if(typeof str !== 'string' || str.trim() === "") return 'Invalid input'

    let splitted = str.split("")
    let Invowels = []
    for(let i = 0; i < splitted.length; i++){
        if(splitted[i] === 'a' || splitted[i] === 'A' || splitted[i] === 'e' || splitted[i] === 'E' || splitted[i] === 'I' || splitted[i] === 'i' || splitted[i] === 'o' || splitted[i] === 'O' || splitted[i] === 'u' || splitted[i] === 'U' ){
            Invowels.push(splitted[i])
        }
        
    }

    for(let j = 0; j < splitted.length; j++){
        if(splitted[j] === 'a' || splitted[j] === 'A' || splitted[j] === 'e' || splitted[j] === 'E' || splitted[j] === 'I' || splitted[j] === 'i' || splitted[j] === 'o' || splitted[j] === 'O' || splitted[j] === 'u' || splitted[j] === 'U' ){
            splitted[j] = Invowels[Invowels.length - 1]
            Invowels.pop()
        }
    }
    return(splitted.join(""))
}

// console.log(vowelReverse("IceCreAm"))
// console.log(vowelReverse('AppleiWanteat'))

let TestCase = [
    {
        id : 1,
        input : "IceCreAm",
        output : "AceCreIm"
    },
    {
        id : 2,
        input : "AppleiWanteat",
        output : "appleaWinteAt"
    },
    {
        id : 3,
        input : "AeIoU",
        output : "UoIeA"
    },
    {
        id : 4,
        input : "WdeIosUda",
        output : "WdaUosIde"
    },
    {
        id : 5,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 6,
        input : "wrRdfYUwpoi",
        output : "wrRdfYiwpoU"
    },
    {
        id : 7,
        input : "abcd",
        output : "abcd"
    },
    {
        id : 8,
        input : "AwErIpOfd",
        output : "OwIrEpAfd"
    },
    {
        id : 9,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : " ",
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [" ", " "],
        output : 'Invalid input'
    },
    {
        id : 13,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 14,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : undefined,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, id}) => {
    let result = vowelReverse(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, result)
})