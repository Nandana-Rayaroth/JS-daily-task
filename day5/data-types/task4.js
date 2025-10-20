
function NumberValidation(num) {
    if(num === NaN || num === Infinity || num === undefined || num === ""){
        return false
    }
    else{
        return true  
    }
    
}

console.log(NumberValidation(2))