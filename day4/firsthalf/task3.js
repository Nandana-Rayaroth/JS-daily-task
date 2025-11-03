import { objectEquality } from "../../objectutility.js"
function Inverter(obj) {
    if(typeof(obj) !== 'object') return 'Invalid input'
    const inverted = {}

    for(let key in obj) {
        if(key.length===0) return 'Invalid input'
        let value = obj[key]
        inverted[value] = key
    }
    return(inverted)
}

// console.log(Inverter({a: 1, b: 2}) )
// console.log(Inverter({b: 3, c: 1, d: 4}))
// console.log(Inverter({ a: 1, b: 2, c: { d: 3, e: 4 } }));

let TestCase = [
    {
        id : 1,
        input : {a: 1, b: 2},
        output : {'1' : 'a', '2' : 'b'}
    },
    {
        id : 2,
        input : {b: 3, c: 1, d: 4},
        output : {'1': 'c', '3': 'b', '4': 'd'}
    },
    {
        id: 3,
        input : {b: 2, a: 1},
        output : {'2': 'b', '1': 'a'}
    },
    {
        id: 4,
        input : {1: 'a', 2: 'b'},
        output : {a: 1, b: 2}
    },
    {
        id: 5,
        input : {},
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = Inverter(input)
    let flag = objectEquality(result, output)
    console.log(flag)
})