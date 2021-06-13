const mongoose = require('mongoose');
const CryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Crypto currency must have a name'],
        unique: true,
        trim: true,
        maxlength: [20, 'A Crypto currency name must have less or equal then 20 characters'],
        minlength: [1, 'A Crypto currency name must have more or equal then 1 characters']
    },
    symbol: {
        type: String,
        required: [true, 'A Crypto currency must have a symbol'],
    },
    market_cap: {
        type: String,
        required: [true, 'A Crypto currency must have a market_cap']
    },
    price: {
        type: String,
        required: [true, 'A Crypto currency must have a price']
    },
    index: {
        type: Number,
        required: [true, 'Please provie a correct index value']
    },


});
const Crypto = mongoose.model('Crypto', CryptoSchema);
module.exports = Crypto;