import { MetadataRoute } from 'next'
import { routes } from '@/dictionaries/routes'

const baseUrl = process.env.NEXT_PUBLIC_URL  

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map(route => ({
        url: `${baseUrl}${route.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly', 
        priority: 0.8  
    }))
}
