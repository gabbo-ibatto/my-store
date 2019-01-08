var t = require ("tcomb")
var product = require ("./products/model.js")

const Stock = t.struct({
    products: t.list(Product)
}, 'Stock')