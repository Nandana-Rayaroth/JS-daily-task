export function StringDecode(str: string, item: string) : string{
    if(str.length === 0 || item.length === 0) return "Invalid input"
    if(item === "encrypt" || item === "Encrypt" || item === "ENCRYPT"){
        let code : string = ""
        let item : string = str[0]
        let count : number = 0
        for(let i : number = 0; i < str.length; i++){
            
            if(item === str[i]) count = count+1
            else {
                code += `${item}${count}`
                item = str[i]
                count = 1
            }
            if(i === str.length - 1) code += `${item}${count}`
            
        }
        return code
    }
    if(item === "decrypt" || item === "Decrypt" || item === "DECRYPT"){
        let outStr : string = ""
        for(let i : number = 0; i < str.length; i = i+2){
            if(!Number(str[i+1])) return "Invalid code"
           outStr += str[i].repeat(Number(str[i+1]))
        }
        return outStr
    }
    else return "Invalid input"
}
