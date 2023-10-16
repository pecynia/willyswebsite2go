import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"
import { saveParagraphJson, getParagraphJson } from "@/app/utils/db"

// Save the paragraph JSON to the database
export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const paragraphJson = await request.json()

    // Retrieve the document ID from headers
    const documentId = request.headers.get('document-id')

    if (!documentId) {
        return new Response(JSON.stringify({ error: "Document-ID header is required" }), {
            headers: { "Content-Type": "application/json" },
            status: 400
        })
    }

    const result = await saveParagraphJson(documentId, paragraphJson)

    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    })
}
