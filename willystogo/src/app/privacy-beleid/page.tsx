import React from 'react'
import EditorServer from "@/app/components/editor/EditorServer"


export default async function Page() {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <div className="relative mt-20 rounded-3xl w-4/5 sm:w-2/3 md:w-1/2 lg:min-w-[700px] pb-4 lg:py-10 px-6 lg:px-4 items-center">
                <EditorServer documentId='privacy-policy' />
            </div>
        </div>
    )
}
