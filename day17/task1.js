function Partition(arr, fn){
    if(!Array.isArray(arr) || arr.length <= 0 || !fn) return 'Invalid input'
    let result = []
    let firstPart = []
    let secondPart = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number') return 'Invalid input'
        if(fn(arr[i])) firstPart.push(arr[i])
        else secondPart.push(arr[i])
    }

    if(firstPart.length > 0) result.push(firstPart)
    if(secondPart.length > 0) result.push(secondPart)
    return result

}

let TestCase = [
    {
        id : 1,
        InputArray : [1, 2, 3, 4],
        InputFunction : x => x % 2 === 0,
        output : [[2, 4], [1, 3]]
    },
    {
        id : 2,
        InputArray : [12, 34, 56, 67, 78],
        InputFunction : x => x % 2 === 0,
        output : [[12, 34, 56, 78], [67]]
    },
    {
        id : 3,
        InputArray : [1, 2, 3, 4],
        InputFunction : x => x === 2,
        output : [[2], [1, 3, 4]]
    },
    {
        id : 4,
        InputArray : [12, 89, 42, 58, 36],
        InputFunction : x => x === 0,
        output : [[12, 89, 42, 58, 36]]
    },
    {
        id : 5,
        InputArray : 123,
        InputFunction : x => x * 4 === 8,
        output : 'Invalid input'
    },
    {
        id : 6,
        InputArray : [1,2,4],
        InputFunction : null,
        output : 'Invalid input'
    },
    {
        id : 7,
        InputArray : null,
        InputFunction : x => x / 3 === 0,
        output : 'Invalid input'
    },
    {
        id : 8,
        InputArray : [{}],
        InputFunction : x => x /2 !== 0,
        output : 'Invalid input'
    },
    {
        id : 9,
        InputArray : {greet : 'hello'},
        InputFunction : x => x * 3 === 9,
        output : 'Invalid input'
    },
    {
        id : 10,
        InputArray : [12, 45, "hello"],
        InputFunction : x => x / 2=== 0,
        output : 'Invalid input'
    }
]

TestCase.forEach(({InputArray, InputFunction, id, output}) => {
    let result = Partition(InputArray, InputFunction)
    if(!Array.isArray(result)&&!Array.isArray(output)){
        if(result === output) console.log("Passed at ", id)
    }
    else {
        if(result.length === output.length){
            let flatResult = result.flat(Infinity)
            let flatOutput = output.flat(Infinity)
            for(let i = 0; i < flatResult; i++){
                if(flatOutput[i] !== flatResult[i]){
                    console.log("Failed at ", id, result, output)
                    return
                }
            }
            console.log("Passed at ", id)
        }
        else console.log("Failed at ", id, result, output)
    }
})
