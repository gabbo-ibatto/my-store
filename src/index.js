import Product from "./producs/models"

var p = Product({
    id: t.Integer,
    code: t.String,
    barcode: t.String,
    description: t.String,
    price: t.Number,
    supplierId: t.Integer
})

console.log(p)

console.log('oi')