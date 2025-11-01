
function flatObject(obj){

    let result = []
    let obj1 = {}
    for(let [keys, values] of Object.entries(obj)){
        // console.log(typeof([keys, values]))
       obj1 = Object.assign( [keys,values])
        
        // result.push([keys, values])
        // console.log(result)
    }

    console.log(obj1);
    
}

flatObject({a : 1, b : {c : 2, d : { e : 3}}})