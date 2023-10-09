import { signOut } from "next-auth/react"
import Image from 'next/image'

export const AdminModeWithLogout = () => {
  return (
    <div className="flex items-center bg-primary font-light rounded-lg pl-4">
      <div className="text-white">Edit mode</div>
      <button 
        className="ml-4 bg-primary-dark rounded-l-none rounded-r-lg px-2 py-1 transform transition-transform duration-300 hover:scale-105"
        onClick={() => signOut()}>
        <Image 
          src="/logout.svg" 
          style={{ 
            filter: "invert(1)", 
            transform: "scale(0.9)"        
          }}
          alt="Logout" 
          width={18} 
          height={24} 
        />
      </button>
    </div>
  )
}
