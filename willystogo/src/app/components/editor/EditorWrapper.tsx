"use client"

import { useEffect, useState } from "react"
import EditorComponent from "@/app/components/editor/EditorComponent"
import { useSession } from 'next-auth/react'
import { generateHTML } from '@tiptap/html'
import { ReloadIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

// TODO: CONVERT TO SERVER COMPONENT (so we don't fetch everytime)
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

    if (status === "loading") {
        return <div className="flex justify-center items-center w-full h-full">
            <ReloadIcon className="w-4 h-4 animate-spin" />
        </div>
    }

    return (
        <motion.div layout>
            <EditorComponent documentId={documentId} editable={session ? true : false} initialContent={fetchedContent} />
        </motion.div>
    )
}

export default EditorWrapper

