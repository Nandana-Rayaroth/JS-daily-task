let Original = [4, 5, 8]

function addItem(arr, item) {

    let newCopied = JSON.parse(JSON.stringify(arr))
    newCopied.push(item)
    console.log(newCopied)
}

addItem(Original, 6)
console.log(Original)