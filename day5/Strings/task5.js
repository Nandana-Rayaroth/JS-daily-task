
function countVowels(str) {

    let count = 0
    let splitted = str.split("")
        if(splitted.includes('a') || splitted.includes('A') )count++
        if (splitted.includes("e") || splitted.includes("E")) count++;
        if (splitted.includes("i") || splitted.includes("I")) count++;
        if (splitted.includes("o") || splitted.includes("O")) count++;
        if (splitted.includes("u") || splitted.includes("U")) count++;

    console.log('Number of vowels in the sentance : ', count)
}


countVowels('malayalam')
countVowels('aeiou')