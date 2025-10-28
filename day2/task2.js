
function sentanceCounter(str) {
    if(typeof(str) !== 'string'){
        return 'Invalid input'
    }
    if(str.trim === "" || str === "") {
        return("Invalid input")
    }
    else{
        str = str.trim()
        const splittedArray = str.split(" ")
        if(splittedArray.length <= 0) return 'Invalid input'
        return splittedArray.length;
    }
}

// console.log(sentanceCounter("Programmin is fun!"))

const TestCases = [
    {
        id : 1,
        input : 'Good morning every one',
        output : 4
    },
    {
        id : 2,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 3,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 4,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 5,
        input : undefined,
        output : 'Invalid input'
    },
    {
        id : 6,
        input : null,
        output : 'Invalid input'
    },
    {
        id : 7,
        input : NaN,
        output : 'Invalid input'
    },
    {
        id : 8,
        input : 'r',
        output : 1
    },
    {
        id : 9,
        input : ' programming is wonderful ',
        output : 3
    },
    {
        id : 10,
        input : 785,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : [{}],
        output : 'Invalid input'
    },
    {
        id : 12,
        input : 'test case 12 ',
        output : 3
    },
    {
        id : 13,
        input : ' hello everyone',
        output : 2
    },
    {
        id : 14,
        input : 'good evening everyone',
        output : 3
    },
    {
        id : 15,
        input : '  good morning ',
        output : 2
    }

]
TestCases.forEach(({input, output}) => {
    let result = sentanceCounter(input)
    if(result === output) console.log("Passed")
    else console.log("Failed");
})

// 