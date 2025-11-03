function getValue(a) {
    
    if(a === undefined || a === "" || a === null || a === " ") {
    // if( typeof(a) !== 'number'){
        return 'No Value'
    }
    else{
        return a
    }
}

// console.log(getValue(5))
// console.log(getValue(null))
// console.log(getValue(undefined))
// console.log(getValue())

let TestCase = [
    {
        id : 1,
        input : 5,
        output : 5
    },
    {
        id : 2,
        input : null,
        output : 'No Value'
    },
    {
        id : 3,
        input : undefined,
        output : 'No Value'
    },
    {
        id : 4,
        input : "",
        output : 'No Value'
    },
    {
        id : 5,
        input : " ",
        output : 'No Value'
    },
    
]

TestCase.forEach(({input, output}) => {
    let result = getValue(input)

    if(result === output) console.log("Passed")
    else console.log("Failed", result); 
})