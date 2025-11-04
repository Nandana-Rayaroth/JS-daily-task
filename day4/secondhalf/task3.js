
function getTranspose(mtx){
    if(!Array.isArray(mtx) || mtx.length <= 0) return 'Invalid input'

    let row = mtx.length
    let column = mtx[0].length
    if(!column || !(mtx[1].length)) return 'Invalid input'
    let rowItem = []
    
    for(let i = 0; i < column; i++){
        let temp = []
        for(let j = 0; j < row; j++) {
            if (column !== mtx[j].length || typeof mtx[j][i] !== 'number') return "Invalid input";
            temp.push(mtx[j][i])
        }
        rowItem.push(temp)
    }
    return rowItem
    
}

let TestCase = [
    {
        id : 1,
        input : [[2, 9, 0], [7, 1, 5]],
        output : [[2, 7], [9, 1], [0, 5]]
    },
    {
        id : 2,
        input : [[3, 4, 5, 6], [4, 2, 5, 6]],
        output : [[3, 4], [4, 2], [5, 5], [6, 6]]
    },
    {
        id : 3,
        input : [[12, 34, 23, 45], [54, 34, 24, 56]],
        output : [[12, 54], [34, 34], [23, 24], [45, 56]]
    },
    {
        id : 4,
        input : [12, 34, 45],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : [[12, 34, 45], [65, 54, 76], [98,78, 42]],
        output : [[12, 65, 98], [34, 54, 78], [45, 76, 42]]
    },
    {
        id : 6,
        input : [[12, 34, 56], [56, 34, 23], [90, 45]],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 9,
        input : {greet : 'hello'},
        output : 'Invalid input'
    },
    {
        id : 10,
        input : 1234,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 12,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 13,
        input : "    ",
        output : 'Invalid input'
    },
    {
        id : 14,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [{}],
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = getTranspose(input)
    if(Array.isArray(result)&&Array.isArray(output)){
        if(result.length === output.length){
            result = result.flat(Infinity)
            output = output.flat(Infinity)
            for(let i = 0; i < result.length; i++){
                if(result[i] !== output[i]) {
                    console.log("Failed")
                    break
                }
            }
            console.log("Passed")
        }
        else console.log("Failed")
    }
    else {
        if(result === output) console.log("Passed")
        else console.log("Failed")
    }
})