import React from 'react'
import { ReloadIcon } from "@radix-ui/react-icons"


const page = () => {
  return (
    <div className="flex justify-center items-center h-screen font-youngSerif text-5xl">
      In ontwikkeling...
      <ReloadIcon className="ml-4 mr-2 h-8 w-8 animate-spin" />
    </div>
  )
}

export default page