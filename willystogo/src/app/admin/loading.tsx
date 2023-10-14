import { Skeleton } from "@/app/components/ui/skeleton"
import { ReloadIcon } from "@radix-ui/react-icons"


const Loading = () => {
  return (
    <section className='flex justify-center py-5 min-h-screen bg-gray-100'>
        <div className='bg-white p-12 rounded-lg shadow-lg w-2/3'>
            <div className="pt-40 flex items-center justify-center">
                <ReloadIcon className="w-6 h-6 animate-spin" />
            </div>
        </div>
    </section>
  )
}

export default Loading