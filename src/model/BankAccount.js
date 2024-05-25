const { default: mongoose, Mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const bankAccountSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    username: String,
    balance: {
        type: Number,
        default: 0
    },
    kbd:{
        type: Date,
        default: Date.now
    },
    ked:{
        type: Date,
        default: null
    }
});

const BankAccount = mongoose.model("User", bankAccountSchema);
module.exports = BankAccount;
