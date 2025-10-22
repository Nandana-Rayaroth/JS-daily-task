
let timer
function countDown(targetDate) {
    const target = new Date(targetDate).getTime()

    timer = setInterval(() => {
        const now = new Date().getTime()
        const difference = target - now

        if(difference <= 0) {
            console.log("Countdown finished1")
            clearInterval(timer)
            return
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (100 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000 )
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`)

    }, 1000)
}

countDown("2025-12-31T23:59:59");

setTimeout(() => {
    clearInterval(timer)
    console.log("Countdown stopped!")
}, 5000)