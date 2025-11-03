
function capitalize(sentance) {

    if(typeof(sentance) !== "string" || sentance.trim() === "") return 'Invalid input'

    sentance =sentance.trim()
    let splitted = sentance.split("")
    let final = []

    for(let i = 0; i < splitted.length; i++) {
        if((splitted[i-1] === ' ') || i === 0){
            final.push(splitted[i].toUpperCase())
        }
        else{
            final.push(splitted[i]);
        }
        
    }
    return(final.toString().split(",").join(""));
}

let TestCase = [
    {
        id : 1,
        input : "hello everyone",
        output : 'Hello Everyone'
    },
    {
        id : 2,
        input : 'Good morning everyone',
        output : 'Good Morning Everyone'
    },
    {
        id : 3,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 4,
        input : "  ",
        output : 'Invalid input'
    },
    {
        id : 5,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [1, 2, 4],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 8,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 9,
        input : {greet : "hello"},
        output : 'Invalid input'
    },
    {
        id : 10,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : NaN,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : true,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : "@123 upper",
        output : "@123 Upper"
    },
    {
        id : 15,
        input : '    hi   ',
        output : 'Hi'
    }
]

TestCase.forEach(({input, output}) => {
    let result = capitalize(input)
    if(result === output) console.log("Passed")
    else console.log("Failed")
})