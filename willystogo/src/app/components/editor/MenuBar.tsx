import { useCurrentEditor } from '@tiptap/react'
import { Button } from '@/app/components/ui/button'
import { 
    Bold,
    Italic,
    Strikethrough,
    Code2,
    RemoveFormatting,
 } from 'lucide-react'
import { Separator } from '@/app/components/ui/separator'

const MenuBar = () => {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
  
    return (
      <div className= 'flex h-5 items-center space-x-4 text-sm mb-4'>
        <div className='flex'>
            <Button variant='ghost' size='sm'
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
                <Bold className='w-4 h-4' />
            </Button>

            <Button variant='ghost' size='sm'
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
                <Italic className='w-4 h-4' />
            </Button>
            <Button variant='ghost' size='sm'
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
                <Strikethrough className='w-4 h-4' />
            </Button>
            <Button variant='ghost' size='sm'
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
                <Code2 className='w-4 h-4' />
            </Button>
        </div>
            <Separator orientation='vertical' />
        <div className='flex'>
            <Button variant='ghost' size='sm'
                onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <RemoveFormatting className='w-4 h-4' />
            </Button>
            <Button variant='ghost'  onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'bg-secondary' : ''}
                >
                paragraph
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-secondary' : ''}
                >
                h1
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'bg-secondary' : ''}
                >
                h2
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'bg-secondary' : ''}
                >
                h3
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'bg-secondary' : ''}
                >
                h4
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'bg-secondary' : ''}
                >
                h5
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'bg-secondary' : ''}
                >
                h6
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'bg-secondary' : ''}
                >
                bullet list
            </Button>
                <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'bg-secondary' : ''}
                >
                ordered list
            </Button>
                <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'bg-secondary' : ''}
                >
                code block
            </Button>
            <Button variant='ghost' 
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'bg-secondary' : ''}
                >
                blockquote
            </Button>
            <Button variant='ghost'  onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                horizontal rule
            </Button >
            <Button variant='ghost'  onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </Button>
            <Button variant='ghost' 
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
            <Button variant='ghost' 
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
        </div>
      </div>
    )
}

export default MenuBar