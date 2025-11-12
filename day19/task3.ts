export function SortByScoreRank(arr: number[]) {
  if(arr.length === 0) return 'Invalid input'

  arr = arr.sort((a:number, b:number) => b - a);
  let temp:object[] = [];
  for (let i:number = 0; i < arr.length; i++) {
    // if(arr[i] <= 0) return "Invalid input"
    temp.push({score: arr[i], rank: i+1})
  }
  for(let j = 0; j < temp.length; j++){
    for(let i = j+1; i < temp.length; i++){
      if(temp[j].score === temp[i].score){
        temp[i].rank = temp[j].rank
      }
      else temp[i].rank = temp[j].rank+1
    }
  }

  return temp
}
