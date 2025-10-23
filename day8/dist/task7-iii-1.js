"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Total(arr) {
    let arr1 = String(arr.slice(0, 1));
    let arr2 = String(arr.slice(1));
    let replace1 = arr1.replaceAll(",", "");
    let replace2 = arr2.replaceAll(",", "");
    return (Number(replace1) + Number(replace2));
}
console.log(Total([[1, 2, 3], [0, 7]]));
//# sourceMappingURL=task7-iii-1.js.map