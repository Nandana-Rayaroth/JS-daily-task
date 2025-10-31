
function snakeCase(str) {
  let temp = str.split("");
  let result = [];

  for (let i = 0; i < temp.length; i++) {
    let upper = temp[i].toUpperCase();
    if (temp[i] === upper) {
      let lower = temp[i].toLowerCase();
      result[i] = `_${lower}`;
    } 
    
    else {
      result.push(temp[i]);
    }
  }
  return result.join("")
}
// console.log(snakeCase("myFunction"));

const TestCase = [
  {
    id : 1,
    input : "myFunction",
    output : "my_function"
  },
  {
    id : 2,
    input : "MyFunction",
    output : '_my_function'
  },
  {
    id : 3,
    input : "myfunction",
    output : "myfunction"
  },
  {
    id : 4,
    input : "myfunctioN",
    output : "myfunctio_n"
  },

]

TestCase.forEach(({input, output}) => {
  let result = snakeCase(input)
  if(result === output) console.log("Passed")
  else console.log("Failed")
  console.log(result,"got")
  console.log(output,"expected")
})

// 