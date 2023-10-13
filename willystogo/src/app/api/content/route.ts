
import { NextResponse } from "next/server"
import { getParagraphJson } from "@/app/utils/db"

// Get a paragraph 
export async function GET(request: Request) {
    const result = await getParagraphJson("someUniqueId")

    console.log("Get request:", result)

    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    })
}