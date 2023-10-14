"use client"

import React from 'react'
import Container from '@/app/components/ui/container'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { Button } from '@/app/components/ui/button'
import { AdminModeWithLogout } from "@/app/components/admin/headerButton"
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet'
import { Menu } from 'lucide-react'


const Header = () => {

  const { data: session } = useSession()  

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/test",
      label: "Test",
    },
  ]

  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
          <div className='flex items-center'>
            <Link href='/'>
                <Image 
                    src='/logo.png' 
                    alt='Logo'
                    width={200}
                    height={200}
                    priority
                />
            </Link>
          </div>
          <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="right" className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route, i) => (
                    <Link 
                      key={i}
                      href={route.href}
                      className='block px-2 py-1 text-lg'
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          <nav className='mx-6 items-center space-x-4 lg:space-x-6 hidden md:block'>
            {routes.map((route, i) => (
              <Button variant="ghost">
                <Link 
                  key={i}
                  href={route.href}
                  className='text-sm font-medium transition-colors'
                >
                  <span className='textWithAnimatedUnderline'>
                    {route.label}
                  </span>
                </Link>
              </Button>
            ))}
          </nav>
          
            {session && (
              <div className='flex items-center'>
                <AdminModeWithLogout />
              </div>
            )}
        </div>
      </Container>
    </header>
  )
}

export default Header