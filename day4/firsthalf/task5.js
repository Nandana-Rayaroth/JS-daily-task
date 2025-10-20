function kebabCase(str){

    let splitted = str.split("")
    let result = []
    // console.log(splitted)

    for(let i = 0; i < splitted.length; i++) {
        let upper = splitted[i].toUpperCase()
        if(splitted[i] === upper) {
            let lower = splitted[i].toLowerCase()
            result[i] = `-${lower}`
        }
        else{
            result.push(splitted[i])
        }
    }
    console.log(result.join(""))
    
}

kebabCase('myFunction')

// 