interface Location {
    street: string;
    number: string;
    city: string;
    zip: string;
}

interface ContactInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    kvk: string;
}

interface SocialMedia {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
}

export const location: Location = {
    street: "Kerkstraat",
    number: "1",
    city: "Waalre",
    zip: "5581 JJ",
}

export const contactInfo: ContactInfo = {
    name: "Willy's2Go",
    address: `${location.street} ${location.number}, ${location.zip} ${location.city}`,
    email: "willys2go@gmail.com",
    phone: "0612172255",
    kvk: "64650669",
}

export const socialMedia: SocialMedia = {
    instagram: "https://www.instagram.com/willys2go/",
    facebook: "https://www.facebook.com/willys2go/",
    linkedin: "https://www.linkedin.com/company/willys2go/",
}