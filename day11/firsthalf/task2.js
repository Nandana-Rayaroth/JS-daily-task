function getTicketPrice(age){
    if(age <= 12) {
        console.log("ticket price for childrens $10")
    }
    else if(age >= 13 && age <= 59){
        console.log("ticket price for adults $20")
    }
    else if(age >= 60){
        console.log("ticket price for seniors $15")
    }
    else{
        console.log("sorry")
    }
}

getTicketPrice(24)
getTicketPrice(12)
getTicketPrice(68)

// 