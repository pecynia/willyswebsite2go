"use client"

import { useEffect, useState } from "react"
import EditorComponent from "@/app/components/editor/EditorComponent"
import { useSession } from 'next-auth/react'
import { generateHTML } from '@tiptap/html'

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'


const EditorWrapper = () => {
    const { status, data: session } = useSession()
    const [fetchedContent, setFetchedContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const contentFromDb = await fetch('api/content', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              const json = await contentFromDb.json()
              console.log("json", json)
              
              if (json && json.paragraphJson) {
                const contentAsHtml = generateHTML(json.paragraphJson, [
                  StarterKit,
                  TextStyle,
                  Color,
                ])
                console.log("contentAsHtml", contentAsHtml)
                setFetchedContent(contentAsHtml)
              }
              
        }

        fetchData()
    }, [])

    return (
        <div className="mt-5">
            <EditorComponent editable={session ? true : false} initialContent={fetchedContent} />
        </div>
    )
}

export default EditorWrapper
