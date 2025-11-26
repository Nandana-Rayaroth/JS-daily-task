export function removeDigit(str:string) : string{
    if(str.trim() === "") return "Invalid input"
    let result: string = str.replaceAll(/\d/g, "#")
    return result
}