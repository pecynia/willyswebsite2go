'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
      toast.success('Email verzonden!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Oeps! Er ging iets mis.')
  }

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className='mx-auto flex flex-1 flex-col gap-4'
    >
      <h1 className='text-3xl text-center font-youngSerif py-2'>Bereik Ons</h1>
      {/* Name Input */}
      <input {...register('name')} placeholder='Naam*' className='w-1/2 rounded-lg p-2' />
      {errors.name?.message && <p className='ml-1 mt-1 text-sm text-red-400'>{errors.name.message}</p>}
      
      {/* Email Input */}
      <input {...register('email')} placeholder='Email*' className='w-1/2 rounded-lg p-2' />
      {errors.email?.message && <p className='ml-1 mt-1 text-sm text-red-400'>{errors.email.message}</p>}

      {/* Phone Number Input */}
      <input {...register('phone')} placeholder='Telefoonnummer*' className='w-1/2 rounded-lg p-2' />
      {errors.phone?.message && <p className='ml-1 mt-1 text-sm text-red-400'>{errors.phone.message}</p>}

      {/* Event Date Input */}
      <input {...register('eventDate')} placeholder='Datum gepland evenement (optioneel)' className='w-full rounded-lg p-2' />
      {/* No validation error for optional field */}
      
      {/* Company Name Input */}
      <input {...register('companyName')} placeholder='Bedrijfsnaam (optioneel)' className='w-full rounded-lg p-2' />
      {/* No validation error for optional field */}
      
      {/* Message Input */}
      <textarea {...register('message')} rows={5} placeholder='Bericht*' className='w-full rounded-lg p-2' />
      {errors.message?.message && <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>}

      {/* Submit Button */}
      <button disabled={isSubmitting} className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'>
        {isSubmitting ? 'Verzenden...' : 'Verzend'}
      </button>
    </form>
  )
}