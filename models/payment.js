const {
    Schema,
    model
} = require('mongoose');

module.exports.Payment = model('Payment', new Schema({
    amount: Number,
    bank_tran_id: String,
    base_fair: String,
    card_brand: String,
    card_issuer: String,
    card_issuer_country: String,
    card_issuer_country_code: String,
    card_no: String,
    card_sub_brand: String,
    card_type: String,
    currency: String,
    currency_amount: Number,
    currency_rate: Number,
    currency_type: String,
    error: String,
    status: String,
    store_id: String,
    tran_date: String,
    tran_id: String,
    value_a: String,
    value_b: String,
    value_c: String,
    value_d: String,
    verify_sign: String,
    verify_sign_sha2: String,
    verify_key: String
}, {
    timestamps: true
}));