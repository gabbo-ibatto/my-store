import t from 'tcomb'

const Product = t.struct({
    id: t.Integer,
    code: t.String,
    barcode: t.String,
    description: t.String,
    price: t.Number,
    supplierId: t.Integer
}, 'Product')