import React from 'react'
import EditorWrapper from '@/app/components/editor/EditorWrapper'


function SmallEditor({documentId}: {documentId: string}) {
  return (
    <div>
        <div className='pt-4 px-2 -mb-1 -mt-20 md:-mt-24 lg:-mt-42 z-20 overflow-hidden block md:hidden bg-secondary'>
            <EditorWrapper documentId="intro"/> 
      </div>
    </div>
  )
}

export default SmallEditor