var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model

const InventorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    quantity: {
        type: Number,
        default: 0
    }
});

const inventory = mongoose.model('inventory', InventorySchema);

module.exports = inventory;