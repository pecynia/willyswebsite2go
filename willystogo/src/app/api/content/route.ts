import { getParagraphJson } from '@/app/utils/db';
import { MongoClient, ServerApiVersion, Db } from 'mongodb'
import { NextResponse } from 'next/server';

const uri: string | undefined = process.env.MONGODB_URI;
if (!uri) throw new Error("The MONGODB_URI environment variable must be defined.");

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let cachedDb: Db | undefined;

// Function to connect to the database
async function connectToDatabase(): Promise<Db> {
    if (cachedDb) {
        return cachedDb;
    }

    // Connect the client to the server
    await client.connect();

    const dbName: string | undefined = process.env.MONGODB_DB;
    if (!dbName) throw new Error("The MONGODB_DB environment variable must be defined.");

    const db = client.db(dbName);
    cachedDb = db;
    return db;
}

// Get a paragraph 
export async function GET(request: Request) {
    await connectToDatabase();

    const documentId = request.headers.get("Document-ID");
    if (!documentId) {
        return NextResponse.json({ error: "Document-ID header is missing." }, { status: 400 });
    }

    const result = await getParagraphJson(documentId);
    console.log("Get request:", result);

    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    });
}

// import { NextResponse } from "next/server";
// import { getParagraphJson } from "@/app/utils/db";

// // Get a paragraph 
// export async function GET(request: Request) {
//     const documentId = request.headers.get("Document-ID");

//     if (!documentId) {
//         return NextResponse.json({ error: "Document-ID header is missing." }, { status: 400 });
//     }

//     const result = await getParagraphJson(documentId);

//     console.log("Get request:", result);

//     return new Response(JSON.stringify(result), {
//         headers: { "Content-Type": "application/json" },
//     });
// }

