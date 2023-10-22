"use client"

import React, { useEffect, useState } from 'react'
import { useEditor, EditorContent, generateHTML } from '@tiptap/react'
import { ReloadIcon } from "@radix-ui/react-icons"
import { Save } from 'lucide-react'

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import Dropcursor from '@tiptap/extension-dropcursor'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import CustomBulletList from '@/app/components/editor/checklistBullet'


import { generateJSON } from '@tiptap/html'


import MenuBar from '@/app/components/editor/MenuBar'
import { Button } from '@/app/components/ui/button'

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
    const [editorContent, setEditorContent] = useState({});
    const [isSaving, setIsSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Begin met typen...',
            }),
            TextStyle,
            Dropcursor,
            Color,
            CustomBulletList,
            ListItem,
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose max-w-none w-full',
            },
        },
        editable: editable,
        onUpdate: ({ editor }) => {
            const contentJson = generateJSON(editor.getHTML(), [StarterKit, TextStyle, Color]);
            setEditorContent(contentJson);
            setHasChanges(true);
        },
    })

    useEffect(() => {
        if (initialContent) {
            editor?.commands.setContent(initialContent)
        }
    }, [initialContent, editor])

    // Make a post fetch request to our secure API endpoint
    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(editorContent),
                headers: {
                    'Content-Type': 'application/json',
                    'Document-ID': documentId  // using the documentId prop
                },
            });
            // you might want to check for res.ok or other conditions here
            setHasChanges(false);
        } catch (error) {
            console.error('Failed to save:', error);
        } finally {
            setIsSaving(false);
        }
    };
    
      
    return (
        <div className='relative flex flex-col -mb-10'>
            {editable ? <MenuBar editor={editor} /> : null}
            <EditorContent editor={editor} />

            <div className="flex justify-end mt-5">
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
        </div>
    )
}

export default EditorComponent
