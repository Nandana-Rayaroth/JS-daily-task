function ComposeAsync(...fns){

    let functionsArr = fns
    for(let i = functionsArr.length - 1; i >= 0; i--){
        console.log(functionsArr[i])
    }
    
}

const addOne = async x => x+1
const double = async x => x*2

const fn = ComposeAsync(addOne, double)
// await fn(3)