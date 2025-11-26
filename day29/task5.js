"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueSum = UniqueSum;
function UniqueSum(arr) {
    var unique = [];
    for (var i = 0; i < arr.length; i++) {
        var lastInd = arr.lastIndexOf(arr[i]);
        var firstInd = arr.indexOf(arr[i]);
        if (lastInd === firstInd)
            unique.push(arr[i]);
    }
    var sum = unique.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum;
}
// console.log(UniqueSum([1, 2, 3, 2]))
