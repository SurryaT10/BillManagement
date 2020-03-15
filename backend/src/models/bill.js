const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({
    unitsUsed: {
        type: Number,
        validate(unitsUsed) {
            if(unitsUsed<0) {
                throw new Error("Amount cannot be -ve")
            }
        }
    },
    billAmount: {
        type: Number,
        validate(billAmount) {
            if(billAmount<0) {
                throw new Error("Amount cannot be -ve")
            }
        }
    },
    district: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


const Bill = mongoose.model('Bill', billSchema)

module.exports = Bill