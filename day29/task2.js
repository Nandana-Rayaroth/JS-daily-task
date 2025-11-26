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
exports.Rotate = Rotate;
function Rotate(arr, k) {
    if (k > arr.length || k < 0)
        return "Invalid input";
    if (!Number.isInteger(k))
        return "Invalid input";
    var firsthalf = arr.slice(k + 1);
    var secondhalf = [];
    for (var i = 0; i <= k; i++) {
        secondhalf.push(arr[i]);
    }
    var result = __spreadArray(__spreadArray([], firsthalf, true), secondhalf, true);
    return (result);
}
// Rotate([1, 2, 3, 4, 5], 2)
// Rotate([2, 4, 65, 76, 23, 6, 5], 3)
// Rotate([32, 31, 54, 65, 76, 86 ,763, 53], 6)
