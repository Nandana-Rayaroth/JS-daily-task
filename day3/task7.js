
function snakeCase(str) {
  let temp = str.split("");
  let result = [];

  for (let i = 0; i < temp.length; i++) {
    let upper = temp[i].toUpperCase();

    if (temp[i] === upper) {
      let lower = temp[i].toLowerCase();
      result[i] = `_${lower}`;
    } else {
      result.push(temp[i]);
    }
  }
  return result.join("")
}
console.log(snakeCase("myFunction"));

// 