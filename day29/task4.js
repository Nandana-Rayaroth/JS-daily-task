"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeText = timeText;
function timeText(num) {
    if (num === 0 || num < 0)
        return "Invalid input";
    if (!Number.isInteger(num))
        return "Invalid input";
    var hr = Math.floor(num / 3600);
    var mint = Math.floor((num % 3600) / 60);
    var snd = Math.floor(num % 3600 % 60);
    var text = "";
    if (hr > 0) {
        if (hr === 1)
            text += "".concat(hr, " hour");
        else
            text += "".concat(hr, " hours ");
    }
    if (mint > 0) {
        if (mint === 1)
            text += "".concat(mint, " minute");
        else
            text += "".concat(mint, " minutes ");
    }
    if (snd > 0) {
        if (snd === 1)
            text += "".concat(snd, " second");
        else
            text += "".concat(snd, " seconds");
    }
    return text;
}
// console.log(timeText(34.21))
// console.log(timeText(39721))
// console.log(timeText(3209))
// console.log(timeText(60))
// console.log(timeText(3600))
// console.log(timeText(1800))
// console.log(timeText(43))
// console.log(timeText(32905))
