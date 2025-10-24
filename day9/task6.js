function Login(){
    return new Promise((resolve, reject) => {
        let isLoged = true
        setTimeout(() => {
            if(isLoged)
                resolve("Login successful")
            else
                reject("Log out")
        }, 3000)
    })
}

async function loaded(){
    try{
        let load = await Login();
        console.log(load)
    }
    catch(error){
        console.error("this is eroor",error)
    }
} 
loaded()
