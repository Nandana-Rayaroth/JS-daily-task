export function timeText(num : number) : string{
    if(num === 0 || num < 0) return "Invalid input"
    if(!Number.isInteger(num)) return "Invalid input"
    let hr : number = Math.floor(num / 3600)
    let mint : number =  Math.floor((num%3600 )/ 60)
    let snd : number = Math.floor(num % 3600 % 60)
    let text : string = ""
    if(hr > 0){
        if(hr === 1) text += `${hr} hour`
        else text += `${hr} hours `
    }
    if(mint > 0) {
        if(mint === 1) text += `${mint} minute`
        else text += `${mint} minutes `
    }
    if(snd > 0) {
        if(snd === 1) text += `${snd} second`
        else text += `${snd} seconds`
    }
    return text
}
// console.log(timeText(34.21))
// console.log(timeText(39721))
// console.log(timeText(3209))
// console.log(timeText(60))
// console.log(timeText(3600))
// console.log(timeText(1800))
// console.log(timeText(43))
// console.log(timeText(32905))