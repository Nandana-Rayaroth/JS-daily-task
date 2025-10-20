
function logestWordFinder(list) {
    let max = []
    for(let i = 0; i < list.length; i++) {
        if(list[i].length > max.length){
            max = list[i]
            
        }
        // console.log(list[i].length)
    }
    console.log(max)

   
}

logestWordFinder(["programming", "is", "fun"]);

// 