function longestCommonPrefix(strings){
    if(strings.length <= 1 || !Array.isArray(strings)) return 'Invalid input'

    strings = strings.filter((element) => typeof(element) === 'string' && element.trim() !== "")
    if(strings.length === 0) return 'Invalid input'

    let splitted = []
    splitted = strings.sort()
    let firstItem = splitted[0].split("")
    let lastItem = splitted[splitted.length - 1].split("")
    let result = []
    for(let i = 0; i < firstItem.length; i++){
        if(firstItem[i].trim() === "" || lastItem[i].trim() === "") return 'Invalid input'
        if(firstItem[i] === lastItem[i]){
            result.push(firstItem[i])
        }
        else{
            if(result.length === 0){
                return ""
            }
        }
    }
    return result.toString().replaceAll(",", "");
}

const TestCase = [
  {
    id: 1,
    input: ["flower", "flow", "flight"],
    output: "fl",
  },
  {
    id: 2,
    input: ["flower", "flight", "flow"],
    output: "fl",
  },
  {
    id: 3,
    input: ["dog", "racecar", "car"],
    output: "",
  },
  {
    id: 4,
    input: ["apple", "app", "application"],
    output: "app",
  },
  {
    id: 5,
    input: [],
    output: "Invalid input",
  },
  {
    id: 6,
    input: {},
    output: "Invalid input",
  },
  {
    id: 7,
    input: [{}],
    output: "Invalid input",
  },
  {
    id: 8,
    input: ["  ", "   "],
    output: "Invalid input",
  },
  {
    id: 9,
    input: [{ greet: "hello" }],
    output: "Invalid input",
  },
  {
    id: 10,
    input: 1243,
    output: "Invalid input",
  },
  {
    id: 11,
    input: { greet: "hi" },
    output: "Invalid input",
  },
  {
    id: 12,
    input: ["abcde", "abcd", "a", "ab", "abc"],
    output: "a",
  },
  {
    id: 13,
    input: "abcd, abcd",
    output: "Invalid input",
  },
  {
    id: 14,
    input: ["abc", "bcd", "bcf"],
    output: "",
  },
  {
    id: 15,
    input: ["abcd", "abrf"],
    output: "ab",
  },
  {
    id: 16,
    input: ["abcd", "", "abfr"],
    output: "ab",
  },
  {
    id: 17,
    input: ["", "abc", "abcrf"],
    output: "abc",
  },
  {
    id: 18,
    input: ["abc", "abcd", ""],
    output: "abc",
  },
  {
    id: 19,
    input: ["", "", ""],
    output: "Invalid input",
  },
];

TestCase.forEach(({ input, output }) => {
  let result = longestCommonPrefix(input);
  if (result === output) console.log("Passed");
  else console.log("Failed"); 
});
