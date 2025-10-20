function numberToWords(num) {
    if(num === 0) return "zero"

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
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    let words = ""

    if(num >= 100) {
        let hundreds = Math.floor(num / 100)
        words += ones[hundreds] + " hundred"
        num = num % 100

        if(num > 0) {
            words += " and "
        }
    }

    if(num > 0) {
        if(num < 20) {
            words += ones[num]
        }
        else{
            let tenDigit = Math.floor(num / 10)
            let oneDigit = num % 10
            words += tens[tenDigit]
            if(oneDigit > 0) words += " " + ones[oneDigit]
        }
    }
    return words.charAt(0).toUpperCase()+words.slice(1)
}


console.log(numberToWords(745))