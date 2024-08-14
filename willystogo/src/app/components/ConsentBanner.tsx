'use client'

import { useState, useEffect } from 'react'
import { setConsent } from '../../../gtag'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

type ConsentBannerProps = {
    onConsentChange: (consent: boolean | null) => void
    children: React.ReactNode
}

const consentTexts = {
    en: {
        accept: "Accept",
        decline: "Decline",
        moreinfo: "More Information"
    },
    de: {
        accept: "Akzeptieren",
        decline: "Ablehnen",
        moreinfo: "Mehr Informationen"
    },
    nl: {
        accept: "Accepteer",
        decline: "Nee, bedankt",
        moreinfo: "Meer informatie"
    }
}

const ConsentBanner = ({ onConsentChange, children }: ConsentBannerProps) => {
    const [consent, setConsentState] = useState<boolean | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const savedConsent = localStorage.getItem('ga_consent')
        if (savedConsent !== null) {
            const parsedConsent = JSON.parse(savedConsent)
            setConsentState(parsedConsent)
            setConsent(parsedConsent)
            onConsentChange(parsedConsent)
        }
    }, [onConsentChange])

    const handleAccept = () => {
        setConsentState(true)
        setConsent(true)
        localStorage.setItem('ga_consent', 'true')
        onConsentChange(true)
    }

    const handleDecline = () => {
        setConsentState(false)
        setConsent(false)
        localStorage.setItem('ga_consent', 'false')
        onConsentChange(false)
    }

    if (!isClient || consent !== null) {
        return null
    }

    const texts = consentTexts['nl']

    return (
        <div className="fixed bottom-4 left-10 z-20 header-shadow-left bg-secondary-foreground p-8 w-11/12 md:w-2/5">
            <div className='-mt-4'>
                {children}
            </div>
            <Button className='w-full mb-2 rounded-none' onClick={handleAccept}>{texts.accept}</Button>
            <div className='flex justify-between space-x-2'>
                <Button variant='outline' className='w-1/2 rounded-none' onClick={handleDecline}>{texts.decline}</Button>
                <Button variant='outline' className='w-1/2 rounded-none'>
                    <Link href={`/cookie-beleid`}>
                        {texts.moreinfo}
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ConsentBanner
