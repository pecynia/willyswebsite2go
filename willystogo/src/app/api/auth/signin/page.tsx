// /api/auth/signin/page.tsx
"use client"

import { NextPage } from "next"
import { signIn } from "next-auth/react"
import { FormEventHandler, useState } from "react"

const SignInPage: NextPage = () => {
  const [password, setPassword] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const result = await signIn("credentials", {
      redirect: false,
      password,
    })

    if (result!.error) {
      console.error(result!.error)
    } else {
      window.location.href = "/"
    }
  }

  return (
    <section className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight text-gray-900'>
            Log in bij het admin dashboard
          </h1>
        </div>
        <div className='sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py- shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Wachtwoord
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md'
                placeholder='Vul je wachtwoord in'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignInPage
