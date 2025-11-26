"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDigit = removeDigit;
function removeDigit(str) {
    if (str.trim() === "")
        return "Invalid input";
    var result = str.replaceAll(/\d/g, "#");
    return result;
}
