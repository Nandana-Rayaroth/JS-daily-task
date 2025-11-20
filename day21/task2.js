function groupAnagrams(words){

    let sortted = words
    let splitted = []
    for(let i = 0; i < sortted.length; i++){
        splitted.push(sortted[i].split(""))
    }
    for(let i = 0; i < splitted.length; i++){
        for(let j = 0; j < splitted[i].length; j++){
            console.log(splitted[i][j])
        }
    }
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])