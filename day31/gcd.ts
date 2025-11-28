
export function Checker(a : number, b : number){
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "Invalid input"
    a = Math.abs(a)
    b = Math.abs(b)
    let mod : number = a%b
    if(mod === 0) return b
    else{
        a = b
        b = mod
        return Checker(a,b)
    }
}

// console.log(Checker(120, 25))
// console.log(Checker(25, 120))
// console.log(Checker(56, 12))
// console.log(Checker(210, 45))
// console.log(Checker(45, -24))
// console.log(Checker(54, -24))