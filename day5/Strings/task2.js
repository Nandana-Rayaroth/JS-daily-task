
function extractUsername(email) {

    let splitted = email
    for(let i = 0; i < splitted.length; i++) {
        if(splitted[i] === '@'){
            return splitted.slice(0,i)
        }
    }
}

console.log(extractUsername('nandana@123'))
