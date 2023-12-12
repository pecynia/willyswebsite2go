"use client"

import React, { useState, useEffect } from 'react'
import Container from '@/app/components/ui/container'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { AdminModeWithLogout } from "@/app/components/admin/headerButton"
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet'
import { Menu } from 'lucide-react'

import { routes } from '@/dictionaries/routes'

const Header = () => {
  const { data: session } = useSession()

  const [position, setPosition] = useState(typeof window !== 'undefined' ? window.scrollY : 0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY
      setVisible(position > moving)
      setPosition(moving)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const pathname = usePathname()

  const headerClass = visible ? 'top-0 transition-all duration-400 ease-out z-50' : '-top-28 lg:top-0 transition-all duration-400 ease-out z-50'

  const [open, setOpen] = useState(false)

  const closeSheet = () => setOpen(false);


  return (
    <header className={`fixed w-full p-4 pr-0 flex justify-center ${headerClass} font-youngSerif`}>
      <Container>
        <div className='relative sm:px-6 lg:px-2 lg:pr-3 flex space-x-4 h-6 pt-8 items-center justify-between w-full'>
          <Link href='/'>
            <Image 
              src='/logo.png'
              alt='Logo'
              width={200}
              height={200}
              priority
            />
          </Link>
          <div className='flex items-center'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <div className='lg:hidden bg-primary rounded-full mr-4 p-2 cursor-pointer'>
                  <Menu className="h-6 lg:hidden invert" />
                </div>
              </SheetTrigger>
              <SheetContent side="top" className='w-full font-youngSerif text-center text-primary'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route, i) => ( route.includeInHeader &&
                    <Link 
                      key={i}
                      href={route.href}
                      onClick={closeSheet}
                      className='block px-4 py-1 text-xl'
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            {session && (
              <div className='flex items-center'>
                <AdminModeWithLogout />
              </div>
            )}
            <nav className='bg-primary px-5 items-center hidden lg:block mt-2 pt-2 pb-1'>
              {routes.map((route, i) => ( route.includeInHeader &&
                <button key={i}>
                  <Link 
                    key={i}
                    href={route.href}
                    className='transition-colors px-4'
                  >
                    <span className={`textWithAnimatedUnderline text-secondary text-sm font-raleway ${pathname === route.href ? 'textWithUnderline' : ''}`}>
                      {route.label}
                    </span>
                  </Link>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}  

export default Header
