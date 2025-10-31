
function missingNumber(arr) {
    if((!Array.isArray(arr))) return 'Invalid input'
    let counter = arr[0]
    let starter = 1
    let temp = []
    let flag = 0

    if(arr.length === 0 || (counter < 0) ) return 'Invalid input'

    if (counter - 1 === starter && !arr.includes(starter)) {
        flag = flag + 1
    }

    for(let i = 0; i <= arr.length; i++) {
        if(!arr.includes(counter)){
            temp.push(counter)
            flag === 1 ? flag = flag + 1 : flag = 0
        }
        counter = counter + 1;
    }
    if(flag === 1 || (flag >1 && temp.length === 0)){
        return starter
    }
    else if(temp.length < 2 && (flag > 0 && (arr.length)+1 === arr[arr.length-1])) return starter

    else if (temp.length >= 2) return "Invalid input";

    else if(temp.length < 2 && flag === 0) return temp[0]

    else if (flag >= 2) {
      return "Invalid input";
    } 
}

// console.log(missingNumber([2, 3, 4, 5, 6]))
const TestCase = [
    {
        id : 1,
        input : [1, 2, 3, 5, 6],
        output : 4
    },
    {
        id : 2,
        input : [10, 11, 13, 14, 15],
        output : 12
    },
    {
        id : 3,
        input : [2, 3, 4, 5, 6],
        output : 1
    },
    {
        id : 4,
        input : [1, 2, 3, 4, 5, 6, 8, 9, 10, 11],
        output : 7
    },
    {
        id : 5,
        input : [1, 2, 4, 5, 6, 8],
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [2, 3, 5, 6],
        output : 'Invalid input'
    },
    {
        id : 7,
        input : [3, 4, 6, 7],
        output : 5
    },
    {
        id : 8,
        input : [],
        output : 'Invalid input'
    },
    {
        id : 9,
        input : {},
        output : 'Invalid input'
    },
    {
        id : 10,
        input : 123,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : "hello",
        output : 'Invalid input'
    },
    {
        id : 12,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 13,
        input : [-19, -20, -21],
        output : 'Invalid input'
    },
    {
        id : 14,
        input : {name : "hello"},
        output : 'Invalid input'
    },
    {
        id : 15,
        input : undefined,
        output : 'Invalid input'
    }
]
TestCase.forEach(({input, output}) => {
    let result = missingNumber(input)
    if(result === output) console.log("Passed")
    else console.log("Failed");
})

// 
