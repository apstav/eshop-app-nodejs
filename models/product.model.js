const mongoose = require('mongoose')

const Schema =  mongoose.Schema


let productSchema = new Schema({
    product: {
        type: String,
        required: [true, 'Product name is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    cost:{
        type: Number,
        max: 1000
    },
    description:{
        type: String,
        max: 1000
    },
    quantity:{
        type: Number,
        max: 1000
    }
}, {
    collection: 'products',
    timestamps: true
})


module.exports = mongoose.model('Product', productSchema)