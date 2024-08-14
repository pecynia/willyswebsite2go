"use client"

import { useSession } from 'next-auth/react'
import Loading from './loading';
import Container from '@/app/components/ui/container';

const Profile = () => {
    const { status, data: session } = useSession()


    if (status === 'loading') {
        return <Loading />
    }

    return (
        <Container>
            <div className='bg-white rounded-lg shadow-lg p-12 mt-24 h-screen w-full max-w-4xl mx-auto'>
                <h1 className='text-3xl font-youngSerif mb-6'>Welkom {session?.user?.name}</h1>
                <hr className='mb-6' />
    
                <p>
                    Dit is een plek waar uitgebreide functionaliteit te vinden zou zijn. Voor nu kan je de teksten aanpassen op de website.
                </p>
            </div>
        </Container>
    )
    
}

export default Profile;
