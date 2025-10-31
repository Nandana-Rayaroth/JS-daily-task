
function Inverter(obj) {
    // let result = []
    // let values = []
    // for(let i in obj){
    //     values.push(i)
    //     result.push(obj[i])
    // }
    // let make = []
    // for(let i=0; i<result.length; i++) {
    //     make.push(result[i])
    //     make.push(values[i])
    // }
    // console.log(make)

    const inverted = {}
    for(let key in obj) {
        let value = obj[key]
        inverted[value] = key
    }
    console.log(inverted)
}

Inverter({a: 1, b: 2}) 
Inverter({b: 3, c: 1, d: 4})