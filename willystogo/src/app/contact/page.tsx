import { LoaderIcon } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-96 relative'>
        <h1 className='text-3xl'>Zet de domeinnaam eerst over</h1>
        <LoaderIcon className='w-4 h-4 animate-spin mt-4 ease-in-out' />
    </div>
  )
}

export default page