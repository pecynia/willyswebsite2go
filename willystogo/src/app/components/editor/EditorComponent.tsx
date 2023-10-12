"use client"

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
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

import MenuBar from '@/app/components/editor/MenuBar'

const EditorComponent = ( { editable = false }: { editable?: boolean } ) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Begin met typen...',
            }),
            Document,
            Paragraph,
            Text,
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
        editable: editable
      })

    return (
        <div className='flex flex-col'>
            { editable ? <MenuBar editor={editor} /> : null }
            <div className='border-2 border-gray-300 border-opacity-50 rounded-xl'>
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default EditorComponent;
