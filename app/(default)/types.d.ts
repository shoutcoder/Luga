interface TestimonialData {
    id:string,
    name: string
    avatar: string
    text: string
    rating: number
  }
  interface ServicesSlide {
    id:string,
    url: string
    title: string
  }
  interface Locations {
    id:string,
    area: string
    address: string
    weekdayHours: string
    saturdayHours: string
    phone: string
    redirection:string,
}
interface Faqs {
    id:string,
    question: string,
    answer: string,
}