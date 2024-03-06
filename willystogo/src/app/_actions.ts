'use server'
import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'
import { getParagraphJson, saveParagraphJson } from '@/app/utils/db'
import { JSONContent } from '@tiptap/react'
import { revalidatePath } from 'next/cache'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, phone, eventDate, companyName, message } = result.data
    try {
      const emailData = await resend.emails.send({
        from: 'Willys2Go <contact@willys2go.nl>',
        to: ['willys2go@gmail.com', 'yannicktitalepta@hotmail.com'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${eventDate}\nCompany Name: ${companyName}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, phone, eventDate, companyName, message })
      })
      return { success: true, data: emailData }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

// ------------------ CONTENT ACTIONS ------------------

// Server action
export async function getParagraph(id: string) {
  try {
    const result = await getParagraphJson(id)
    if (result) {
      return { success: true, data: result }
    } else {
      return { success: false, error: "No data found" }
    }
  } catch (error) {
    console.error("Error in getParagraph:", error)
    return { success: false, error: "Server error" }
  }
}

// Save paragraph to database
export async function saveParagraph(documentId: string, paragraphJson: string, path: string) {
  const paragraph = JSON.parse(paragraphJson) as JSONContent

  try {
    const result = await saveParagraphJson(documentId, paragraph)

    if (result.acknowledged) {
      console.log("Path: ", path)
      revalidatePath(path)
    }

    return { success: true, data: result }
  } catch (error) {
    console.error("Error in saveParagraph:", error)
    return { success: false, error: "Server error" }
  }
}

