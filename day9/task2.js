let ErrorPromise = new Promise((resolve, reject) => {
    let flag = false
    setTimeout(() => {
        if(flag){
            resolve("Resolved")
        }
        else
        reject("Network error!")
    }, 1000)
})

ErrorPromise
    .then((message) => console.log(message))
    .catch((error)=> {console.log(error)})