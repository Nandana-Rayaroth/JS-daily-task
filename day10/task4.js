function groupAnagrams(words) {
    if(!Array.isArray(words) || words.length === 0) return 'Invalid input'
    let group = []
    for(let i = 0 ; i < words.length; i++) {
        if(typeof(words[i]) !== "string" || words[i].trim() === "") return 'Invalid input'
        let word = words[i]
        let sortted = words[i].split("").sort().join("")
        if(!group[sortted]){
            group[sortted] = []
        }
        group[sortted].push(word);
    }
    let result = Object.values(group)
    result.sort((a, b) => (b.length - a.length))
    return(result)
}

const TestCase = [
  {
    id: 1,
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  },
  {
    id: 2,
    input: ["nat", "tea", "tan", "ate", "eat", "bat"],
    output: [["tea", "ate", "eat"], ["nat", "tan"], ["bat"]],
  },
  {
    id: 3,
    input: ["abc", "gfe", "bca", "cba", "efg", "fge"],
    output: [["abc", "bca", "cba", "gfe"], ["efg", "fge"]]
  },
  {
    id: 4,
    input: "hello",
    output: 'Invalid input'
  },
  {
    id: 5,
    input: "",
    output: 'Invalid input'
  },
  {
    id: 6,
    input : 1234,
    output: 'Invalid input'
  },
  {
    id: 7,
    input: [123, 435, 6745],
    output: 'Invalid input'
  },
  {
    id: 8,
    input : [],
    output: 'Invalid input'
  },
  {
    id: 9,
    input : {},
    output : 'Invalid input'
  },
  {
    id: 10,
    input: [{}],
    output : 'Invalid input'
  },
  {
    id: 11,
    input: "   ",
    output : 'Invalid input'
  },
  {
    id: 12,
    input : ["  ", "  ", "  "],
    output : 'Invalid input'
  },
  {
    id: 13,
    input : 12*6,
    output  : 'Invalid input'
  },
  {
    id : 14,
    input : {greet : "hello"},
    output : 'Invalid input'
  },
  {
    id : 15,
    input : undefined,
    output: 'Invalid input'
  }

];

TestCase.forEach(({input, output}) => {
    let result = groupAnagrams(input)
    if(result === output){
        console.log("Passed")
        return
    }
    if (result.length !== output.length){ 
         console.log("Failed") 
         return
        }
        let flat1 = result.flat(Infinity);
        let flat2 = result.flat(Infinity);
        for (let i = 0; i < flat1.length; i++) {
            if (flat1[i] !== flat2[i]) {
            console.log("Failed");
            break;
            }
        }
        console.log("Passed");
})

// 

