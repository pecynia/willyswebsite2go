"use client"

import { useSession } from "next-auth/react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TiptapComponent() {
  const { data: session } = useSession();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start met typen</p>",
    editable: !!session,
  });

  return <EditorContent editor={editor} />;
}
