import LandingImg from '@/app/components/landingImg';
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo';
import EditorWrapper from '@/app/components/editor/EditorWrapper';
import TextLeftImgRight from './components/TextLeftImgRight';

export default function Home() {
  return (
    <div className='' style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />

      <div className='pt-4 px-2 -mb-1 -mt-20 md:-mt-24 lg:-mt-42 z-20 overflow-hidden block md:hidden bg-secondary'>
        <EditorWrapper documentId="intro"/> 
      </div>
      <div className='h-16 -mt-10 overflow-hidden'></div>

      <ParallaxScrollInfo />
      <TextLeftImgRight documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} />
      <div className='h-screen'/>

    </div>
    
  );
}
