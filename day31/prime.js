"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrime = GetPrime;
function GetPrime(n) {
    if (!Number.isInteger(n) || n <= 0)
        return "Invalid input";
    var temp = [];
    var prime = [];
    for (var i = 2; i <= n * n; i++) {
        temp.push(i);
    }
    var Length = temp.length;
    for (var i = 0; i < Length; i++) {
        var item = temp[0];
        for (var j = 0; j < Length; j++) {
            var div = temp[j] % item;
            if (div === 0) {
                temp.splice(j, 1);
            }
        }
        if (item && prime.length < n)
            prime.push(item);
    }
    return (prime);
}
