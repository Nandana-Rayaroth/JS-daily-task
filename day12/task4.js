
function flatObject(obj){

    let result = []
    let obj1 = {}
    for(let [keys, values] of Object.entries(obj)){
    //    obj1 = Object.assign( [keys,values])
    //     console.log(obj1)
        result.push([keys, values])
        // console.log(result)
    }

    console.log(result)
    
}

flatObject({a : 1, b : {c : 2, d : { e : 3}}})