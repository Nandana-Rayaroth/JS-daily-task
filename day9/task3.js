let finalPromise = new Promise((resolve, reject) => {
    let flag = true
    setTimeout(() => {
        if(flag)
        resolve("Success!")
        else{
            reject("Rejected")
        }
    }, 2000)
})
finalPromise
    .then((message) => console.log(message))
    .catch((catchMessage) => console.log(catchMessage))
    .finally(() => console.log("Promise completed"))