"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VowelCount = VowelCount;
function VowelCount(str) {
    if (str.length === 0 || str.trim() === "")
        return 'Invalid input';
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var count = 0;
    var _loop_1 = function (i) {
        vowels.forEach(function (vowel) {
            if (vowel === str[i])
                count = count + 1;
        });
    };
    for (var i = 0; i < str.length; i++) {
        _loop_1(i);
    }
    return count;
}
