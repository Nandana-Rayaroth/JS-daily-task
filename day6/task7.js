

function wrapper(arr) {
  let result = [];
  
  function flatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArray(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  return flatArray(arr)
}

console.log(wrapper([1, [2, 3, [4]], 5]))

console.log(wrapper([4, [6, 8], 9]))

//