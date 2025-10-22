function formatTimeZone(date, zone) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone : zone,
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit'
    })

    return formatter.format((date))
}

const date =  new Date()

console.log(formatTimeZone(date, 'America/New_York'))