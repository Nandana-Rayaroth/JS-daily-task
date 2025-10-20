
function emailChecker(str) {
    let splitted = str.split('')

    if(splitted.includes('@')&&splitted.includes('.')){
        console.log("True")
    }
    else{
        console.log("False")
    }

}

emailChecker("test@example.com")

// 