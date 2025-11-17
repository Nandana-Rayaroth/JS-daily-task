export function SeatingArrangement(people: string): string[][]| string{
  if(people.length === 0 || people.trim() === "") return 'Invalid input'

    let arr: string[] = people.toString().replaceAll(",", "").split(" ")
    let sample: string[] = []
    let result: string[][] = []
      
      for (let i:number = 0; i < arr.length; i++) {
        sample.push(arr[i]);
        for (let j: number = i+1; j < arr.length; j++) {
          if (!sample.includes(arr[j])) {
            sample.push(arr[j]);
            
          }
        }
        for(let k:number = 0; k < arr.length; k++){
            if(!sample.includes(arr[k])){
                sample.push(arr[k])
            }
        }
        // console.log(sample);
        result.push(sample)
        sample = [];
    } 
    return(result)
    
}

// console.log(SeatingArrangement("A, B"))