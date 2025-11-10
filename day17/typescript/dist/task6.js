"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PrimeFactors(num) {
    let prime = [];
    let fact = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            fact.push(i);
            let flag = 0;
            for (let j = 1; j <= num; j++) {
                if (i % j === 0)
                    flag = flag + 1;
            }
            if (flag <= 2) {
                prime.push(i);
            }
        }
    }
    return (Math.max(...prime));
}
console.log(PrimeFactors(13195));
// console.log(PrimeFactors(600851475143))
//# sourceMappingURL=task6.js.map