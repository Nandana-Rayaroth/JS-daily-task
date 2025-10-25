const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve", 
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
]

const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "sevety",
    "eighty",
    "ninety"
]

function numberToText(num) {
    if(num === 0) return "zero"
    let text = ""

    if(num >= 1000){
        let thousand = Math.floor(num/1000)
        text += ones[thousand] + " thousand"

        num = num % 1000
        if(num > 0){
            text += " and "
        }
    }

    if(num >= 100){
        let hundreds = Math.floor(num/100)
        
        text += ones[hundreds] + " hundred"

        num = num % 100
        if(num > 0){
            text += " and "
        }
    }
    if(num > 0){
        if(num < 20){
            text += " "+ones[num]
        }
        else{
            let tenDigit = Math.floor(num / 10)
            let oneDigit = num % 10
            text += " "+tens[tenDigit]
            if(oneDigit > 0) 
                text += " "+ones[oneDigit]
        }
    }
    return (text.charAt(0).toUpperCase()+text.slice(1))
}
console.log(numberToText(152))
console.log(numberToText(1256))
console.log(numberToText(2845))
console.log(numberToText(10034))


// 