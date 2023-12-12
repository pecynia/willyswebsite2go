interface Image {
    path: string;
    alt: string;
}
  
interface Quote {
    img: Image;
    id: string;
    companyName?: string;
    author?: string;
    logo?: string;
    quote: string;
    date: string;
}
  
interface ReviewsHandler {
    quotes: Quote[];
}
  
export const reviews: ReviewsHandler = {
    quotes: [
        {
            img: {
                path: "/imgs/reviews/lukkien.png",
                alt: "Lukkien Ede",
            },
            logo: "", // logo: "https://media.licdn.com/dms/image/C4E0BAQG5g3DPgxoNyQ/company-logo_200_200/0/1641900142051?e=2147483647&v=beta&t=OSQNNk_TWm5n8iJVFgm81ma7GDp6jm_pXzuS8RhJzg8",
            id: "lukkien-ede",
            companyName: "Lukkien Ede",
            author: "Jos Brouwer",
            quote: "Ik ben zeer tevreden over de diensten van Willy's 2 Go catering. Ze hebben ons geholpen bij het organiseren van twee geslaagde bedrijfsfeesten bij Lukkien in Ede. Van het begin tot het eind was alles perfect geregeld, met een heldere communicatie en het meedenken in het thema van de feesten. Het personeel was bekwaam en vriendelijk, en ook werd er prima rekening gehouden met dieetwensen van de gasten. Ik kan Willy's 2 Go catering aanbevelen voor iedereen die op zoek is naar een professionele en betrouwbare cateringdienst.",
            date: "14 december 2022",
        },
        {
            img: {
                path: "/imgs/reviews/basiliek.jpg",
                alt: "Basiliek Veenendaal",
            },
            logo: "",  //"https://www.basiliekveenendaal.nl/wp-content/uploads/2023/01/140502_Logo_Basiliek-01.svg",
            id: "basiliek-veenendaal",
            companyName: "Basiliek Veenendaal",
            author: "Gerard Koudijs",
            quote: "Willy is al een aantal keer bij ons geweest om een mooi buffet te verzorgen met heerlijke en verassende Indische gerechten, hij, én zijn team maken er ook elke keer een feestje van. Persoonlijke aandacht, gezelligheid en kwaliteit zijn de beste woorden om het te omschrijven.",
            date: "15 december 2022",
        },
        {
            img: {
                path: "/imgs/reviews/zgv.jpg",
                alt: "ZGV (Ziekenhuis Geldersche Vallei)",
            },
            logo: "", // logo: "https://www.wur.nl/upload/d70f2758-3da7-4b39-ac9e-60aa05603d1a_logo%20ZGV.jpg",
            id: "zgv",
            companyName: "Ziekenhuis Geldersche Vallei",
            author: "",
            quote: "Het eten tijdens onze jaarlijkse kerstborrel en afdelingsfeestjes wordt al jaren verzorgd door Willy's 2 go. \n En met groot succes!! Heerlijk buffet met diversiteit uit de Indische keuken, gepresenteerd in een rieten mandje met bananenblad \n Maar ook de saté bar is een aanrader! \n Gezellig en vriendelijk personeel. ",
            date: "20 december 2022",
        },
        {
            img: {
                path: "/imgs/reviews/attract.jpg",
                alt: "Attract professionals Ede",
            },
            logo: "", // logo: "https://media.licdn.com/dms/image/C560BAQGLPFr0aBZOLA/company-logo_200_200/0/1574069834313?e=2147483647&v=beta&t=Kh10ViBinzaZB6Tw9Bt-nK9gqXCi84JNgrQlgDhEeV4",
            id: "attract-professionals-ede",
            companyName: "Attract professionals Ede",
            author: "Saskia Huisman",
            quote: "Voor ons jaarlijkse eindejaarsfeest dit jaar gekozen voor de catering van Willy's 2 go. \n Wat een feestje om Willy op je feest te hebben! Alles tot in de puntjes verzorgd, heerlijk authentiek eten. \n Willy staat zelf gezellig achter het buffet om uit te leggen wat je eet. \n Je hebt nergens meer omkijken naar. \n Echt een aanrader! Bedankt Willy en Tom voor de leuke en lekkere beleving. ",
            date: "9 december 2022",
        },
        {
            img: {
                path: "/imgs/reviews/jillis.jpg",
                alt: "Jillis Baggerman Makerlaardij",
            },
            logo: "", // logo: "https://jillisbaggerman.nl/wp-content/uploads/2021/04/logo-website-1.png",
            id: "jillis-baggerman-makelaardij",
            companyName: "Jillis Baggerman Makerlaardij",
            author: "Jillis Baggerman",
            quote: "Ik heb zeer goede ervaringen met Willy's 2 Go. Zowel zakelijk als privé diverse keren Willy's 2 Go ingeschakeld. De gerechten zijn authentiek Indisch en van goede kwaliteit. De BBQ met o.a. de bekende saté en spareribs (de specialiteit van Yannick) is ook een aanrader. Willy en Yannick brengen naast een goed product ook veel sfeer en gezelligheid. Ook fijn dat er voor bestek en servies wordt gezorgd en dat dit na afloop ook weer wordt meegenomen, zodat er geen afwas is. Je wordt compleet ontzorgd. Ik kijk nu al uit naar een volgende keer.",
            date: "22 september 2022",
        },
        {
            img: {
                path: "/imgs/reviews/kaap.jpg",
                alt: "Kaapcommunications",
            },
            logo: "",
            id: "kaapcommunications",
            companyName: "Kaapcommunications",
            author: "Dimitri",
            quote: "Willy heeft onlangs de catering op mijn afscheidsfeestje van mijn werk verzorgd. Deze ervaring was super; hij zorgt voor heerlijk eten en op zo'n manier dat ik er geen omkijken naar had. Ik eet regelmatig bij Willy, dus ik weet hoe lekker zijn eten is. Maar de reacties van mijn gasten waren ook lovend! Willy, bedankt!",
            date: "13 januari 2023"
        },
        {
            img: {
              path: "/imgs/reviews/hartman.jpg", // Replace with actual image path
              alt: "Meta Karman Event"
            },
            logo: "",
            id: "meta-karman",
            companyName: "",
            author: "Meta Karman",
            quote: "Willy heeft voor ons een voortreffelijke, heerlijk avond verzorgd. Na een flinke verbouwing in onze nieuwe woning in de eerste maanden van 2022, hadden onze hulp troepen wel een relax avond verdiend. Daarnaast was ik (Meta) ook nog jarig. Bij zo'n feestje hoort natuurlijk lekker eten bij. Voor ons, de vrienden en familie is dat Indisch eten. Willy is al enthousiast voordat je verteld wat de bedoeling is. Hij neemt je gelijk mee in het feestje wat nog moet beginnen. Wij zijn zelf niet van party makers, maar hij maakte dat bijna wel van ons. We hebben genoten van zijn ideeën en oplossingen die hij voor ons bedacht. De avond zelf was geweldig, alles op tijd en mooi aangekleed. Erg fijn dat Willy ging uitserveren en wij er geen omkijken naar hadden. Het eten was voortreffelijk en voor iedereen wat te kiezen. Zelfs de grote fijnproevers onder ons (en zelf goede “Indische” koks) hebben genoten van het eten en waren blij dat ze nog een “left over” meekregen. Een topavond en zeker voor herhaling vatbaar.",
            date: "13 augustus 2022" // Replace with actual date of the event
          },
          {
            img: {
              path: "/imgs/reviews/tinus.jpg", // Replace with actual image path
              alt: "De Vries Event"
            },
            logo: "",
            id: "de-vries-event",
            companyName: "",
            author: "Tinus en Patricia de Vries",
            quote: "Willy 2 Go een perfecte cateraar. Als je zegt Willy 2 Go dan heb je het over een cateraar die je kan helpen een onvergetelijke dag te beleven, maakt niet uit wat, een verjaardag, een evenement of een personeelsfeestje Ik heb een paar keer gebruik gemaakt van de diensten van Willy 2 Go en kreeg steeds leuke reacties. Willy komt langs om samen te bespreken wat de wensen zijn, hoe de locatie eruit ziet en hoe de dag gaat verlopen. Ook kan hij evt. een tent in de tuin en ook muziek verzorgen en nog meer. Maar bij Willy gaat het voornamelijk om het eten wat altijd super verzorgd wordt. Mijn vrienden zijn altijd zeer enthousiast hierover en nemen zelfs, als er nog wat over is, eten mee naar huis voor de volgende dag. Willy bedankt voor de goede zorgen en kijk uit naar de volgende keer.",
            date: "29 augustus 2022" // Replace with actual date of the event
          },
          {
            img: {
              path: "/imgs/reviews/dhfinance.jpg", // Replace with actual image path
              alt: "DHFinance Event"
            },
            logo: "", // logo: "https://media-01.imu.nl/storage/dh-finance.nl/5803/winstadviseur-boekhouding-profit-first-1.jpg",
            id: "dhfinance-event",
            companyName: "DHFinance",
            author: "Dennis Hilal",
            quote: "We hebben Willy's hulp ingeschakeld, voor zowel grote zakelijke als kleine privé feesten. Hun dienstverlening is een totaalaanbod en passen ze perfect aan op deze verschillende samenstellingen van de genodigden. De producten zijn kakelvers en authentiek, het aanbod is afwijkend van de bekende gerechten en wordt geserveerd op traditionele wijze met een brede glimlach en ze weten contact met de gasten te maken. Die zijn overigens laaiend enthousiast geweest, reacties waren “heerlijk vers” en “vol van smaak”. Grote waardering van eerlijke en overheerlijke producten”.",
            date: "25 augustus 2023"
          }
        ]
      }