export function ConvertToObj(str : string){
    if(str[0] !== "?") return "Invalid URL"
    let sample : string = str
    let obj = {};
    sample = sample.slice(1)
    if(sample.includes("&")){
      let splitted: string[] = sample.split("&");
      for (let i = 0; i < splitted.length; i++) {
        if(!splitted[i].includes("=")) return "Invalid URL"
        let sub : string[] = splitted[i].split("=");
        for (let j = 0; j < sub.length; j = j + 2) {
          obj[sub[j]] = sub[j + 1];
        }
      }
    }
    else{
        if(!sample.includes("=")) return "Invalid URL"
        let sub: string[] = sample.split("=")
        if(sub.length > 2 || sub.length < 2) return "Invalid URL"
        obj[sub[0]] = sub[1]
    }
    return obj
}

// console.log(ConvertToObj("?name=John&age=20&active=true"))
// console.log(ConvertToObj("?name=John"))