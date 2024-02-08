import { getParagraphJson } from '@/app/utils/db'

import React from 'react'
import EditorContent from '@/app/components/editor/EditorContent'
import OpenEditorButton from '@/app/components/editor/OpenEditorButton'
import { JSONContent } from '@tiptap/react'

type Reponse = {
    _id: string
    paragraphJson: JSONContent
} | null


async function fetchParagraph(documentId: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/content`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Document-ID': documentId,
                'api-key': process.env.ADMIN_PASSWORD!
            },
            next: {
                tags: [`fetch-paragraph-${documentId}`]
            },
            cache: 'no-cache'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        return response.json()
    }
    catch (error) {
        console.error("Error in fetchParagraph:", error)
        return null
    }
}

async function EditorServer({ documentId, className }: { documentId: string, className?: string }) {

    const result = await getParagraphJson(documentId) as Reponse
    // const result = await fetchParagraph(documentId, initialLocale) as Reponse

    // Check if result is null and handle it
    if (!result) {
        console.error(`No data found for documentId: ${documentId})`)
    }

    return (
        <div className="relative group">
            <EditorContent result={result} className={className} />
            <OpenEditorButton documentId={documentId} />
        </div>
    )
}

export default EditorServer