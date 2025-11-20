function validEmail(str){

    let atIndx = []
    if(str[0] === '.') return 'Can not start with dot'
    for(let i = 0; i < str.length; i++){
        if(str[i] === '@') atIndx.push(i)
        if(str[i] === " ") return 'Spaces are not alloweded'
        if(str[i] === '.'&&str[i+1] === '.') return 'Consecutive dots are not allowed'
    }
    if(atIndx.length !== 1) return 'Please check @'
    let atIndxVal = atIndx[0]
    if(atIndxVal === str.length-1 || atIndxVal === 0) return 'Invalid email'
    console.log(atIndx)
    for(let i = 0; i < atIndx; i++){
        if(str[i] === '@ '|| str[i] === '!' || str[i] === '#' || str[i] === '$' || str[i] === '%' || str[i] === '&' || str[i] === '^' || str[i] === '*' || str[i] === '(' || str[i] === ')' || str[i] === '+' || str[i] === '[' || str[i] === ']' || str[i] === '{' || str[i] === '}' || str[i] === ':' || str[i] === ';' || str[i] === ',' || str[i] === '/' || str[i] === '?' || str[i] === "'" || str[i] === '`' || str[i] === '~' || str[i] === '|'){
            return 'Invalid local part'
        }
    }

    let Domain = str.slice(atIndxVal + 1)
    let domDot = [] 
    let lastDot = Domain.lastIndexOf('.')
    for(let i = 0; i < lastDot; i++){
        if(Domain[i] !== 'a' && Domain[i] !== 'A' && Domain[i] !== 'b' && Domain[i] !== 'B' && Domain[i] !== 'C' && Domain[i] !== 'c' && Domain[i] !== 'D' && Domain[i] !== 'd' && Domain[i] !== 'E' && Domain[i] !== 'e' && Domain[i] !== 'F' && Domain[i] !== 'f' && Domain[i] !== 'G' && Domain[i] !== 'g' && Domain[i] !== 'H' && Domain[i] !== 'h' && Domain[i] !== 'I' && Domain[i] !== 'i' && Domain[i] !== 'J' && Domain[i] !== 'j' && Domain[i] !=='K' && Domain[i] !=='k' && Domain[i] !=='L' && Domain[i] !== 'l' && Domain[i] !== 'M' && Domain[i] !== 'm' && Domain[i] !== 'N' && Domain[i] !== 'n' && Domain[i] !== 'O' && Domain[i] !== 'o' && Domain[i] !== 'P' && Domain[i] !== 'p' && Domain[i] !== 'Q' && Domain[i] !== 'q' && Domain[i] !== 'R' && Domain[i] !== 'r' && Domain[i] !== 'S' && Domain[i] !== 's' && Domain[i] !== 't' && Domain[i] !== 'T' && Domain[i] !== 'U' && Domain[i] !== 'u' && Domain[i] !== 'V' && Domain[i] !== 'v' && Domain[i] !== 'W' && Domain[i] !== 'w' && Domain[i] !== 'X' && Domain[i] !== 'x' && Domain[i] !== 'Y' && Domain[i] !== 'y' && Domain[i] !== 'Z' && Domain[i] !== 'z' && Domain[i] !== '1' && Domain[i] !== '2' && Domain[i] !== '3' && Domain[i] !== '4' && Domain[i] !== '5' && Domain[i] !== '6' && Domain[i] !== '7' && Domain[i] !== '8' && Domain[i] !== '9' && Domain[i] !== '0')return 'Invalid domain name'
    }
    for (let i = 0; i < Domain.length; i++)
      if (Domain[i] === ".") domDot.push(i);
    
    if(domDot.length < 1) return 'domain part must contain atleast one dot'

    let tld = Domain.slice(lastDot+1)
    if(tld.length < 2) return 'Invalid TLD'

    return 'Valid email'
}

console.log(validEmail("test@mail.com"));
console.log(validEmail("abc@"))
console.log(validEmail("ok@gmail.com"))