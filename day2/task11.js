function PerfectSquare(num) {
  let temp;
  let checker;
  for (let i = 1; i < num; i++) {
    temp = i * i;
    if (num === temp) {
      checker = true;
      return checker;
    } else {
      checker = false;
    }
  }
  return checker;
}

console.log(PerfectSquare(25));

// 