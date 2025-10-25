function isValidEmail(str){
    if(!str || str.includes(" ")) return false

    const Indexat = str.indexOf("@")
    const IndexDot = str.lastIndexOf(".")

    let splitted = str.split("")
    for(let i of splitted){
        let upper = i.toUpperCase()
        if(upper !== '@' && upper !== '.')
        if(upper === i) return false
    }

    // if(Indexat === -1 || IndexDot === -1) return false
    if(Indexat > IndexDot) return false
    if(Indexat === 0 || IndexDot === str.length - 1) return false
    if(IndexDot === 0 || Indexat === str.length - 1) return false

    if(IndexDot - Indexat < 2) return false
    const Extension = str.slice(IndexDot + 1)
    if(Extension.length < 2) return false
    else return true
    
}

console.log(isValidEmail("nandana@gmail.com"))
console.log(isValidEmail("nan.com"))
console.log(isValidEmail("@nandana."))
console.log(isValidEmail("knjWui.com"))
