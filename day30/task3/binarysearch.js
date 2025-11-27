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
exports.BinarySearch = BinarySearch;
function BinarySearch(arr, item) {
    if (arr.length === 0)
        return "Invalid input";
    var ascend = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var isAscedn = false;
    var descend = __spreadArray([], arr, true).sort(function (a, b) { return b - a; });
    var isDescend = false;
    if (JSON.stringify(ascend) === JSON.stringify(arr)) {
        isAscedn = true;
    }
    if (JSON.stringify(descend) === JSON.stringify(arr)) {
        isDescend = true;
    }
    if (isAscedn || isDescend) {
        var firstMid = Math.floor(arr.length / 2);
        if (item === arr[firstMid])
            return "Value ".concat(item, " found");
        else if (isAscedn) {
            if (item < arr[firstMid]) {
                return spliter(arr.slice(0, firstMid), item);
            }
            else if (arr[firstMid] < item) {
                return spliter(arr.slice(firstMid + 1), item);
            }
        }
        else if (isDescend) {
            if (arr[firstMid] > item)
                return spliter(arr.slice(firstMid + 1), item);
            else if (item > arr[firstMid])
                return spliter(arr.slice(0, firstMid), item);
        }
    }
    else
        return "Invalid input";
}
function spliter(k, num) {
    var ascend = __spreadArray([], k, true).sort(function (a, b) { return a - b; });
    var isAscedn = false;
    var descend = __spreadArray([], k, true).sort(function (a, b) { return b - a; });
    var isDescend = false;
    if (JSON.stringify(ascend) === JSON.stringify(k))
        isAscedn = true;
    else
        isDescend = true;
    if (k.length === 1) {
        if (k[0] === num)
            return "Value ".concat(num, " found");
        else
            return "Value ".concat(num, " not found");
    }
    else {
        var mid = Math.floor(k.length / 2);
        if (isAscedn) {
            if (k[mid] === num)
                return "Value ".concat(num, " found");
            else if (num < k[mid]) {
                return spliter(k.slice(0, mid), num);
            }
            else if (k[mid] < num) {
                return spliter(k.slice(mid + 1), num);
            }
        }
        if (isDescend) {
            if (k[mid] === num)
                return "Value ".concat(num, " found");
            else if (k[mid] > num)
                return spliter(k.slice(mid + 1), num);
            else if (num > k[mid])
                return spliter(k.slice(0, mid), num);
        }
    }
}
// console.log(BinarySearch([2, 3, 5, 7, 11, 15, 25], 15))
// console.log(BinarySearch([43, 54, 65, 76, 87], 86))
// console.log(BinarySearch([12, 23, 32, 43, 54, 65,76], 32))
// console.log(BinarySearch([12, 23, 32, 43, 54, 65, 76], 0))
// console.log(BinarySearch([76, 65, 54, 43, 32, 23, 12], 32));
