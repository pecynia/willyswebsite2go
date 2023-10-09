import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const Profile = async () => {

    const session = await getServerSession(authOptions)

    // if (!session) {
    //     redirect("/api/auth/signin?callbackUrl=/admin")
    // }

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>
                    This is a <span className='text-emerald-500'>server-side</span>{' '}
                    protected page
                </h1>
                <h2 className='mt-4 font-medium'>You are logged in as:</h2>
                <p className='mt-4'>{session?.user?.name}</p>
            </div>
        </section>
        )
    }
    
export default Profile