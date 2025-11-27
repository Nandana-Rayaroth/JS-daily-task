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
exports.BubleSort = BubleSort;
function BubleSort(arr) {
    if (arr.length === 0)
        return "Invalid input";
    var sample = __spreadArray([], arr, true);
    for (var i = 0; i < sample.length; i++) {
        for (var j = 0; j < sample.length; j++) {
            if (sample[j] > sample[j + 1]) {
                var temp = sample[j];
                sample[j] = sample[j + 1];
                sample[j + 1] = temp;
            }
        }
    }
    return sample;
}
// BubleSort([7, 12, 9, 11, 3])
// BubleSort([81, 54, 32, 1, 98, 43])
// BubleSort([43, 54, 90, 100, 12, 2, 0, 190])
// BubleSort([980, 234, 2142, 5432, 123, 9834])
// BubleSort([12, 34, 54, 76, 89])
// BubleSort([90, 86, 56, 34, 12 , 5])
// BubleSort([124, 452, 5234, 123, 34])
