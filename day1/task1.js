
const array = [1, 2, 3, 4];

// map

function conditionFn(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
}
function myMap(array, callback) {
  return callback(array);
}
console.log(myMap(array, conditionFn));

// filter

function conditionalFilter(array){
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            result.push(array[i]);
        }
    }
    return result
    
}
function myFilter(array, callback) {   
    return (callback(array))
}
console.log(myFilter(array, conditionalFilter))

// reduce

function conditionalReduce(array, InitialValue) {
  let sum = 0;
  for (let i = InitialValue; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
function myReduce(array, callback, InitialValue) {
  return callback(array, InitialValue);
}
console.log(myReduce(array, conditionalReduce, 0));