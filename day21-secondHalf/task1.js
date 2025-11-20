var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findLongestChain(arr) {
    var sample = __spreadArray([], arr, true);
    sample.sort(function (a, b) { return a - b; });
    for (var i = 0; i < sample.length; i++) {
        var Ind = arr.indexOf(sample[i]);
        var temp = [];
        for (var j = Ind; j < sample.length; j++) {
            if (sample[j] > sample[i])
                temp.push(sample[j]);
        }
        console.log(temp);
    }
}
findLongestChain([5, 1, 2, 3, 0, 4, 6]);
