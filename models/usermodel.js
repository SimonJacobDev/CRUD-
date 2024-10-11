const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    offer_name: {
        type: String,
        required: true
    },
    coupon_name: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: String,
        required: true
    },
    discount_amount: {
        type: String,
        required: true
    },
    isactive: {
        type: String,
        required: true
    }
}, { timestamps: true });

const user = mongoose.model('userdata', userSchema);

module.exports = user;
