"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSortType = findSortType;
function findSortType(arr) {
    if (arr.length === 0)
        return "Invalid input";
    var ascend = __spreadArray([], arr, true);
    ascend = ascend.sort(function (a, b) { return a - b; });
    var descend = __spreadArray([], arr, true);
    descend = descend.sort(function (a, b) { return b - a; });
    var ascendFlag = true;
    var descendFlag = true;
    for (var i = 0; i < arr.length; i++) {
        if (ascend[i] !== arr[i])
            ascendFlag = false;
        if (descend[i] !== arr[i])
            descendFlag = false;
    }
    if (ascendFlag)
        return "ascending";
    if (descendFlag)
        return "descending";
    if (!ascendFlag && !descendFlag)
        return "Unsorted";
}
