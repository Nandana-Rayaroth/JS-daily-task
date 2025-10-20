
function reverseWords(sentance) {

    let splitted = sentance.split(" ")
    let reversed = splitted.reverse().join(" ")
    console.log(reversed)
}

reverseWords('hello nandana welcome')