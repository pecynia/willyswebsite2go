'use client'

import { useState, useEffect } from 'react'
import GoogleAnalytics from '@/app/GoogleAnalytics'
import ConsentBanner from '@/app/components/ConsentBanner'

type AnalyticsProviderProps = {
    children: React.ReactNode
    description: React.ReactNode
}

const GoogleAnalyticsProvider = ({ children, description }: AnalyticsProviderProps) => {
    const [consent, setConsent] = useState<boolean | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const savedConsent = localStorage.getItem('ga_consent')
        if (savedConsent !== null) {
            const parsedConsent = JSON.parse(savedConsent)
            setConsent(parsedConsent)
        }
    }, [])

    const handleConsentChange = (consent: boolean | null): void => {
        setConsent(consent)
    }

    if (!isClient) {
        return null
    }

    return (
        <>
            {consent === true && <GoogleAnalytics consent={consent} />}
            <ConsentBanner onConsentChange={handleConsentChange}>
                {description}
            </ConsentBanner>
            {children}
        </>
    )
}

export default GoogleAnalyticsProvider
