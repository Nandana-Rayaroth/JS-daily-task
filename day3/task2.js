function Amstrong(num) {
    let converted = num.toString()
    let temp = []  
    let sum = 0

    let Length = converted.split("").length

    for(let i of converted) {
        temp.push(Math.pow(i, Length))
    }
    for (let j = 0; j < temp.length; j++) {
          sum = sum + temp[j];
    }
    if(sum === num){
        return true
    }
    else{
        return false
    }

}
console.log(Amstrong(405))

// 