

function frequanceFounder(str) {
    let splitted = str.split("")
    console.log(splitted)
    let freq = []

    for(let i = 0; i < splitted.length; i++){
        if(splitted[i] in freq){
            freq[splitted[i]]++
        }
        else{
            freq[splitted[i]] = 1
        }
    }
    return freq
}
console.log(frequanceFounder("programming"))

// 