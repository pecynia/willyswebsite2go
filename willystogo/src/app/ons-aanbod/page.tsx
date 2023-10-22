import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '../components/TextThreeImages'

function page() {
  return (
    <div>
      <div className='px-16 mt-10'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div>
      <TextOneImage documentId="buffetten" image="/imgs/batik_2.png" imagePosition="left" theme="dark" />
      <TextThreeImages documentId="satebar" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/batik_2.png']} imagesPosition='right'/>
      <div className='bg-primary sticky'>
        <TextOneImage documentId="eigen_event" image="/imgs/batik_2.png" imagePosition="left" theme="light" />
      </div>
      <div className='bg-secondary h-12'/>
    </div>
  )
}

export default page