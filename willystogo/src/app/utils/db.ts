import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'

// -------------------- DATABASE --------------------

// MongoDB Atlas connection URI
const uri: string | undefined = process.env.MONGODB_URI
if (!uri) throw new Error("The MONGODB_URI environment variable must be defined.")

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

let cachedDb: any = null

// Function to connect to the database
async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb
    }

    // Connect the client to the server
    await client.connect()

    const dbName: string | undefined = process.env.MONGODB_DB
    if (!dbName) throw new Error("The MONGODB_DB environment variable must be defined.")

    const db = client.db(dbName)
    cachedDb = db
    return db
}