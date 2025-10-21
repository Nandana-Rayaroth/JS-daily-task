
function passWordChecker(str){
    let length = str.split("").length
    let splitted = str.split("")
    let Password

    if(length < 6){
        Password = "Password is Weak"
    }
    else if(length >= 6 && length <=7){
        for(let i = 0; i < length; i++){
            if(splitted.includes('0') || splitted.includes('1') || splitted.includes('2') || splitted.includes('3') || splitted.includes('4') || splitted.includes('5') || splitted.includes('6') || splitted.includes('7') || splitted.includes('8') || splitted.includes('9')){
                Password = "Medium"
            }
            else if(splitted.includes('@') || splitted.includes('#') || splitted.includes('&') || splitted.includes('$') || splitted.includes('%') || splitted.includes('!')){
                Password = "Medium"
            }
        }
    }
    else if(length >= 8) {

        for(let i = 0; i < length; i++) {
            let upper = splitted[i].toUpperCase()
            let lower = splitted[i].toLowerCase()
            if (
              splitted.includes(upper) &&
              splitted.includes(lower) &&
              (splitted.includes("0") ||
                splitted.includes("1") ||
                splitted.includes("2") ||
                splitted.includes("3") ||
                splitted.includes("4") ||
                splitted.includes("5") ||
                splitted.includes("6") ||
                splitted.includes("7") ||
                splitted.includes("8") ||
                splitted.includes("9")) &&
                (splitted.includes("@") ||
                splitted.includes("#") ||
                splitted.includes("&") ||
                splitted.includes("$") ||
                splitted.includes("%") ||
                splitted.includes("!"))
            ) {
              Password = "Strong"
            }
        }
        if(Password !== "Strong"){
            Password =
              "Not Strong, include Number, uppercase, lowercase, and special character";
        }   
    }
    else{
        Password = "password is weak"
    }
    console.log(Password)
}

passWordChecker('egwrerge')
passWordChecker('etrh')
passWordChecker('Abi123@avfgs')

// 