
const array = [1, 2, 3, 4];

// map
function myMap(arr, callback){
  let result = []
  for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i]))
  }
  return result
}
function doubler(value) {
  return value = value * 2
}
console.log(myMap(array, doubler))



// filter
function myFilter(arr, callback) {
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}
function greaterTen(value){
  if(value % 2 === 0)
  return value
}
console.log(myFilter(array, greaterTen))


// reduce
function myReduce(arr, callback, initialValue = 0){
  let result = initialValue
  for(let i = 0; i < arr.length; i++){
    result = callback(result, arr[i])
  }
  return result
}
function Sum(val1, val2){
  return val1 + val2
}
console.log(myReduce(array, Sum))