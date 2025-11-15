export function validEmail(arr : string[]) : string | string[]{
    let result : string[] = []
    for(let i: number = 0; i < arr.length; i++){
        let str:string = arr[i]
        let atIndx: number[] = []
        let firstflag : boolean = false
        if(str[0] !== '.'){
            for(let j:number = 0; j < str.length; j++){
                if(str[j] === '@') atIndx.push(j)
                if(str[j] === " ") break
                if(str[j] === '.'&&str[i+1] === '.') break
                if(j === str.length - 1) firstflag = true
            }
            
            if(firstflag) {
              if(atIndx.length === 1){
                let atIndxVal : number = atIndx[0]
                if(atIndxVal !== str.length - 1 && atIndxVal !== 0){
                    let localValidation : boolean[] = []
                    let local_flag : boolean = false
                    for(let j : number = 0; j < atIndx[0]; j++){
                        if(str[j] !== '@' && str[j] !== '!' && str[j] !== '#' && str[j] !== '$' && str[j] !== '%' && str[j] !== '^' && str[j] !== '&' && str[j] !== '*' && str[j] !== '(' && str[j] !== ')' && str[j] !== '+' && str[j] !== '[' && str[j] !== ']' && str[j] !== '{' && str[j] !== '}' && str[j] !== ':' && str[j] !== ';' && str[j] !== ',' && str[j] !== '/' && str[j] !== '?' && str[j] !== "'" && str[j] !== '`' && str[j] !== '~' && str[j] !== '|' ){
                            
                            if(j === atIndx[0]-1)localValidation.push(true)
                        }
                        else localValidation.push(false)
                    }
                    for(let j: number = 0; j < localValidation.length; j++){
                        if(localValidation[j]) local_flag = true
                        else break
                    }
                    if(local_flag){
                        let Domain : string = str.slice(atIndxVal + 1)
                        let domDot: number[] = []
                        let domValidation: boolean[] = []
                        let dom_flag: boolean = false
                        let lastDot: number = Domain.lastIndexOf('.')
                        let tld : string
                        for(let j : number = 0; j < lastDot; j++){
                            if(Domain[j] === 'A' || Domain[j] === 'a' || Domain[j] === 'B' || Domain[j] === 'b' || Domain[j] === 'C' || Domain[j] === 'c' || Domain[j] === 'D' || Domain[j] === 'd' || Domain[j] === 'E' || Domain[j] === 'e' || Domain[j] === 'F' || Domain[j] === 'f' || Domain[j] === 'G' || Domain[j] === 'g' || Domain[j] === 'H' || Domain[j] === 'h' || Domain[j] === 'i' || Domain[j] === 'I' || Domain[j] === 'J' || Domain[j] === 'j' || Domain[j] === 'K' || Domain[j] === 'k' || Domain[j] === 'L' || Domain[j] === 'l' || Domain[j] === 'M' || Domain[j] === 'm' || Domain[j] === 'N' ||Domain[j] === 'n' || Domain[j] === 'O' || Domain[j] === 'o' || Domain[j] === 'P' || Domain[j] === 'p' || Domain[j] === 'Q' || Domain[j] === 'q' || Domain[j] === 'R'|| Domain[j] === 'r' || Domain[j] === 'S' || Domain[j] === 's' || Domain[j] === 'T' || Domain[j] === 't' || Domain[j] === 'U' || Domain[j] === 'u' || Domain[j] === 'V' || Domain[j] === 'v' || Domain[j] === 'W' || Domain[j] === 'w' || Domain[j] === 'X' || Domain[j] === 'x' || Domain[j] === 'Y' ||Domain[j] === 'y' || Domain[j] === 'Z' || Domain[j] === 'z' || Domain[j] === '0' || Domain[j] === '1' || Domain[j] === '2' || Domain[j] === '3' || Domain[j] === '4' || Domain[j] === '5' || Domain[j] === '6' || Domain[j] === '7' || Domain[j] === '8' || Domain[j] === '9'){
                                if(j === lastDot - 1) domValidation.push(true)
                            }
                            else domValidation.push(false)
                        }
                        for(let j : number = 0; j < domValidation.length; j++){
                            if(domValidation[j]) dom_flag = true
                            else break
                        }
                        if(dom_flag){
                            for(let j : number = 0; j < Domain.length; j++){
                                if(Domain[j] === '.') domDot.push(i)
                            }
                            if(domDot.length >= 1){
                                tld = Domain.slice(lastDot+1)
                                if(tld.length >= 2) result.push(str)
                            }
                        }
                    }
                }
              }
            }
        }
        
        
    }
    if(result.length > 0) return result
    else return 'Emails are invalid'
}

// console.log(validEmail(["test@mail.com", "abc@", "ok@gmail.com"]))
// console.log(validEmail(["frwter@gmail.com", "reterg@"]))
