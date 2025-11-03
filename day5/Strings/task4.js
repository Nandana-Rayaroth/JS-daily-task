
function reverseWords(sentance) {

    if(typeof(sentance) !== "string" || sentance.trim() === "") return 'Invalid input'
    sentance = sentance.trim()
    let splitted = sentance.split(" ")
    let reversed = splitted.reverse().join(" ")
    return(reversed)
}

let TestCase = [
    {
        id : 1,
        input : 'hello John welcome',
        output : 'welcome John hello'
    },
    {
        id : 2,
        input : "this is the reverse function",
        output : 'function reverse the is this'
    },
    {
        id : 3,
        input : "abcd efg hij",
        output : "hij efg abcd"
    },
    {
        id : 4,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [" ", " "],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "  ",
        output : 'Invalid input'
    },
    {
        id : 8,
        input : [12, 43, 54],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 10,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 11,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : true,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : NaN,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output}) => {
    let result = reverseWords(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})