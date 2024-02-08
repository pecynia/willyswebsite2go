"use client"

// Import statements remain the same
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useSession } from 'next-auth/react'
import { generateHTML } from '@tiptap/html'
import { ReloadIcon } from "@radix-ui/react-icons"

import EditorComponent from "@/app/components/editor/EditorComponent"
import StarterKit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import { getParagraph } from "@/app/_actions"

interface EditorWrapperProps {
    documentId: string
}

const EditorClient = ({ documentId }: EditorWrapperProps) => {
    const { status, data: session } = useSession();
    const [fetchedContent, setFetchedContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await getParagraph(documentId);
            if (response && response.success) {
                const contentAsHtml = generateHTML(response.data?.paragraphJson, [
                    StarterKit,
                    TextStyle,
                    Color,
                ]);
                setFetchedContent(contentAsHtml);
            } else {
                console.error('Error fetching content:', response?.error);
            }
        };

        fetchData()
    }, [documentId])

    if (status === "loading") {
        return <div className="flex justify-center items-center mt-5 w-full h-full">
            <ReloadIcon className="w-4 h-4 animate-spin" />
        </div>
    }

    return (
        <motion.div layout className="w-full">
            <EditorComponent
                documentId={documentId}
                editable={!!session}
                initialContent={fetchedContent}
            />
        </motion.div>
    );
};

export default EditorClient;
