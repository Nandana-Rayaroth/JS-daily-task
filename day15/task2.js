function IndxofTarget(arrItem, target){
    if(!Array.isArray(arrItem)) return 'Invalid input'
    let temp =  [...arrItem]
    let arr = arrItem
    if( (!target && target !== 0) || ( arr !== arr.sort((a, b) => a - b) && arr !== arr.sort((a, b) => b - a) )  || arr.length <= 0 ) return 'Invalid input'
   
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number') return 'Invalid input'
        if(arr[i] === target){
            return arr.indexOf(arr[i])
        }
        if(temp[i] > target && (temp[i+1] > temp[i] || i === temp.length-1)){
            temp.splice(i, 0, target)
            return temp.indexOf(target)
        }
        if(temp[i] > target &&  temp[i+1] < target){
            temp.splice(i+1, 0, target)
            return temp.indexOf(target)
        }
        else if(i === temp.length - 1){
            temp.push(target)
            return(temp.indexOf(target))
        }
        else if((i === 0) && (target > temp[i] && temp[temp.length-1] < temp[i])){
            temp.splice(i, 0, target)
            return(temp.indexOf(target))
        }
        
    }

}

let TestCase = [
    {
        id : 1,
        input : [1, 3, 5, 6],
        target : 5,
        output : 2
    },
    {
        id : 2,
        input : [1, 3, 5, 6],
        target : 2,
        output : 1
    },
    {
        id : 3,
        input : [3, 5, 6, 9, 10],
        target : 8,
        output : 3
    },
    {
        id : 4,
        input : [1, 3, 5, 6, 7, 9],
        target : 8,
        output : 5
    },
    {
        id : 5,
        input : [1, 3, 5, 6, 7, 9],
        target : 4,
        output : 2
    },
    {
        id : 6,
        input : [0, 1, 4, 6, 8],
        target : 10,
        output : 5
    },
    {
        id : 7,
        input : [9, 8, 6, 4, 2],
        target : 5,
        output : 3
    },
    {
        id : 8,
        input : [9, 8, 6, 4, 2],
        target : 12,
        output : 0
    },
    {
        id : 9,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : "hello",
        target : 4,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [2, 5, 6, 8],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [-3, -2, -1, 3, 4, 5],
        target : 0,
        output : 3
    },
    {
        id : 13,
        input : 123,
        target : 4,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : [{}],
        target : 3,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [" ", " ", " "],
        target : 1,
        output : 'Invalid input'
    },
    {
        id : 16,
        input : null,
        target : 2,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, target, output, id}) => {
    let result = IndxofTarget(input, target)
    if(result === output) console.log("Passed at ", id)
    else console.log("Failed at ", id, result)
})