import { Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <div className="flex justify-end space-x-4 space-y-10 pb-10 relative overflow-hidden h-1/2">
        <Image 
          className="absolute z-[-1] top-0 left-0 w-full h-full object-cover object-center"
          src="/imgs/landing_cta.png"
          alt="Willy's2Go Indonesische Catering"
          priority
          width={1920}
          height={1080}
        />
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden max-w-2xl w-3/4 md:w-3/4 lg:w-auto">
          <div className="rounded-3xl relative overflow-hidden bg-cover bg-center backdrop-blur-md bg-white bg-opacity-20 flex flex-col justify-start items-center text-center gap-y-8">
            <div className="text-4xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black bg-secondary/60 p-6 sm:p-8 lg:p-10 rounded-lg">
              <h2 className="pb-2 font-youngSerif">Indonesische Catering</h2>
              <Button variant="default" size="lg" className="w-full py-6 text-lg hover:bg-primary">
                <Send className="mr-2" />
                <span className="textWithAnimatedUnderline">Bereik Ons</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-4 h-screen'>
        
      </div>
    </div>
  );
}
