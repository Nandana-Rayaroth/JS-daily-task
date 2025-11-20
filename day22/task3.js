function TimeoutWrapper(fn, ms){
    let arr = [43, 23, 45, 76, 67]

    function Operation(){
        return new Promise((resolve) => {
            setTimeout(() => {
                // resolve(fn)
                resolve(arr.map(fn))
            }, ms)
        })
    }
    Operation()
    async function wrapper() {
        const result = await Operation()
        console.log(result)
    }
    wrapper()
}

TimeoutWrapper((x) => x * 2, 1000)