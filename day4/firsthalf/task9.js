function Anagram(str1, str2) {
  let firstStr = str1.split("");
  let secondStr = str2.split("");

  if(secondStr.length !== firstStr.length){
    return false
  }
  let count1 = 0, count2 = 0
  for(let i = 0; i < str1.length+1; i++) {
    if(firstStr.includes(firstStr[i+1])){
      count1 = count1+1
      // console.log(count1, firstStr[i])
    }
  }

  for (let i = 0; i < str1.length+1; i++){
    if (secondStr.includes(secondStr[i + 1])) {
      count2 = count2 + 1;
      // console.log(count2, secondStr[i]);
    }
  }


  if(!(count1>=2 || count2>=2)){
      for (let i = 0; i < firstStr.length; i++) {
        if (!secondStr.includes(firstStr[i])) {
          return false;
        } else {
          return true;
        }
      }
  }
  else{
    return "repetation not allowed"
  }

}

console.log(Anagram("aab", "abb"));

//
