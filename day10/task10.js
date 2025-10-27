function longestCommonPrefix(strings){
    let splitted = []
    splitted = strings.sort()
    let firstItem = splitted[0].split("")
    let lastItem = splitted[splitted.length - 1].split("")
    let result = []
    for(let i = 0; i < firstItem.length; i++){
        if(firstItem[i] === lastItem[i]){
            result.push(firstItem[i])
        }
        else{
            if(result.length === 0){
                return ""
            }
            else
            return result.toString().replaceAll(",", "");
        }
    }
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["flower", "flight", "flow"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
