import React from 'react'
import EditorWrapper from '@/app/components/editor/EditorWrapper'


function SmallEditor({documentId}: {documentId: string}) {
  return (
    <div>
        <div className='px-2 -mb-1 lg:-mt-42 z-20 overflow-hidden block lg:hidden bg-secondary'>
            <EditorWrapper documentId={documentId} />
      </div>
    </div>
  )
}

export default SmallEditor