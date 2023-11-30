"use client"

import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent, generateHTML } from '@tiptap/react'
import { ReloadIcon } from "@radix-ui/react-icons"
import { Save } from 'lucide-react'

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import CustomBulletList from '@/app/components/editor/checklistBullet'

import { generateJSON } from '@tiptap/html'

import MenuBar from '@/app/components/editor/MenuBar'
import { Button } from '@/app/components/ui/button'
import { motion } from 'framer-motion'

interface EditorComponentProps {
    initialContent?: string,
    editable?: boolean,
    documentId: string 
}

const EditorComponent: React.FC<EditorComponentProps> = ({ 
    initialContent = '', 
    editable = false, 
    documentId 
}) => {    
    const [editorContent, setEditorContent] = useState({})
    const [isSaving, setIsSaving] = useState(false)
    const [hasChanges, setHasChanges] = useState(false)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Begin met typen...',
            }),
            TextStyle,
            Color,
            CustomBulletList,
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
            setHasChanges(true)
        },
    })

    useEffect(() => {
        if (initialContent) {
            editor?.commands.setContent(initialContent)
        }
    }, [initialContent, editor])

    // Make a post fetch request to secure API endpoint
    const handleSave = async () => {
        setIsSaving(true)
        try {
            const res = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(editorContent),
                headers: {
                    'Content-Type': 'application/json',
                    'Document-ID': documentId  // using the documentId prop
                },
            })
            // check for res.ok or other conditions here
            setHasChanges(false)
        } catch (error) {
            console.error('Failed to save:', error)
        } finally {
            setIsSaving(false)
        }
    }
    
      
    return (
        <motion.div  
            layout
            transition={{ type: "spring", ease: "easeInOut", duration: 0.1 }}
            className='relative flex flex-col min-w-[500px]'
        >
            {editable ? <MenuBar editor={editor} /> : null}
            <motion.div layout >
                <EditorContent editor={editor} />
            </motion.div>
    
            <div className="absolute flex justify-end bottom-0 right-0 -mb-14">
                {editable && hasChanges && (
                    isSaving ? 
                    <Button disabled size="lg">
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Opslaan
                    </Button> : 
                    <Button size="lg" onClick={handleSave}>
                        <Save className="mr-2 h-4 w-4" />
                        Opslaan
                    </Button>
                )}
            </div>
        </motion.div>
    )
}

export default EditorComponent
