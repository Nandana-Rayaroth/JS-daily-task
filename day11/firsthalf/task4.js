function combineObject(obj1, obj2){
    let result = Object.assign(obj1, obj2)
    console.log(result)
}
combineObject({a: 1, b: 2}, {b: 3, c: 4})

//