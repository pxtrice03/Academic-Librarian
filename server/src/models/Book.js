import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const bookSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    totalCopies: {
        type: Number,
        required: true,
        min: 1
    },
    availableCopies: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamp: true
})

export const Book = mongoose.model('Book', bookSchema)
