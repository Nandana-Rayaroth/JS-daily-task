
function Anagram(str1, str2){
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  str1 = str1.trim();
  str2 = str2.trim();
  if (str1.length === 0 || str2.length === 0) return false;
  const arr = [str1, str2];
  let result1 = arr[0].split("").sort().join();
  let result2 = arr[1].split("").sort().join();

  if (result1.length === result2.length && result1 === result2) {
    return true;
  } else {
    return false;
  }
}

const TestCase = [
  {
    id : 1,
    st1 : 'no',
    st2 : 'on',
    output : true
  },
  {
    id : 2,
    st1 : 'malayalam',
    st2 : 'alayalamm',
    output : true
  },
  {
    id : 3,
    st1 : 'good',
    st2 : 'morning',
    output : false
  },
  {
    id : 4,
    st1 : "",
    st2 : "",
    output : false
  },
  {
    id : 5,
    st1 : 'hi',
    st2 : '',
    output : false
  },
  {
    id : 6,
    st1 : true,
    st2 : true,
    output : false
  },
  {
    id : 7,
    st1 : 'true',
    st2 : 'true',
    output : true
  },
  {
    id : 8,
    st1 : {},
    st2 : 'hi',
    output : false
  },
  {
    id : 9,
    st1 : [],
    st2 : 'hi',
    output : false
  },
  {
    id : 10,
    st1 : {},
    st2 : {},
    output : false
  },
  {
    id : 11,
    st1 : ' ',
    st2 : ' ',
    output : false
  },
  {
    id : 12,
    st1: " hi ",
    st2 : 'hi',
    output : true
  },
  {
    id : 13,
    st1 : ' hi',
    st2 : 'hi ',
    output : true
  },
  {
    id : 14,
    st1 : 'hihello',
    st2 : 'ihello',
    output : false
  },
  {
    id : 15,
    st1 : 2434,
    st2 : 2434,
    output : false
  }
]
TestCase.forEach(({st1, st2, output}) => {
  let result = Anagram(st1, st2)
  if(result === output) console.log("Pass")
  else console.log("Failed"); 
})

// 
