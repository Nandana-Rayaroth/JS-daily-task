function uniqueId(arr){
let result = []
    for(let i = 0; i < arr.length; i++){
        let obj = arr[i]
        let KEY = Object.keys(obj)
        let val = Object.values(obj)
        let sample = {}
        for(let j = 0; j < KEY.length; j++){
            sample[KEY[j]] = val[j]
            // console.log(result.includes(sample.KEY[j]))
            result.push(sample)
        }
        
    }
    // console.log(result)
}

uniqueId([{id: 1, value: 10}, {id: 2, value: 22}, {id: 1, value : 54}])