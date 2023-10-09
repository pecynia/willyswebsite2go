"use client"

import { useSession } from 'next-auth/react'

const Profile = () => {
    const { status, data: session } = useSession()

    return (
        <section className='flex justify-center py-5  min-h-screen bg-gray-100'>
            <div className='bg-white p-12 rounded-lg shadow-lg w-2/3'>
                <h1 className='text-4xl font-bold '>
                    Welcome
                </h1>
                <hr className='my-6 border-t border-gray-300'/>
                <div>
                    <h2 className='text-2xl font-medium'>
                        You are logged in as:
                    </h2>
                    <p className='mt-4 text-gray-700 text-xl'>
                        {session?.user?.name}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Profile;
