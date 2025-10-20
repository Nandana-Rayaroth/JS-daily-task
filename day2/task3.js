
function EvenList(list) {
    let sample = []
    if(list.length === 0){
        console.log("Please enter items")
    }
    else{
        for(let i = 0; i < list.length; i++) {
            if(list[i] % 2 === 0){
                sample.push(list[i])
            }
        }
        return sample
    }
}
console.log(EvenList([2, 4, 6, 8, 10]))

// 