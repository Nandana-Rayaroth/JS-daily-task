function formatting(para: Date, format: string){
    let year
    let mint
    let scnd

    if(format.includes("YYYY")){
       year = para.getFullYear()
    }
    else if(format.includes("YY")){
        year = para.getFullYear()
        year = Number(year.toString().slice(2))
    }
    let month;

    if(format.includes("MM")){
        month = para.getMonth()
        month = (month+1).toString()
        if(month.length === 1){
            month+=0
            let splitted =  month.split("")
            splitted = splitted.reverse()
            month = (splitted.join().replaceAll(",",""))
        }
    }
    else if(format.includes("M")){
        month = para.getMonth()
        month = month+1
    }

    let day;
    if (format.includes("DD")) {
      day = (para.getDate()).toString();
      if(day.length === 1){
        day+=0
        let splitted = day.split("")
        splitted = splitted.reverse()
        day = splitted.join().replaceAll(",", "")
      }
      
    }
    else if(format.includes("D")){
        day = para.getDate()
    }
    
    let hour
    if (format.includes("HH")) {
      hour = para.getHours().toString();
      if(hour.length === 1){
        hour += 0
        let splitted = (hour.split("")).reverse()
        hour = splitted.join().replaceAll(",", "")
      }
      
    } else if (format.includes("H")) {
      hour = para.getHours();
    }
    else if (format.includes("hh")){
        hour = para.getHours()
        if(hour > 12){
            hour = hour - 12
        }
        hour = hour.toString()
        if(hour.length === 1){
            hour += 0
            let splitted = (hour.split("").reverse())
            hour = splitted.join().replaceAll(",", "")
        }
    }
    else if(format.includes("h")) {
        hour = para.getHours()
        if(hour > 12){
            hour = hour - 12;
        }
    }
    console.log(year)
    console.log(month)
    console.log(day)
    console.log(hour)
     
}

formatting(new Date(2025, 1, 4, 3, 44, 3), "YY-MM-DD, hh:m:s")
// formatting(new Date(2025, 1, 4, 13, 44, 3), "YYYY, YY")