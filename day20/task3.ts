function SortMixedNested(arr: []){
    
    let temp = arr.flat(Infinity);

    function re(arr: []){
        let sample = []
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])){
              sample.push([])
              return re(arr[i])
            }

          else sample.push(temp[i]);
        }
        return sample
    }
    return re(arr)
}
console.log(SortMixedNested([3, [2, [5, 1]], 4]))

// NOT COMPLETED
