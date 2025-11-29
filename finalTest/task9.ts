function ComputeObj(obj1: {}, obj2: {}){
    let Keys1 = Object.keys(obj1)
    let Keys2 = Object.keys(obj2)

    let Val1 = Object.values(obj1)
    let Val2 = Object.values(obj2)
    for(let i = 0; i < Keys1.length; i++){
        if(Keys1[i] !== Keys2[i]){
            console.log(Keys1[i], Keys2[i])
        }
    }
}

ComputeObj({x:1, y:2, z: 3}, {x: 1, y: 4, w: 5})