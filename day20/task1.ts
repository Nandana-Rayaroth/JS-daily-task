
export function TeamSelection(players: string[], teamsize: number){
    let temp: string[][] = []
    let uniq: string[] = []

    if(teamsize > players.length || teamsize <= 1) return 'Invalid team size'
    for(let i: number = 0; i < players.length; i++){
        if(uniq.includes(players[i]) || players[i].trim() === "") return 'Invalid input'
        uniq.push(players[i])
    }

    if (players.length === teamsize) return players;
    for(let i:number = 0; i < players.length; i++){
      temp.push([players[i]])
    }
    
    for(let i:number = 0; i < players.length; i++){
        for(let j:number = i+1; j>i; j--){
          if(j>= players.length) temp[i].push(players[j - i-1])
          else temp[i].push(players[j])
        }
    }

    for(let k:number = temp[0].length; k < teamsize; k++){
      for (let i:number = 0; i < temp.length; i++) {
        for (let j:number = temp[i].length - 1; j >= temp[i].length - 1; j--) {
          let Ind:number = players.indexOf(temp[i][j]);
          if (Ind >= players.length - 1) Ind = Ind - players.length
          temp[i].push(players[Ind + 1])
        }
      }
    }
    return(temp)
}
