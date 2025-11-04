function SubArr(arr, n){
    if((!Array.isArray(arr) || !Number.isInteger(n)) || arr.length <= 0 || n < 0) return 'Invalid input'
    let temp = []
    let sample = []

      for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== 'number') return 'Invalid input'
        sample.push(arr[i]);

        if (sample.length === n || i === arr.length - 1) {
          temp.push(sample);
          sample = [];
        }
      }

    return(temp)
}

let TestCase = [
    {
        id : 1,
        input : [1, 2, 3, 4, 5],
        size : 1,
        output : [[1], [2], [3], [4], [5]]
    },
    {
        id : 2,
        input : [1, 2, 3, 4, 5],
        size : 2,
        output : [[1, 2], [3, 4], [5]]
    },
    {
        id : 3,
        input : [1, 9, 6, 3, 2],
        size : 3,
        output : [[1, 9, 6], [3, 2]]
    },
    {
        id : 4,
        input : [12, 34, 45, 678, 356],
        size : 2,
        output : [[12, 34], [45, 678], [356]]
    },
    {
        id : 5,
        input : [],
        size : 4,
        output : 'Invalid input'
    },
    {
        id : 6,
        input : [1, 2, 5, 6, 3],
        size: 'ew',
        output : 'Invalid input'
    },
    {
        id : 7,
        input : "hello",
        size : -2,
        output : 'Invalid input'
    },
    {
        id : 8,
        input : "",
        output : 'Invalid input'
    },
    {
        id : 9,
        input : [" ", " ", " "],
        output : 'Invalid input'
    },
    {
        id : 10,
        input : 134,
        size : 3,
        output : 'Invalid input'
    },
    {
        id : 11,
        input : "hello",
        size : 4,
        output : 'Invalid input'
    },
    {
        id : 12,
        input : [" ", " "],
        size: 3,
        output : 'Invalid input'
    },
    {
        id : 13,
        input : "  ",
        size : 3,
        output : 'Invalid input'
    },
    {
        id : 14,
        input : ["hello", "hi"],
        size : 2,
        output : 'Invalid input'
    },
    {
        id : 15,
        input : [23, 45, 65, 56],
        size : null,
        output : 'Invalid input'
    }
]

TestCase.forEach(({input, output, size, id}) => {
    let result = SubArr(input, size)
    if(result === output) console.log("Passed", id)
    else{
        if(Array.isArray(result)&&Array.isArray(output)){
            if (result.length === output.length) {
              result = result.flat(Infinity);
              output = output.flat(Infinity);

              for (let i = 0; i < output.length; i++) {
                if (result[i] !== output[i]) {
                  console.log("Failed");
                  break;
                }
              }
              console.log("Passed", id);
            } else console.log("Failed");
        }
    }
})

//