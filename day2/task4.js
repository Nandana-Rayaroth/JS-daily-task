
function testAnagram(str1, str2) {
    const arr = [str1, str2]
    let result1 = arr[0].split("").sort().join()
    let result2 = arr[1].split("").sort().join()

    if(result1.length === result2.length && result1 === result2){
        return true
    }
    else{
        return false
    }
}

console.log(testAnagram("restful", "fluster"))

// 