export function wordPattern(pattern: string, str: string): boolean | string{
    let splitted = str.split(" ")

    let unqPtr:string[] = []
    for(let i: number = 0; i < pattern.length; i++){
        if( !unqPtr.includes(pattern[i])) unqPtr.push(pattern[i])
    }
    let unqStr:string[] = []
    for(let i:number = 0; i < splitted.length; i++){
        if(!unqStr.includes(splitted[i])) unqStr.push(splitted[i])
    }
    if(unqPtr.includes(" ")) return "Spaces in patterns are not alloweded"
    if(unqPtr.length !== unqStr.length) return false
    for(let i:number = 0; i < splitted.length; i++){
        let currentPtr:string = pattern[i]
        let currentStr:string = splitted[i]
        let PtrInd:number = unqPtr.indexOf(currentPtr)
        let StrInd:number = unqStr.indexOf(currentStr)
        if(PtrInd !== StrInd) return false
    }
    return true
}

