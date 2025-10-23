"use strict";
// let product : { id : number, name : String, price : number, inStocke : Boolean} = {
//     id : 2,
//     name : "Laptop",
//     price : 25000,
//     inStocke : true
// }
Object.defineProperty(exports, "__esModule", { value: true });
let product1 = {
    id: 10,
    name: "Laptop",
    price: 28000,
    inStock: true
};
function productDetails(product) {
    return `"Product ${product.id} : ${product.name} costs $${product.price}"`;
}
console.log(productDetails(product1));
//# sourceMappingURL=task5.js.map