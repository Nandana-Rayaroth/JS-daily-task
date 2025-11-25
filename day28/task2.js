"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostFrq = MostFrq;
function MostFrq(arr) {
    var frq = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in frq) {
            frq[arr[i]]++;
        }
        else {
            frq[arr[i]] = 1;
        }
    }
    var Val = Object.values(frq);
    var max = Math.max.apply(Math, Val);
    var Key = Object.keys(frq);
    var item = Key.find(function (element) { return frq[element] === max; });
    return Number(item);
}
// console.log(MostFrq([1, 2, 2, 3, 3, 3, 4]))
