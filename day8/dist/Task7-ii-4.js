"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function freqCounter(str) {
    let arr = str.split("");
    let freq = {};
    for (let i of arr) {
        if (i in freq) {
            freq[i]++;
        }
        else {
            freq[i] = 1;
        }
    }
    console.log(freq);
}
freqCounter("hello");
freqCounter("programming");
//# sourceMappingURL=Task7-ii-4.js.map