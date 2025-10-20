
function pattern(str) {
    let splitted = str.split("")
    let firsthalf = []
    // let seconfHalf = []
    // let half = Math.floor((splitted.length) / 2)

    for(let i = 0; i< splitted.length; i++) {
        firsthalf.push(splitted[i])
        console.log(firsthalf.join(""))
    }
    // for(let i = half; i < splitted.length; i++) {
    //     seconfHalf.push((splitted[i]))
    // }
    // console.log(seconfHalf.join(""));
    // for(let i = 0; i < seconfHalf.length; i++) {
    //     console.log(seconfHalf.pop(seconfHalf[i]))
    // }
    for(let i=1; i<splitted.length; i++){
        console.log(firsthalf.slice(i).join(""))
    }
}

pattern("CAT")

// 