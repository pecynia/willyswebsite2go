"use client"

import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent, generateHTML } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Placeholder from '@tiptap/extension-placeholder'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

import { generateJSON } from '@tiptap/html'


import MenuBar from '@/app/components/editor/MenuBar'
import { Button } from '@/app/components/ui/button'

// const EditorComponent = ( { editable = false }: { editable?: boolean } ) => {
//     const editor = useEditor({
//         extensions: [
//             StarterKit,
//             Placeholder.configure({
//                 placeholder: 'Begin met typen...',
//             }),
//             Document,
//             Paragraph,
//             Text,
//             TextStyle,
//             Dropcursor,
            
//             Color,
//             ListItem,
//             BulletList,
//         ],
//         content: '',
//         editorProps: {
//             attributes: {
//               class: 'prose max-w-none w-full',
//             },
//           },
//         editable: editable
//       })

//     return (
//         <div className='flex flex-col'>
//             { editable ? <MenuBar editor={editor} /> : null }
//             <div className='border-2 border-gray-300 border-opacity-50 rounded-xl'>
//                 <EditorContent editor={editor} />
//             </div>
//         </div>
//     )
// }

const EditorComponent = ({ initialContent = '', editable = false }) => {
    const [editorContent, setEditorContent] = useState({})
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Begin met typen...',
            }),
            TextStyle,
            Dropcursor,
            
            Color,
            ListItem,
            BulletList,
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose max-w-none w-full',
            },
        },
        editable: editable,
        onUpdate: ({ editor }) => {
            const contentJson = generateJSON(editor.getHTML(), [StarterKit, TextStyle, Color])
            setEditorContent(contentJson)        
        },
    })
  
    useEffect(() => {
      if (initialContent) {
        // const initialContentJSON = JSON.parse(initialContent)
        // const contentAsHtml = generateHTML(initialContentJSON, [StarterKit, TextStyle, Color])
        editor?.commands.setContent(initialContent)
      }
    }, [initialContent])

    // Make a post fetch request to our secure API endpoint
    const handleSave = async () => {
        console.log("editorContentJson", editorContent)
        const res = await fetch('/api/content', {
            method: 'POST',
            body: JSON.stringify(editorContent),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await res.json()
        console.log("result:", json)
    }
      
    return (
        <div className='flex flex-col'>
            {editable ? <MenuBar editor={editor} /> : null}
            <div className=''>
                <EditorContent editor={editor} />
            </div>
            {editable ? <Button variant={"outline"} onClick={handleSave}>Save</Button> : null}
        </div>
    )
}


export default EditorComponent
