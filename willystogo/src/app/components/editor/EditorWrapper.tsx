"use client"

import { useEffect, useState } from "react"
import EditorComponent from "@/app/components/editor/EditorComponent"
import { useSession } from 'next-auth/react'
import { generateHTML } from '@tiptap/html'
import { ReloadIcon } from "@radix-ui/react-icons"

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

// TODO: CONVERT TO SERVER COMPONENT
const EditorWrapper = ({documentId}: {documentId: string}) => {
    const { status, data: session } = useSession()
    const [fetchedContent, setFetchedContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const contentFromDb = await fetch('api/content', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Document-ID': documentId,
                },
            })
            const json = await contentFromDb.json()
            if (json && json.paragraphJson) {
                const contentAsHtml = generateHTML(json.paragraphJson, [
                    StarterKit,
                    TextStyle,
                    Color,
                ])
                setFetchedContent(contentAsHtml)
            }
        }

        fetchData()
    }, [])

    // Wait until the session is loaded (not in "loading" status)
    if (status === "loading") {
        return <div className="mt-10 h-36 flex items-center justify-center p-2">
            <ReloadIcon className="w-4 h-4 animate-spin" />
        </div>
    }

    return (
        <EditorComponent documentId={documentId} editable={session ? true : false} initialContent={fetchedContent} />
    )
}

export default EditorWrapper

