"use client"

import { useState } from 'react';
import { useSession } from 'next-auth/react'
import { Button } from '@/app/components/ui/button';
import ThemeColorDialog from '@/app/components/admin/themeColors';
import { ReloadIcon } from "@radix-ui/react-icons"
import Loading from './loading';
import Container from '../components/ui/container';

const Profile = () => {
    const { status, data: session } = useSession()


    if (status === 'loading') {
        return <Loading />
    }

    return (
        <Container>
            <div className='bg-white rounded-lg shadow-lg p-12 mt-12 w-full max-w-4xl mx-auto'>
                <h1 className='text-3xl font-youngSerif mb-6'>Welkom {session?.user?.name}</h1>
                <hr className='mb-6' />
    
                {/* Settings */}
                <div className='mb-8'>
                    <h2 className='font-bold text-2xl mb-4'>Instellingen</h2>
                    {/* ... other settings can go here ... */}
                </div>
    
                {/* Theme Colors */}
                <div className='mb-8 flex flex-col'>
                    <h2 className='font-bold text-2xl mb-4'>Thema kleuren</h2>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex space-x-4'>
                            <h1 className=''>  
                                Primary: 
                            </h1>
                            <ThemeColorDialog colorName='primary' />
                        </div>
                        <div className='flex space-x-4'>
                            <h1 className=''>
                                Background:
                            </h1>
                            <ThemeColorDialog colorName='background' />
                        </div>
                        <div className='flex space-x-4'>
                            <h1 className=''>
                                Secondary:
                            </h1>
                            <ThemeColorDialog colorName='secondary' />
                        </div>
                    </div>
                </div>
    
                {/* Additional sections can go here */}
            </div>
        </Container>
    )
    
}

export default Profile;
