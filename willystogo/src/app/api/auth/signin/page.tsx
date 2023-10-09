// /api/auth/signin/page.tsx
"use client"

import { NextPage } from "next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

let validationSchema = yup.object().shape({
  password: yup.string()
      .required('Wachtwoord is vereist')
      .min(6, 'Wachtwoord moet minimaal 6 karakters bevatten')
      .max(12, 'Wachtwoord mag maximaal 32 karakters bevatten')
})


const SignInPage: NextPage = () => {
  const router = useRouter()

  const { setError, register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema)
  })

  const handleFormSubmit = async (data: { password: string }) => {
      const result = await signIn("credentials", {
          redirect: false,
          password: data.password
      })

      if (result?.error) {
          setError('password', { message: "Incorrect wachtwoord.", type: "error" })
      } else {
          router.push('/admin')
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
                  <form onSubmit={handleSubmit(handleFormSubmit)}>
                      <div className='space-y-2'>
                          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                              Wachtwoord
                          </label>
                          <input
                              id='password'
                              type='password'
                              required
                              className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md'
                              placeholder='Vul je wachtwoord in'
                              {...register('password')}
                              autoFocus
                          />
                          {errors['password'] ? (
                              <div className='text-sm text-red-500'>{errors['password'].message}</div>
                          ) : null}
                      </div>
                      <button
                          type='submit'
                          className='mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
                      >
                          Log In
                      </button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default SignInPage