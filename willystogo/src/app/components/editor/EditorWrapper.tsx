"use client"

import { useEffect, useState } from "react"
import EditorComponent from "@/app/components/editor/EditorComponent"
import { useSession } from 'next-auth/react'
import { generateHTML } from '@tiptap/html'
import { ReloadIcon } from "@radix-ui/react-icons"

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'


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
        return <div className="mt-5 flex items-center justify-center p-2">
            <ReloadIcon className="w-3 h-3 animate-spin" />
        </div>
    }

    return (
        <div className="">
            <EditorComponent documentId={documentId} editable={session ? true : false} initialContent={fetchedContent} />
        </div>
    )
}

export default EditorWrapper

