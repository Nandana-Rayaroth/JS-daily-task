
function reverseWithorder(str){

  let temp = str.split(" ")
  let sample2 = []
  for(let i=0; i<temp.length; i++){
    sample2[i] = temp[i].split("").reverse().join()
  }

  console.log(sample2) 
}

reverseWithorder("Programming is fun");

// 