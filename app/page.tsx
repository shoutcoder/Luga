'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  Truck,
  Leaf,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";

import HeroSlider from "@/components/hero-slider";
import AutoScrollLogos from "@/components/auto-scroll-logos";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-5 md:py-16 bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <div className="md:mb-[-200px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-12">
              Our Services
            </h2>
            <p className="max-w-3xl mb-12 text-sm">
              We accept small and large orders from individuals, companies and
              institutions. Our skilled tailor has over 25 years of experience
              in the profession and has sewn everything that can be sewn from
              ready-to-wear. With us you can get custom-made clothes for a
              perfect fit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-[#1e291e] rounded-lg overflow-hidden relative ${
                  index === services.length - 1 ? "h-[600px]" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === services.length - 1 ? "h-[100%]" : "h-[300px]"
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
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
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Auto-Scrolling Logos */}
      <section className="py-5 md:py-16 bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-center">
            Clients and Partners
          </h2>
          <p className="px-2 md:px-4 mb-12 mx-auto text-center">
            Come aboard and join the maintainers and contributors of the best
            generative AI SaaS projects listed on our waitlist.
          </p>
          <AutoScrollLogos clients={clients} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 bg-[#2d3c2d] text-white bg-[url('/customer.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex justify-center items-center">
            What our customers say <span className="text-red-500 ml-2">❤</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black">{testimonial.text}</p>
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
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">PICKUP AND DELIVERY</h3>
              <p className="text-gray-600">
                We offer pick-up and delivery for those of you who are having a
                hard time to go out due to their schedule or are too busy with
                life to pick up.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                ENVIRONMENTALLY FRIENDLY
              </h3>
              <p className="text-gray-600">
                We take the environment seriously in our standards. We have
                phased out all harmful detergents as much as possible.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
                <ThumbsUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">SATISFACTION GUARANTEE</h3>
              <p className="text-gray-600">
                We can not explain why so many visit our customers are and
                re-choose the same Luga outlet to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="hours" className="py-16 bg-[#2d3c2d] text-white">
        <div className="container mx-auto px-4">
          <div className="border border-white w-max mx-auto rounded-full flex items-center justify-center px-4 py-2 bg-[rgba(255, 255, 255, 0.05)]">
            <h2 className="text-xs text-center ">FIND YOUR NEAREST LOCATION</h2>
          </div>
          <h3 className="text-4xl font-bold mb-6 pt-4 text-center">
            Visit Us Nearby
          </h3>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Experience our services in person at one of our convenient
            locations. Our expert team is ready to welcome and assist you.
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
                <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                <p className="mb-4 text-center">{location.area}</p>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p className="text-sm">{location.address}</p>
                </div>
                <div className="border border-white/70 rounded-[15px] py-3 mb-4 w-70">
                  <h4 className="text-sm font-bold mb-2">OPENING TIMES</h4>
                  <p className="text-sm">
                    Monday-Friday: {location.weekdayHours}
                  </p>
                  <p className="text-sm">Saturday: {location.saturdayHours}</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <Phone className="w-4 h-4 mr-2" />
                  <p className="text-sm">{location.phone}</p>
                </div>
                <button className="w-max border border-white px-10 rounded-full py-2 text-sm">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Frequently Asked Questions and
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center">
            Resources
          </h3>
          <p className="text-xs md:text-base text-center max-w-3xl mx-auto mb-12">
            Do you have a question about Luga? See the list below for our most
            frequently asked questions. If your question is not listed here,
            then please{" "}
            <Link href="#contact" className="text-[#2d3c2d] underline">
              contact us
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
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-200 overflow-hidden ${openFaq === index ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
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
const services = [
  {
    title: "Alteration and repair",
    image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
  },
  {
    title: "Dry cleaning",
    image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
  },
  {
    title: "Suit making",
    image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
  },
  {
    title: "Uniform Production",
    image: "https://ik.imagekit.io/vv/Frame%206.jpg?updatedAt=1744566578154",
  },
];

const clients = [
  { name: "Google", logo: "https://ik.imagekit.io/vv/Vector%20(4).png?updatedAt=1744566734991" },
  { name: "Netflix", logo: "https://ik.imagekit.io/vv/Group%2013%20(2).png?updatedAt=1744566735026" },
  { name: "Google", logo: "https://ik.imagekit.io/vv/Vector%20(4).png?updatedAt=1744566734991" },
  { name: "Netflix", logo: "https://ik.imagekit.io/vv/Group%2013%20(2).png?updatedAt=1744566735026" },
  { name: "Google", logo: "https://ik.imagekit.io/vv/Vector%20(4).png?updatedAt=1744566734991" },
  { name: "Netflix", logo: "https://ik.imagekit.io/vv/Group%2013%20(2).png?updatedAt=1744566735026" },
  { name: "Google", logo: "https://ik.imagekit.io/vv/Vector%20(4).png?updatedAt=1744566734991" },
  { name: "Netflix", logo: "https://ik.imagekit.io/vv/Group%2013%20(2).png?updatedAt=1744566735026" }
];

const testimonials = [
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
  {
    name: "Mathias Danielsson",
    avatar: "/placeholder.svg?height=48&width=48",
    text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
  },
];

const locations = [
  {
    area: "Stockholm",
    address: "Sveavägen 98, 113 50 Stockholm",
    weekdayHours: "10:00-18:00",
    saturdayHours: "11:00-16:00",
    phone: "08-31 55 55",
  },
  {
    area: "Stockholm",
    address: "Sveavägen 98, 113 50 Stockholm",
    weekdayHours: "10:00-18:00",
    saturdayHours: "11:00-16:00",
    phone: "08-31 55 55",
  },
  {
    area: "Stockholm",
    address: "Sveavägen 98, 113 50 Stockholm",
    weekdayHours: "10:00-18:00",
    saturdayHours: "11:00-16:00",
    phone: "08-31 55 55",
  },
];

const faqs = [
  {
    question: "Who should use Luga?",
    answer:
      "Anyone looking for high-quality tailoring and dry cleaning services.",
  },
  {
    question: "What's required to use Luga?",
    answer: "Just bring your garments to our location or schedule a pickup.",
  },
  {
    question: "What's required to use Luga?",
    answer: "Just bring your garments to our location or schedule a pickup.",
  },
  {
    question: "What's required to use Luga?",
    answer: "Just bring your garments to our location or schedule a pickup.",
  },
  {
    question: "What's required to use Luga?",
    answer: "Just bring your garments to our location or schedule a pickup.",
  },
];
