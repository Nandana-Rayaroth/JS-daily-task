"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(a) {
    let flag = 0;
    if (a <= 1) {
        console.log("Enter a valid number");
    }
    else {
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                flag = flag + 1;
            }
        }
        if (flag > 2) {
            console.log("False");
        }
        else {
            console.log("True");
        }
    }
}
isPrime(7);
isPrime(10);
isPrime(29);
//# sourceMappingURL=Task7-ii-1.js.map