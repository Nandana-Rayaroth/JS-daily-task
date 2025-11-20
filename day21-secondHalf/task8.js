"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEven = CheckEven;
function CheckEven(n) {
    if (!Number.isInteger(n))
        return 'Invalid input';
    if (n === 0)
        return "Enter values greater than zero";
    var divAns = n / 2;
    if (divAns === Math.round(divAns)) {
        return ("Even");
    }
    else
        return ("odd");
}
// console.log(CheckEven(23))
