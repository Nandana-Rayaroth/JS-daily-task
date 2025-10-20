
function sentanceCounter(str) {
    if(str.trim === "") {
        console.log("Enter a valid string")
    }
    else{
        const splittedArray = str.split(" ")
        return (splittedArray.length)
    }
}

console.log(sentanceCounter("Programmin is fun!"))

// 