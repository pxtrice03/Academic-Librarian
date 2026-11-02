import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const loanSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    book: {
        type: String,
        ref: 'Book',
        required: true
    },
    borrowedAt: {
        type: Date,
        default: Date.now
    },
    dueAt: {
        type: Date,
        required: true
    },
    returnedAt: {
        type: Date,
        default: null
    }
}, {
    timestamp: true
})

export const Loan = mongoose.model('Loan', loanSchema)
