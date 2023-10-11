// EditorComponent.tsx
import React from 'react'
import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
  
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

import MenuBar from '@/app/components/editor/MenuBar'

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit,
  Document,
  Paragraph,
  Text,
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
