function daysBetween(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)

    const differenceMills = Math.abs(d2 - d1)
    const days = differenceMills / (1000 * 60 * 60 * 24)

    console.log(days)
}

daysBetween('2025-05-02', '2025-10-23')