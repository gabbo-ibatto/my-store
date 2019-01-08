import t from 'tcomb'

const Supplier = t.struct({
    id: t.Integer,
    description: t.String,
}, 'Supplier')