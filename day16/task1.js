function ValidSubstring(str){
    if(typeof(str) !== 'string') return 'Invalid input'
    let temp = []
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ")" && str[i] !== "(") return 'Invalid input'
        if(str[i] === "(" && str[i+1] === ")"){
            temp.push(str[i], str[i+1])
        }
        
    }
    return(temp.length)

}

let TestCase = [
    {
        id : 1,
        input : "(()",
        output : 2
    },
    {
        id : 2,
        input : ")()())",
        output : 4
    },
    {
        id : 3,
        input : ")()()(",
        output : 4
    },
    {
        id : 4,
        input : ")()(",
        output : 2
    },
    {
        id : 5,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 6,
        input :"hello",
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [1, 2, 3],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 9,
        input : null,
        output : 'Invalid input'
    },
    
]

TestCase.forEach(({input, output, id}) =>{
    let result = ValidSubstring(input)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, result, output)
})
