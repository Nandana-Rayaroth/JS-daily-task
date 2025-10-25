let items = [5, 12, 9, 34, 4]

function myMap(arr, callback) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result
} 
function doubler(value) {
    return value = value * 2
}
console.log(myMap(items, doubler))


function myFilter(arr, callback) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
function greaterTen(value) {
    return value = value > 10
}
console.log(myFilter(items, greaterTen))


function myReduce(arr, callback, initialValue){
    let accumilator 
    initialValue ? accumilator = initialValue : accumilator = 0
    
    for(let i = 0; i < arr.length; i++){
        accumilator = callback(accumilator, arr[i])
    }
    return accumilator
}
function Sum(val1, val2){
    return val1+val2
}
console.log(myReduce(items, Sum))

//