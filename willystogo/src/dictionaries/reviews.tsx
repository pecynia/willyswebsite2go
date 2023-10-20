interface Image {
    path: string;
    alt: string;
  }
  
  interface Quote {
    img: Image;
    id: string;
    companyName: string;
    author: string;
    quote: string;
  }
  
  interface ReviewsHandler {
    quotes: Quote[];
  }
  
export const reviews: ReviewsHandler = {
    quotes: [
        {
            img: {
                path: "/imgs/tafel.jpg",
                alt: "Company 1",
            },
            id: "company-1",
            companyName: "Company 1",
            author: "John Doe",
            quote: "This catering company is amazing! The food was delicious and the service was exceptional.",
        },
        {
            img: {
                path: "/imgs/yan_sate.jpg",
                alt: "Company 2",
            },
            id: "company-2",
            companyName: "Company 2",
            author: "John Doe",
            quote: "We were blown away by the quality of the food and the professionalism of the staff. Highly recommend!",
        },
        {
            img: {
                path: "/imgs/willy.png",
                alt: "Company 3",
            },
            id: "company-3",
            companyName: "Company 3",
            author: "John Doe",
            quote: "This catering company is amazing! The food was delicious and the service was exceptional.",
        },
        {
            img: {
                path: "/imgs/tafel.jpg",
                alt: "Company 4",
            },
            id: "company-4",
            companyName: "Company 4",
            author: "John Doe",
            quote: "We were blown away by the quality of the food and the professionalism of the staff. Highly recommend!",
        }
]};
