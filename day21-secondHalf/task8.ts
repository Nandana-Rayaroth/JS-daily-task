export function CheckEven(n : number){
    if(!Number.isInteger(n)) return 'Invalid input'
    if(n === 0) return "Enter values greater than zero"
    let divAns : number = n / 2
    if(divAns === Math.round(divAns)){
        return("Even") 
    }
    else return("odd")
}

// console.log(CheckEven(23))
