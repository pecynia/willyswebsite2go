import {useCurrentEditor} from '@tiptap/react'
import { Button } from '@/app/components/ui/button'

const MenuBar = () => {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
  
    return (
      <>
        <Button variant='outline' 
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive('bold') ? 'bg-secondary text-white' : ''}
        >
            bold
        </Button>

        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'bg-secondary' : ''}
        >
          italic
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'bg-secondary' : ''}
        >
          strike
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'bg-secondary' : ''}
        >
          code
        </Button>
        <Button variant='outline'  onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </Button>
        <Button variant='outline'  onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-secondary' : ''}
        >
          paragraph
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-secondary' : ''}
        >
          h1
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-secondary' : ''}
        >
          h2
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-secondary' : ''}
        >
          h3
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'bg-secondary' : ''}
        >
          h4
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'bg-secondary' : ''}
        >
          h5
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'bg-secondary' : ''}
        >
          h6
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-secondary' : ''}
        >
          bullet list
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-secondary' : ''}
        >
          ordered list
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-secondary' : ''}
        >
          code block
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-secondary' : ''}
        >
          blockquote
        </Button>
        <Button variant='outline'  onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal rule
        </Button >
        <Button variant='outline'  onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          undo
        </Button>
        <Button variant='outline' 
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          redo
        </Button>
      </>
    )
}

export default MenuBar