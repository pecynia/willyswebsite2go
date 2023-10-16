"use client"

import React, { useState, useEffect } from 'react';
import Container from '@/app/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { Button } from '@/app/components/ui/button';
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

  const headerClass = visible ? 'top-0 transition-all duration-400 ease-out bg-primary z-50' : 'bg-primary -top-24 transition-all duration-400 ease-out z-50';

  return (
    <header className={`sticky w-full p-8 flex justify-center ${headerClass}`}>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-6 items-center justify-between w-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-youngSerif text-white'>YanWilly</h1>
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
                    className='block px-4 py-1 text-3xl font-youngSerif'
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className=''>
            <nav className='mx-6 items-center space-x-4 lg:space-x-6 hidden md:block'>
              {routes.map((route, i) => (
                <Button key={i}>
                  <Link 
                    key={i}
                    href={route.href}
                    className='transition-colors text-base'
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
        </div>
      </Container>
    </header>
  );
}

export default Header;
