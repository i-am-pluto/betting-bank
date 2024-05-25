const { default: mongoose, Mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const bankSchema = new Schema({
    bankContractAddress: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: "usdt"
    },
    kbd: {
        type: Date,
        default: Date.now
    },
    ked: {
        type: Date,
        default: null
    }
});

const Bank = mongoose.model("Bank", bankSchema);
module.exports = Bank;
