// let product : { id : number, name : String, price : number, inStocke : Boolean} = {
//     id : 2,
//     name : "Laptop",
//     price : 25000,
//     inStocke : true
// }

type products = {
    id : number,
    name : string,
    price : number, 
    inStock : boolean
}

let product1 : products = {
    id : 10,
    name : "Laptop",
    price : 28000,
    inStock : true
}

function productDetails(product : products) : string{
    return `"Product ${product.id} : ${product.name} costs $${product.price}"`
}

console.log(productDetails(product1))