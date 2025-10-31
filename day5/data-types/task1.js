function TypeDisplay(allType){
    let text = ""
    for (let i = 0; i < allType.length; i++) {
        text += typeof allType[i] + " "
    }
    return text
}
let allType = [1, "a", false, [1, 2], {name: "hello"}, undefined]

console.log(TypeDisplay(allType))

