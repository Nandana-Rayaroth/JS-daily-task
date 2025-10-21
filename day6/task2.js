
function WordFrequency(senctance) {

    let lower = (senctance.toLowerCase()).replace(/[.,!]/g, "")
    let splitted = lower.split(" ")
    console.log(splitted)

    let count = {}
    for(let i of splitted) {
        count[i] = (count[i] || 0 )+1
    }
    console.log(count)
}

WordFrequency("Hello hello world, world!")
WordFrequency("number from missing number")

// 