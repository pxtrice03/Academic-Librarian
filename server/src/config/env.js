import 'dotenv/config'

export const env = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI,
    clientUrl: process.env.CLIENT_URL,
    adminPassword: process.env.ADMIN_PASSWORD
    rules: {
        loanDays: 14,
        maxActiveLoans: 3
    }
}

if(!env.mongoUri) {
    throw new Error("MONGO_URI est requis dans le fichier .env")
}
