// let ArrHello = ["hello", "hi"]

// let obj = { username: "Archana", accept: true}

let Sample = [{username: "Archana", accept: true}]
let SampleArray = [1, 2, 4]

function ArrayChecker(...Sample) {
    console.log(Array.isArray(SampleArray))
    console.log(Array.isArray(Sample[1]))
}

ArrayChecker()