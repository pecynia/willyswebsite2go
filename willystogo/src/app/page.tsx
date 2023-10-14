import { Send } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

export default function Home() {
  return (
    <div className="parallax space-y-10 pb-10">
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        <div className="rounded-lg relative overflow-hidden bg-cover bg-center backdrop-blur-md bg-white bg-opacity-20 h-full w-full flex flex-col justify-start items-center text-center gap-y-8">
          <div className="text-4xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black bg-secondary/60 p-6 rounded-lg">
            <h2 className="pb-2 font-youngSerif">Indonesische Catering</h2>
            <Button variant="default" size="lg" className="w-full py-6 text-xl hover:bg-primary">
              <Send className="mr-2" />
              <span className="textWithAnimatedUnderline">Bereik Ons</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
