
// function getPermutation(str) {
//     let splitted = str.split("")

//     let result = []
//     let temp = []
//     for(let j = 0; j < splitted.length; j++) {
//       for (let i of splitted) {
//         let position = Math.floor(Math.random() * splitted.length)
//         if(!temp.includes(i)){
//             temp[position] = i
//         }
        
//       }
//       if(temp.length === splitted.length){
//         result.push(temp.join(""));
//         // console.log(result)
//       }
//     }
//     console.log(result)
// }

function getPermutation(str) {
    let splitted = str.split("")
    let count = (splitted.length) * (splitted.length-1)
    let temp = []
    
    for(let i = 0; i < splitted.length; i++) {
        // for(let j=0; i <count; j++) {
            for(let element of splitted) {
                let position = Math.floor(Math.random() * splitted.length)
                if(!temp.includes(str[position])){
                    temp[i] = str[position]
                    console.log(temp);
                }
                // console.log(element)
                
            }
        // }
        
    }

}

getPermutation("abc")