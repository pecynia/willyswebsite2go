interface Route {
    href: string
    label: string
    includeInHeader: boolean
  }
  
export const routes: Route[] = [
    {
        href: "/",
        label: "Home",
        includeInHeader: true,
    },
    {
        href: "/ons-aanbod",
        label: "Ons Aanbod",
        includeInHeader: true,
    },
    {
        href: "/evenementen",
        label: "Evenementen",
        includeInHeader: true,
    },
    {
        href: "/drank",
        label: "Drank",
        includeInHeader: true,
    },
    {
        href: "/faciliteiten",
        label: "Faciliteiten",
        includeInHeader: true,
    },
    {
        href: "/ervaringen",
        label: "Ervaringen",
        includeInHeader: true,
    },
    {
        href: "/ervaringen/lukkien",
        label: "Lukkien",
        includeInHeader: false,
    },
    {
        href: "/contact",
        label: "Contact",
        includeInHeader: true,
    },
    {
        href: "/over-ons",
        label: "Over Ons",
        includeInHeader: true,
    },
]
