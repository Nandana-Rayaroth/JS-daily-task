function longer(str) {
  if (typeof str !== "string" || !str.trim() || str.length === 0)
    return "Invalid input";

  str = str.trim();
  let splitted = str.split(" ");
  let max = [];
  let similar = [];
  let splittedMax;

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > max.length) {
      max = splitted[i];
    } else if (splitted[i].length === max.length) {
      if (!similar.includes(max)) {
        similar.push(max);
      }
      similar.push(splitted[i]);
      max = splitted[i];
    }
  }
  splittedMax = max.split(" ");

  for (let i = 0; i < splitted.length; i++) {
    if (similar == "") {
      //  console.log(max);
      return max;
    } else if (similar !== "") {
      if (splittedMax[i].length > similar[0].length) {
        // console.log(splittedMax);
        return splittedMax.toString();
      } else {
        // console.log(similar);
        return similar.toString();
      }
    }
  }
}

// console.log(longer("The quick brown fox jumps over the lazy dog"))
// console.log(longer("Helo world of programming"));

const TestCase = [
  {
    id: 1,
    input: "Hello world of programming",
    output: "programming",
  },
  {
    id: 2,
    input: "I love coding",
    output: "coding",
  },
  {
    id: 3,
    input: "The quick brown fox jumps over the lazy dog",
    output: "quick,brown,jumps",
  },
  {
    id: 4,
    input: "The box is too",
    output: "The,box,too",
  },
  {
    id: 5,
    input: "        nice tea",
    output: "nice",
  },
  {
    id: 6,
    input: "        no       ",
    output: "no",
  },
  {
    id: 7,
    input: "",
    output: "Invalid input",
  },
  {
    id: 8,
    input: [],
    output: "Invalid input",
  },
  {
    id: 9,
    input: {},
    output: "Invalid input",
  },
  {
    id: 10,
    input: undefined,
    output: "Invalid input",
  },
  {
    id: 11,
    input: null,
    output: "Invalid input",
  },
  {
    id: 12,
    input: "   ",
    output: "Invalid input",
  },
  {
    id: 13,
    input: true,
    output: "Invalid input",
  },
  {
    id: 14,
    input: "abc def ghi",
    output: "abc,def,ghi",
  },
  {
    id: 15,
    input: "hello     everyone",
    output: "everyone",
  },
];
TestCase.forEach(({ input, output }) => {
  let result = longer(input);
  if (result === output) console.log("Passed");
  else console.log("Failed");
});
