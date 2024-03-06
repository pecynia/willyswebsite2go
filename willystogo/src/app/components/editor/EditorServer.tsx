import { getParagraphJson } from '@/app/utils/db'

import React from 'react'
import EditorContent from '@/app/components/editor/EditorContent'
import OpenEditorButton from '@/app/components/editor/OpenEditorButton'
import { JSONContent } from '@tiptap/react'

type Reponse = {
    _id: string
    paragraphJson: JSONContent
} | null


async function EditorServer({ documentId, className }: { documentId: string, className?: string }) {

    const result = await getParagraphJson(documentId) as Reponse

    // Check if result is null and handle it
    if (!result) {
        console.error(`No data found for documentId: ${documentId}`)
    }

    return (
        <div className="relative group">
            <EditorContent result={result} className={className} />
            <OpenEditorButton  documentId={documentId} />
        </div>
    )
}

export default EditorServer