function MaxlengthArray(arr, maxWidth){
    let sample = []
    let text = ""
    for(let i = 0; i < arr.length; i++){
        let arrLength = arr[i].length
        
        if(text.length < maxWidth && (text.length+arrLength+1) <= maxWidth){
            text += arr[i] + " "
        }else{
            
            if(text.length < maxWidth){
                let temp = text.split(" ")
                for(let j = 0; j < temp.length; j++){
                    if(temp.length + 1 <= maxWidth){ 
                        temp[j]+= " "
                    }
                   
                }
                let sample2 = temp.join("");
                
                // for(let j = text.length; j< maxWidth; j++){
                //     text+=" "
                // }
            }
            sample.push(text)
            text = ""
            text += arr[i] + " "
        }
    }
    sample.push(text)
    console.log(sample)
}

MaxlengthArray(["This", "is", "an", "example", "of", "text", "justification."], 16)