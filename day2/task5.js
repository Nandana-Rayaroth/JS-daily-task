import { objectEquality } from "../objectutility.js";
function frequanceFounder(str) {
    if(typeof(str) !== "string") return 'Invalid input'
    str = str.trim().replaceAll(/\s+/g, "");

    if(str.length === 0) return 'Invalid input'
    let splitted = str.split("")
    let freq = {}

    for(let i = 0; i < splitted.length; i++){
        splitted[i] = splitted[i].toLowerCase()
        if(splitted[i] in freq){
            freq[splitted[i]]++
        }
        else{
            freq[splitted[i]] = 1
        }
    }
    return freq
}
// console.log(frequanceFounder("programming"))

const TestCase = [
    {
        id : 1,
        input : 'morning',
        output : { m: 1, o: 1, r: 1, n: 2, i: 1, g: 1 }
    },
    {
        id : 2,
        input : 'prepare',
        output : { p : 2, r : 2, e : 2, a : 1}
    },
    {
        id : 3,
        input : 'Malayalam',
        output : { m : 2, a : 4, l : 2, y : 1}
    },
    {
        id : 4,
        input : 'malayaLaM',
        output : { m : 2, a : 4, l : 2, y : 1}
    },
    {
        id : 5,
        input : ' kerala',
        output : { k: 1, e: 1, r: 1, a:2, l:1}
    },
    {
        id : 6,
        input : 'kerala ',
        output : { k: 1, e: 1, r: 1, a: 2, l: 1}
    },
    {
        id : 7,
        input : '   ',
        output : 'Invalid input'
    },
    {
        id : 8,
        input : '',
        output : 'Invalid input'
    },
    {
        id : 9,
        input : 'Good morning',
        output : { g: 2, o: 3, d: 1, m: 1, r: 1, n: 2, i: 1}
    },
    {
        id : 10,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 11,
        input : 2334,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : ["hello", "hi"],
        output : 'Invalid input'
    },
    {
        id : 15,
        input : true,
        output : 'Invalid input'
    }
]
TestCase.forEach(({input, output}) => {
    let result = frequanceFounder(input)
    let flag = objectEquality(result, output)
    console.log(flag)
})

// 