"use client"

import React from 'react'
import EditorWrapper from '@/app/components/editor/EditorWrapper';

export default function TextLeftImgRight({documentId, images}: {documentId: string, images: string[]}) {
  return (
    <div>
        <div className='mt-1 pl-24h-[500px] flex justify-start p-16 items-center'>
            <div className='header-shadow-left w-2/5 h-full bg-secondary flex px-10 pt-4 border-2'>
                <EditorWrapper documentId={documentId} />
            </div>
        </div>
    </div>
  )
}
