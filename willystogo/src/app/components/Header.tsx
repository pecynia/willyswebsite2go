"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { AdminModeWithLogout } from "@/app/components/admin/headerButton"

const Header = () => {
  
  const { data: session } = useSession()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [session])

  return (
    <header className='flex h-24 flex-col justify-center bg-primary-light'>
      <nav className='container px-4 md:px-8 lg:px-16'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500 w-full'>
          <li>
            <Link href='/'>
                <Image 
                    src='/logo.png' 
                    alt='Logo'
                    width={200}
                    height={200}
                />
            </Link>
          </li>

          {/* Display "Admin mode" when logged in */}
          {isLoggedIn && (
            <AdminModeWithLogout />
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
