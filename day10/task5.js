
function countDown(targetDate) {
    const target = new Date (targetDate).getTime()

    let timer = setInterval(() => {
        const now = new Date().getTime()
        const difference = target - now
        if(difference <= 0){
            clearInterval(timer)
            console.log("Countdown FInished!")
            return
        }
        const days = Math.floor(difference / (1000 * 60 * 60 *24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000*60*60))
        const minutes = Math.floor((difference % (1000*60*60)) / (1000*60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        console.log(`${days}day ${hours}hr ${minutes}m ${seconds}s`)

    }, 1000)
}

countDown("2025-12-31")
