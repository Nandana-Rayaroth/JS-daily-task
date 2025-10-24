let NumberPromise = new Promise((resolve, reject) => {
    let flag = 5
    if(flag === 5)
        resolve(5)
    else
        reject("rejected")
})
// NumberPromise
//     .then((number) => console.log(number * 2 + 10))
//     .catch((message) => console.log(message))

NumberPromise
    .then((number) => number * 2)
    .then((number) => number + 10)
    .then((number) => console.log(number))