"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAmstrong = isAmstrong;
function isAmstrong(num) {
    if (!Number.isInteger(num))
        return ("False");
    var temp = num.toString().split("");
    var sum = 0;
    for (var i = 0; i < temp.length; i++) {
        sum = sum + Math.pow(Number(temp[i]), temp.length);
    }
    if (sum === num)
        return ("True");
    else
        return ("False");
}
