
function capitalize(sentance) {

    let splitted = sentance.split("")
    let final = []

    for(let i = 0; i < splitted.length; i++) {
        if((splitted[i-1] === ' ') || i === 0){
            final.push(splitted[i].toUpperCase())
        }
        else{
            final.push(splitted[i]);
        }
        
    }
    console.log(final.toString().split(",").join(""));
}

capitalize('hello everyone')