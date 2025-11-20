// function formatting(para: Date, format: string){
//     let year
//     let mint
//     let scnd
//     if(format.includes("YYYY")){
//        year = para.getFullYear()
//     }
//     else if(format.includes("YY")){
//         year = para.getFullYear()
//         year = Number(year.toString().slice(2))
//     }
//     let month;
//     if(format.includes("MM")){
//         month = para.getMonth()
//         month = (month+1).toString()
//         if(month.length === 1){
//             month+=0
//             let splitted =  month.split("")
//             splitted = splitted.reverse()
//             month = (splitted.join().replaceAll(",",""))
//         }
//     }
//     else if(format.includes("M")){
//         month = para.getMonth()
//         month = month+1
//     }
//     let day;
//     if (format.includes("DD")) {
//       day = (para.getDate()).toString();
//       if(day.length === 1){
//         day+=0
//         let splitted = day.split("")
//         splitted = splitted.reverse()
//         day = splitted.join().replaceAll(",", "")
//       }
//     }
//     else if(format.includes("D")){
//         day = para.getDate()
//     }
//     let hour
//     if (format.includes("HH")) {
//       hour = para.getHours().toString();
//       if(hour.length === 1){
//         hour += 0
//         let splitted = (hour.split("")).reverse()
//         hour = splitted.join().replaceAll(",", "")
//       }
//     } else if (format.includes("H")) {
//       hour = para.getHours();
//     }
//     else if (format.includes("hh")){
//         hour = para.getHours()
//         if(hour > 12){
//             hour = hour - 12
//         }
//         hour = hour.toString()
//         if(hour.length === 1){
//             hour += 0
//             let splitted = (hour.split("").reverse())
//             hour = splitted.join().replaceAll(",", "")
//         }
//     }
//     else if(format.includes("h")) {
//         hour = para.getHours()
//         if(hour > 12){
//             hour = hour - 12;
//         }
//     }
//     console.log(year)
//     console.log(month)
//     console.log(day)
//     console.log(hour)
// }
// formatting(new Date(2025, 1, 4, 3, 44, 3), "YY-MM-DD, hh:m:s")
// // formatting(new Date(2025, 1, 4, 13, 44, 3), "YYYY, YY")
function formatDate(date, format) {
    var map = {
        YYYY: date.getFullYear(),
        YY: String(date.getFullYear()).slice(-2),
        MM: String(date.getMonth() + 1).padStart(2, "0"),
        M: date.getMonth() + 1,
        DD: String(date.getDate()).padStart(2, "0"),
        D: date.getDate(),
        HH: String(date.getHours()).padStart(2, "0"),
        H: date.getHours(),
        hh: String(date.getHours() % 12 || 12).padStart(2, "0"),
        h: date.getHours() % 12 || 12,
        mm: String(date.getMinutes()).padStart(2, "0"),
        m: date.getMinutes(),
        ss: String(date.getSeconds()).padStart(2, "0"),
        s: date.getSeconds(),
        A: date.getHours() >= 12 ? "PM" : "AM",
        a: date.getHours() >= 12 ? "pm" : "am",
    };
    // Replace longest keys first to avoid partial replacements
    var tokens = Object.keys(map).sort(function (a, b) { return b.length - a.length; });
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        format = format.replace(token, map[token]);
    }
    return format;
}
console.log(formatDate(new Date(2025, 1, 4, 13, 44, 3), "YY-M-D, H:m:s"));
