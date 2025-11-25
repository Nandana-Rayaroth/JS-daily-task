export function VowelCount(str : string){
    if(str.length === 0 || str.trim() === "") return 'Invalid input'

    let vowels : string[] = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    let count : number = 0
    for(let i : number = 0; i < str.length; i++){
        vowels.forEach((vowel) => {
            if(vowel === str[i]) count = count + 1
        })
    }
    return count
}

