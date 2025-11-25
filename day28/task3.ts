export function isAmstrong(num: number) : string{
    if(!Number.isInteger(num)) return("False")
    let temp : string[] = num.toString().split("")
    let sum : number = 0
    for(let i : number = 0; i < temp.length; i++){
       sum = sum + Math.pow(Number(temp[i]), temp.length)
    }
    if(sum === num) return("True")
    else return("False")
}
