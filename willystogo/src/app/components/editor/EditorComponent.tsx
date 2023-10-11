"use client"

import React from 'react'
import { useEditor, EditorContent, Editor  } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
  
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

import MenuBar from '@/app/components/editor/MenuBar'


const EditorComponent = ( { editable = false }: { editable?: boolean } ) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Document,
            Paragraph,
            Text,
            TextStyle,
            Color,
            ListItem,
            BulletList
        ],
        content: '<p>Hello World! 🌎️</p>',
        editorProps: {
            attributes: {
              class: 'prose prose-gray',
            },
          },
        editable: editable
      })

    return (
        <div className='flex flex-col'>
            { editable ? <MenuBar editor={editor} /> : null }
            <div className='border-4 focus:border-primary/20 rounded-2xl px-2'>
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default EditorComponent;
