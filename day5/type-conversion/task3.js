
function toBoolean(input) {
    if(input === 'yes' || input === 'Yes' || input === 1 || input === true) {
        return true
    }
    else{
        return false
    }
}

console.log(toBoolean(5))
console.log(toBoolean('yes'))
console.log(toBoolean(true))