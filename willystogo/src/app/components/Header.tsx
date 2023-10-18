"use client"

import React, { useState, useEffect } from 'react';
import Container from '@/app/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { AdminModeWithLogout } from "@/app/components/admin/headerButton";
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Menu } from 'lucide-react';


const Header = () => {
  const { data: session } = useSession();

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/satebar",
      label: "Satebar",
    },
  ];

  const [position, setPosition] = useState(typeof window !== 'undefined' ? window.scrollY : 0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerClass = visible ? 'top-0 transition-all duration-400 ease-out z-50' : '-top-20 transition-all duration-400 ease-out z-50';

  return (
    <header className={`sticky w-full p-4 pr-0 flex justify-center ${headerClass} font-youngSerif`}>
      <Container>
        <div className='relative sm:px-6 lg:px-8 flex h-6 items-center justify-between w-full'>
          
          {/* Logo */}
          <Link href='/' className=''>
            <div className='flex items-center'>
              <h1 className='text-3xl font-youngSerif text-white'>YanWilly</h1>
            </div>
            {/* <Image
              src='/logo.png'
              alt='Logo'
              width={160}
              height={100}
              priority
            /> */}
          </Link>
          
          {/* Navigation and Session Content */}
          <div className='flex items-center'>
            
            {/* Mobile Navigation (SheetTrigger) */}
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden invert mr-4" />
              </SheetTrigger>
              <SheetContent side="right" className='w-[300px] sm:w-[400px] font-youngSerif text-primary'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route, i) => (
                    <Link 
                      key={i}
                      href={route.href}
                      className='block px-4 py-1 text-3xl'
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Session Content */}
            {session && (
              <div className='flex items-center'>
                <AdminModeWithLogout />
              </div>
            )}

            {/* Desktop Navigation */}
            <nav className='bg-primary header-shadow-right-light px-10 items-center space-x-4 lg:space-x-6 hidden md:block mt-2 pt-2 pb-1'>
              {routes.map((route, i) => (
                <button key={i}>
                  <Link 
                    key={i}
                    href={route.href}
                    className='transition-colors px-4'
                  >
                    <span className='textWithAnimatedUnderline text-secondary text-xl font-raleway'>
                      {route.label}
                    </span>
                  </Link>
                </button>
              ))}
            </nav>
            

          </div> {/* End of Navigation and Session Content */}
          
        </div>
      </Container>
    </header>
  );
}  

export default Header;
