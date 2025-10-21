
function addDays(date, n) {
    const result = new Date(date.getTime())

    const msPerDay = 24 * 60 * 60 * 1000
    result.setTime(result.getTime() + n * msPerDay)

    console.log(result.toISOString())
}

const day = new Date("2025-01-01T00:00:00Z");
addDays(day, 12)
console.log(day)