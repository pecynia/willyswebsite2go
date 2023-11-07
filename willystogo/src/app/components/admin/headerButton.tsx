import { signOut } from "next-auth/react"
import { Button } from "@/app/components/ui/button"
import Link from 'next/link'
import { LogOut, Settings, Loader2 } from 'lucide-react'

export const AdminModeWithLogout = () => {
  return (
    <div className="flex items-center bg-background font-light pl-4 mt-2 mr-2 rounded-lg">
      <div className="text-black">Editing</div>

      <Link href="/admin">
        <Button 
          size="icon"
          aria-label="Settings"
          className="m-1 hover:bg-secondary-foreground hover:text-primary">
            <span className="sr-only">Settings</span>
            <Settings className="h-5 w-5 rotate-0 scale-100 transition-all duration-100 transform" />
        </Button>
      </Link>


      <Button
        size="icon"
        aria-label="Logout"
        className="mr-1 hover:bg-secondary-foreground hover:text-primary"
        onClick={() => signOut()}>
          <span className="sr-only">Log Out</span>
          <LogOut className="h-5 w-5 rotate-0 scale-100 transition-all duration-100 transform" />
      </Button>
      
    </div>
  )
}
