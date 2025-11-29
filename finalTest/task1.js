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
exports.AnalyzeHeatmap = AnalyzeHeatmap;
function AnalyzeHeatmap(heatmap) {
    var arr = __spreadArray([], heatmap, true);
    var maxArr = [];
    var maxVal;
    var minArr = [];
    var minVal;
    var sum = arr.flat(Infinity);
    var avg = (sum.reduce(function (acc, curr) { return acc + curr; }, 0)) / sum.length;
    avg = Number(parseFloat(avg).toFixed(1));
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 0)
            return "Invalid input";
        maxArr.push((Math.max.apply(Math, arr[i])));
        minArr.push((Math.min.apply(Math, arr[i])));
    }
    maxVal = Math.max.apply(Math, maxArr);
    obj.maxTemp = maxVal;
    minVal = Math.min.apply(Math, minArr);
    obj.minTemp = minVal;
    obj.averageTemp = avg;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === maxVal)
                obj.hottestPoint = [i, j];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === minVal)
                obj.coldestPoint = [i, j];
        }
    }
    return obj;
}
console.log(AnalyzeHeatmap([[12, 43, 45], [23, 65, 6], [54, 23], []]));
// console.log(AnalyzeHeatmap([[]]))
