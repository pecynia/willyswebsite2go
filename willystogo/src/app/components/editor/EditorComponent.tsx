"use client"

// EditorComponent.tsx
import React from 'react'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
  
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import MenuBar from '@/app/components/editor/MenuBar'

const extensions = [
  StarterKit
]

const content = `
  <p>Dit kan je aanpassen</p>
`

const EditorComponent: React.FC = () => {
  return (
    <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}>
    </EditorProvider>
    )
}

export default EditorComponent;
