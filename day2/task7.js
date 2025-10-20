
// function longerWordFinder(str) {
//     let splitted = str.split(" ")
//     let max = splitted[0].length
//     let same = []



//             for (let i = 1; i < splitted.length; i++) {
//               if (max < splitted[i].length) {
//                 max = splitted[i].length;
//               }
//             }
//             for (let i = 0; i < splitted.length; i++) {

//                if (max === splitted[i].length) {
//                 console.log( splitted[i])
//               }
//             }


    
// }

// longerWordFinder("Hello world of programming");

function longer(str) {
  let splitted = str.split(' ')
  let max = []
  let similar = []
  let splittedMax

  for(let i = 0; i < splitted.length; i++) {
    if(splitted[i].length > max.length) {
      max = splitted[i]
    }
    else if(splitted[i].length === max.length){
      if(!similar.includes(max)){
        similar.push(max)
      }
      similar.push(splitted[i])
      max = splitted[i]
    }
  }
  splittedMax = max.split(" ")

  for(let i = 0 ; i< splitted.length; i++) {
     if (similar == "") {
       console.log(max);
       return;
     }
    else if(similar !== "") {
      if (splittedMax[i].length > similar[0].length) {
        console.log(splittedMax);
        return;
      } else {
        console.log(similar);
        return;
      }
    }
   
  }

}

longer("The quick brown fox jumps over the lazy dog");

// 