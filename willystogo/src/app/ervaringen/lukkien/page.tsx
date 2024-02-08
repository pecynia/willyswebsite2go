import AnimatedHeader from '@/app/components/AnimatedHeader'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import TextOneVideo from '@/app/components/TextOneVideo'
import React from 'react'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

function Page() {
  return (
    <div>
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Het verhaal van Lukkien" className='text-4xl' />
      </div>
      
      <div className='px-10'>
        <TextOneVideo videoId='8h8Vpfitn0g' imagePosition="right" theme="dark" verticalPosition='below'>
          <EditorServer documentId="lukkien-eisen" />
        </TextOneVideo>

      </div>

      <div className='px-10'>
        <TextOneVideo videoId='OjM1pOAtT4c' imagePosition="left" theme="dark" verticalPosition='below'>
          <EditorServer documentId="lukkien-quote" />
        </TextOneVideo>
      </div>

      <SpacerBig />


    </div>
  )
}

export default Page