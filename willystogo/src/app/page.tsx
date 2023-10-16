import LandingImg from '@/app/components/landingImg';
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo';
import EditorWrapper from '@/app/components/editor/EditorWrapper';

export default function Home() {
  return (
    <div className='' style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />

      <div className='-mt-10 -mb-1 md:-mt-24 lg:-mt-42 z-20 overflow-hidden'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--svg)" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,208C672,192,768,192,864,197.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
      </div>

      <ParallaxScrollInfo />

      <div className='z-20 bg-secondary'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--svg" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,149.3C672,139,768,85,864,96C960,107,1056,181,1152,229.3C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>

      <div className='h-screen bg-secondary flex justify-center items-center'>
        <EditorWrapper documentId="test"/>
      </div>
    </div>
  );
}
