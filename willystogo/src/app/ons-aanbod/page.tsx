import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'

function page() {
  return (
    <div>
      <div className='px-16 mt-10'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div>
      <TextOneImage documentId="buffetten" image="/imgs/cocktails.jpg" imagePosition="left" theme="dark" verticalPosition="below" />
      <TextThreeImages documentId="satebar" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/batik_2.pngcocktails.jpg']} imagesPosition='right' theme="dark"/>
      <div className='sticky pt-10'>
        <TextOneImage documentId="eigen_event" image="/imgs/cocktails.jpg" imagePosition="left" theme="dark" />
      </div>
    </div>
  )
}

export default page