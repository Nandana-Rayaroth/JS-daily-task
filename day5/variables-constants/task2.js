
function Reassinging() {
    const num = 5;
    try{
        num = 10
        console.log(num, "inside of try")
    }
    catch(error){
        console.error(error)
    }
}

Reassinging()
