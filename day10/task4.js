function groupAnagrams(words) {
    let group = {}
    for(let i = 0 ; i < words.length; i++) {
        let word = words[i]
        let sortted = words[i].split("").sort().join("")
        if(!group[sortted]){
            group[sortted] = []
        }
        group[sortted].push(word);
    }
    
    let result = Object.values(group)
    result.sort((a, b) => (b.length - a.length))
    console.log(result)
}
groupAnagrams(["eat", "tea", "tan","ate", "nat", "bat"])
groupAnagrams(["nat", "tea", "tan", "ate", "eat", "bat"])

// 