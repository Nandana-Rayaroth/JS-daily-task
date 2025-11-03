function TypeDisplay(allType){

    let text = ""
    for (let i = 0; i < allType.length; i++) {
        text += typeof allType[i] + ","
    }
    return text
}
// let allType = [1, "a", false, [1, 2], {name: "hello"}, undefined]

// console.log(TypeDisplay(allType))

const TestCase = [
  {
    id: 1,
    input: [1, "a", false, [1, 2], { name: "hello" }, undefined],
    output: "number,string,boolean,object,object,undefined,",
  },
  {
    id: 2,
    input : [ 2, true, "hello",  ,NaN ],
    output : "number,boolean,string,undefined,number,"
  },

];

TestCase.forEach(({input, output}) => {
    let result = TypeDisplay(input)
    if(result === output) console.log("Passed")
    else console.log("Failed");
})

