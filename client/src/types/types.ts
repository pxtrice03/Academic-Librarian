export type Role = 'student' | 'teacher' | 'admin'

export interface User {
    _id: string
    title: string
    author: string
    category: string
    description: string
    institution?: string
    matricule?: string
    isActive: boolean
    createdAt: string
}

export interface Book {
    _id: string
    title: string
    author: string
    category: string
    description?: string
    totalCopies: number
    availableCopies: number
}

export type BookRef = Pick<Book, '_id' | 'title' | 'author'>

export type LoanStatus = 'active' | 'overdue' | 'returned'

export interface Loan {
    _id: string
    user: string | {
        _id: string
        name: string
        email: string
    }
    book: BookRef
    borrowedAt: string
    dueAt: string
    returnedAt: string | status: LoanStatus
}
