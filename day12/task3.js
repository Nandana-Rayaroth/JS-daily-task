function TargetSubset(arr, target){
    if(!Array.isArray(arr) || arr.length === 0 || typeof(target) !== "number" || target <= 0) return 'Invalid input'
    let temp = arr.sort((a, b) => a - b)
    
    let count
    let result = []

    for(let i = 0; i < arr.length; i++){
        let random = Math.floor(Math.random(i - temp.length) * (temp.length))
        
        // if(i < random){
          if (temp[i] < target) {
            if (random !== i) {
              count = temp[i] + temp[random];
              if (count === target) {
                if (
                  !result.includes(temp[i]) &&
                  !result.includes(temp[random])
                ) {
                  result.push(temp[i], temp[random]);
                }
              }
            }
          }
        // }
        else if (temp[i] === target) {
          result.push([temp[i]]);
        }
        
    }
    console.log(result)

}

TargetSubset([2, 3, 5], 5)