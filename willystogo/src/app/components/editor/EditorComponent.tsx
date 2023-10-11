"use client"

import React from 'react'
import { useEditor, EditorContent  } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
  
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

import MenuBar from '@/app/components/editor/MenuBar'



const EditorComponent = () => {
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
      })

    return (
        <div className='flex flex-col'>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>

    )
}

export default EditorComponent;
