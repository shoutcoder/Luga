"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Truck,
  Leaf,
  ThumbsUp,
  ChevronDown,
  Car,
} from "lucide-react";

import HeroSlider from "@/components/hero-slider";
import AutoScrollLogos from "@/components/auto-scroll-logos";
import {
  FaqDetails,
  LocationsDetails,
  OurServices,
  TestimonialDetails,
} from "@/utils";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [services, setServices] = useState<ServicesSlide[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [faqs, setFaqs] = useState<Faqs[]>([]);
  useEffect(() => {
    fetchServices();
    fetchTestimonial();
    fetchLocation();
    fetchFaqs();
  }, []);
  const fetchServices = async () => {
    try {
      const services = await OurServices();
      setServices(services);
    } catch (err) {
      setServices([]);
    }
  };
  const fetchTestimonial = async () => {
    try {
      const testimonials = await TestimonialDetails();
      setTestimonials(testimonials);
    } catch (err) {
      setTestimonials([]);
    }
  };
  const fetchLocation = async () => {
    try {
      const locations = await LocationsDetails();
      setLocations(locations);
    } catch (err) {
      setLocations([]);
    }
  };
  const fetchFaqs = async () => {
    try {
      const faqs = await FaqDetails();
      setFaqs(faqs);
    } catch (err) {
      setFaqs([]);
    }
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-5 md:py-16  bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <div className="lg:mb-[-200px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5">
              VÅRE TJENESTER
            </h2>
            <p className="max-w-3xl mb-12 text-sm">
              Hos LUGA forlenger vi levetiden på klærne dine med skreddersøm,
              miljøvennlig rens, tilpasninger, redesign og spesialtilpassede
              plagg. Vi bevarer favorittene dine og realiserer nye idéer med
              håndverk, omsorg og bærekraft i hvert eneste sting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {services.map((service, index) => (
              <Link href={`/service/${service?.id}`}>
                <div
                  key={index}
                  className={`bg-[#1e291e]  rounded overflow-hidden relative ${
                    index === services.length - 1
                      ? "h-[300px] lg:h-[600px]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === services.length - 1 ? "h-[100%]" : "h-[300px]"
                    }`}
                  >
                    <Image
                      src={service.url || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="absolute w-full h-[100px] p-4 bottom-0 left-0 flex items-end bg-gradient-to-b from-black/0 to-black/90 z-10">
                    <h3 className="text-lg md:text-xl font-medium">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Auto-Scrolling Logos */}
      <section className="py-5 md:py-16 bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3  text-center">
            Kunder og partnere
          </h2>
          <p className="px-2 md:px-4 mb-12 mx-auto text-center">
            Sammen skaper vi skreddersydde løsninger og førsteklasses
            rensetjenester.
          </p>
          <AutoScrollLogos clients={clients} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 bg-[#2d3c2d] text-white bg-[url('/customer.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex justify-center items-center">
            Hva kundene våre sier <span className="text-red-500 ml-2">❤</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" border bg-white p-6 rounded">
                <div className="flex items-center mb-4">
                  {/* <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-200"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black mt-5">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
                {/* <Truck className="w-10 h-10" />{" "} */}
                <Car className="w-10 h-10" fill="#2d3c2d" />
              </div>
              <h3 className="text-xl font-bold mb-3">HENTING OG LEVERING</h3>
              <p className="text-gray-600 text-sm">
                Vi tilbyr henting og levering for dere som har en travel
                timeplan eller er for opptatt med hverdagen til å hente selv.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center  mb-4 text-[#2d3c2d]">
                <Leaf className="w-10 h-10" fill="#2d3c2d" />
              </div>
              <h3 className="text-xl font-bold mb-3">MILJØVENNLIG</h3>
              <p className="text-gray-600 text-sm">
                Vi tar miljøet på alvor i våre standarder. Vi har faset ut alle
                skadelige vaskemidler så mye som mulig.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
                <ThumbsUp className="w-10 h-10" fill="#2d3c2d" />
              </div>
              <h3 className="text-xl font-bold mb-3">FORNØYDGARANTI</h3>
              <p className="text-gray-600">
                Vi blir først fornøyde når du er det, og vi gjør alltid vårt beste for å sørge for at du blir det.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Locations Section */}
      <section id="hours" className="py-16 bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <div className="border border-white w-max mx-auto rounded-full flex items-center justify-center px-4 py-2 bg-[rgba(255, 255, 255, 0.05)]">
            <h2 className="text-xs text-center ">FINN DIN NÆRMESTE LOKASJON</h2>
          </div>
          <h3 className="text-4xl font-bold mb-6 pt-4 text-center">
            Besøk oss i nærheten
          </h3>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Opplev våre tjenester personlig på en av våre praktiske lokasjoner.
            Vårt ekspertteam er klare til å ønske deg velkommen og hjelpe deg.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="border border-white rounded-[10px] text-center p-6"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={"/time.png"}
                    width={100}
                    height={100}
                    alt="Location Image"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Åpningstider</h3>
                <p className="mb-4 text-center">{location.area}</p>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p className="text-sm">{location.address}</p>
                </div>
                <div className=" bg-[#608160] rounded-[15px] py-3 mb-4 w-70">
                  <h4 className="text-sm font-bold mb-2">Åpningstider</h4>
                  <p className="text-sm">
                    Mandag-Fredag: {location.weekdayHours}
                  </p>
                  <p className="text-sm">Lørdag: {location.saturdayHours}</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <p className="text-sm">
                      <Link href={`tel:${location.phone}`}>{location.phone}</Link>
                  </p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <Mail className="w-4 h-4 mr-2" />
                  <p className="text-sm">
                      <Link href={`mailto:${location.email}`}>{location.email}</Link>
                  </p>
                </div>
                <Link
                  href={location.redirection}
                  target="_blank"
                  className="w-max border border-white px-10 rounded-full py-2 text-sm"
                >
                  Få veibeskrivelse
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Ofte stilte spørsmål
          </h2>
          <p className="text-xs md:text-base text-center max-w-3xl mx-auto mb-12">
            Har du et spørsmål om Luga? Se listen nedenfor for våre mest stilte
            spørsmål. Hvis spørsmålet ditt ikke står her, vennligst{" "}
            <Link href="/contact" className="text-[#2d3c2d] underline">
              kontakt oss
            </Link>
            .
          </p>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h4 className="text-lg font-medium">{faq.question}</h4>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    openFaq === index ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
// const services = [
//   {
//     title: "Alteration and repair",
//     image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
//   },
//   {
//     title: "Dry cleaning",
//     image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
//   },
//   {
//     title: "Suit making",
//     image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
//   },
//   {
//     title: "Uniform Production",
//     image: "https://ik.imagekit.io/vv/Frame%206.jpg?updatedAt=1744566578154",
//   },
// ];

const clients = [
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP6.png?updatedAt=1746023673999",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP1.png?updatedAt=1746023673994",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP3.png?updatedAt=1746023673864",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP2.png?updatedAt=1746023673859",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP5.png?updatedAt=1746023673940",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP4.png?updatedAt=1746023673943",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP6.png?updatedAt=1746023673999",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP1.png?updatedAt=1746023673994",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP3.png?updatedAt=1746023673864",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP2.png?updatedAt=1746023673859",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP5.png?updatedAt=1746023673940",
  },
  {
    name: "",
    logo: "https://ik.imagekit.io/vv/lugaP4.png?updatedAt=1746023673943",
  },
];


// const testimonials = [
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
//   {
//     name: "Mathias Danielsson",
//     avatar: "/placeholder.svg?height=48&width=48",
//     text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
//   },
// ];

// const locations = [
//   {
//     area: "Stockholm",
//     address: "Sveavägen 98, 113 50 Stockholm",
//     weekdayHours: "10:00-18:00",
//     saturdayHours: "11:00-16:00",
//     phone: "08-31 55 55",
//   },
//   {
//     area: "Stockholm",
//     address: "Sveavägen 98, 113 50 Stockholm",
//     weekdayHours: "10:00-18:00",
//     saturdayHours: "11:00-16:00",
//     phone: "08-31 55 55",
//   },
//   {
//     area: "Stockholm",
//     address: "Sveavägen 98, 113 50 Stockholm",
//     weekdayHours: "10:00-18:00",
//     saturdayHours: "11:00-16:00",
//     phone: "08-31 55 55",
//   },
// ];

// const faqs = [
//   {
//     question: "Who should use Luga?",
//     answer:
//       "Anyone looking for high-quality tailoring and dry cleaning services.",
//   },
//   {
//     question: "What's required to use Luga?",
//     answer: "Just bring your garments to our location or schedule a pickup.",
//   },
//   {
//     question: "What's required to use Luga?",
//     answer: "Just bring your garments to our location or schedule a pickup.",
//   },
//   {
//     question: "What's required to use Luga?",
//     answer: "Just bring your garments to our location or schedule a pickup.",
//   },
//   {
//     question: "What's required to use Luga?",
//     answer: "Just bring your garments to our location or schedule a pickup.",
//   },
// ];
