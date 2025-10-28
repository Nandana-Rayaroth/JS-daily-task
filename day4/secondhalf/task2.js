// function getWeekNumber(date) {
//     const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
//     const dayNum = d.getUTCDay() || 7
//     d.setUTCDate(d.getUTCDate() + 4 - dayNum)
//     const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0,1))

//     const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1)/7)
//     return weekNo    
// }
// function birthdayByWeek(dates) {
//   const weekMap = new Map();
//   for (const date of dates) {
//     const week = getWeekNumber(date);
//     weekMap.set(week, (weekMap.get(week) || 0) + 1);
//   }

//   const result = Array.from(weekMap.entries()).map(
//     ([weekNumber, birthdays]) => ({
//       weekNumber,
//       birthdays,
//     })
//   );

//   return result;
// }

getWeekNumber([new Date(2025, 0, 4), new Date(2025, 2, 8), new Date(2025, 5, 23)])

