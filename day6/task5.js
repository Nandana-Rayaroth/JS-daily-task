
let items = [12, 4, 65, 7, 1]

function myFilter(arr, callback){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
function Greater(item){
    return item = item > 10
}

console.log(myFilter(items, Greater))

// 