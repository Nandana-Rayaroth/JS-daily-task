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
exports.SelectionSort = SelectionSort;
function SelectionSort(arr) {
    if (arr.length === 0)
        return "Invalid input";
    var sample = __spreadArray([], arr, true);
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var min = Math.min.apply(Math, sample);
        result.push(min);
        sample.splice(sample.lastIndexOf(min), 1);
    }
    return result;
}
