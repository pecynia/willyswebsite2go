import LandingImg from '@/app/components/landingImg';
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo';
import EditorWrapper from '@/app/components/editor/EditorWrapper';
import TextLeftImgRight from './components/TextLeftImgRight';

export default function Home() {
  return (
    <div className='' style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />

      <div className='pt-4 px-2 -mb-1 md:-mt-24 lg:-mt-42 z-20 overflow-hidden block sm:hidden bg-secondary rounded-t-3xl'>
        <EditorWrapper documentId="intro"/> 
      </div>
      <div className='h-16 -mt-10 overflow-hidden rounded-t-3xl'></div>

      <ParallaxScrollInfo />
      <TextLeftImgRight documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} />
      <div className='h-screen'/>

    </div>
    
  );
}
