"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordPattern = wordPattern;
function wordPattern(pattern, str) {
    var splitted = str.split(" ");
    var unqPtr = [];
    for (var i = 0; i < pattern.length; i++) {
        if (!unqPtr.includes(pattern[i]))
            unqPtr.push(pattern[i]);
    }
    var unqStr = [];
    for (var i = 0; i < splitted.length; i++) {
        if (!unqStr.includes(splitted[i]))
            unqStr.push(splitted[i]);
    }
    if (unqPtr.includes(" "))
        return "Spaces in patterns are not alloweded";
    if (unqPtr.length !== unqStr.length)
        return false;
    for (var i = 0; i < splitted.length; i++) {
        var currentPtr = pattern[i];
        var currentStr = splitted[i];
        var PtrInd = unqPtr.indexOf(currentPtr);
        var StrInd = unqStr.indexOf(currentStr);
        if (PtrInd !== StrInd)
            return false;
    }
    return true;
}
