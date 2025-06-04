"use client";

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
import FullScreenLoader from "@/components/dashboard/common/FullScreenLoader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqDetails, OurServices, getService } from "@/utils";
import {
  ArrowRight,
  Car,
  ChevronDown,
  ChevronRight,
  CloudLightning,
  Leaf,
  Link,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const features = {
  id: "service01",
  title: "Our Services",
  url: "https://picsum.photos/800/400",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  bgImage: "https://picsum.photos/1920/1080",
  features: [
    {
      title: "Service One",
      image: "https://picsum.photos/800/600?random=1",
      details: [
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
    {
      title: "Service Two",
      image: "https://picsum.photos/800/600?random=2",
      details: [
        {
          content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    },
    {
      title: "Service Three",
      image: "https://picsum.photos/800/600?random=3",
      details: [
        {
          content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      title: "Service Four",
      image: "https://picsum.photos/800/600?random=4",
      details: [
        {
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
      ],
    },
  ],
};

export default function Demo() {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className=" w-full h-full">
        {/* //service section */}

        {/* /hero  */}
        <section className="container h-[50vh] space-y-2 md:space-y-3 lg:space-y-5 mx-auto flex flex-col justify-center items-center relative text-center mt-36 overflow-hidden">
          <h1 className="text-5xl md:text-8xl tracking-widest font-extrabold font-Manrope mb-4 leading-tight text-black">
            {features.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl md:font-medium w-full md:w-[80%] text-[#333]">{features.desc}</p>
        </section>

        {/* sticky section */}

        <section className="py-24 bg-[#F5F5F5] mt-16">
          <div className="container mx-auto max-w-7xl px-6 gap-10">
            {/* Left - Sticky Section */}
            {/* <div className="lg:sticky top-24 self-start ">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                TRUE Zero Waste Certification
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our comprehensive TRUE Zero Waste Certification program not only
                demonstrates your organization's commitment to environmental
                stewardship but also provides a structured roadmap to help you
                achieve your sustainability goals.
              </p>
            </div> */}

            {/* Right - Scrollable Phases */}
            <div className="space-y-10">
              {features.features.map((service, index) => (
                <div key={index} className="mx-auto w-full md:w-[70%]">
                  <h3 className="text-2xl font-semibold uppercase text-[#333] mb-2">
                    {service.title}
                  </h3>
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={400}
                      className="w-full transition-transform duration-500 group-hover:scale-105 my-10"
                    />
                  )}
                  <div className="space-y-3">
                    {service.details.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-sm md:text-base text-[#333] font-medium">
                          {item.content}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
      </div>

      {/* //why choose us  */}
      <section className="py-24 px-4 relative hidden ">
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-white rounded-bl-[100px] -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1 bg-[#edf3ed] text-[#4a7a4a] rounded-full text-sm font-medium mb-4">
              FORDELER
            </span>
            <h2 className="text-4xl font-bold text-[#2d353c] mb-4">
              Hvorfor velge oss?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Med 20+ års erfaring, kvalitetsmaterialer og lidenskap for
              håndverk, garanterer vi førsteklasses resultat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-[#4a7a4a] to-[#6a9a6a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#edf3ed] flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-[#4a7a4a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                  Erfaring
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  20+ års erfaring i skreddersøm og kundetilpassede løsninger.
                  Vår ekspertise sikrer at hvert plagg blir perfekt.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-[#4a7a4a] to-[#6a9a6a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#edf3ed] flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-[#4a7a4a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                  Kvalitet
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi bruker kun nøye utvalgte stoffer og søm med høy presisjon.
                  Kvalitet er vår høyeste prioritet.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-[#4a7a4a] to-[#6a9a6a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#edf3ed] flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-[#4a7a4a]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                  Kundetilfredshet
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vi lytter, tilpasser og leverer — hver gang. Din tilfredshet
                  er vår suksess, og vi går den ekstra milen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      {/* <section className="py-24 bg-[#F5F5F5]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333] tracking-wider mb-4">
              Ofte stilte spørsmål
            </h2>
            <p className="text-[#333] max-w-2xl mx-auto">
              Har du et spørsmål om våre tjenester? Se listen nedenfor for våre
              mest stilte spørsmål.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-medium text-gray-900 hover:text-emerald-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section> */}

      {/* //feature  */}
      <section className="py-24 px-4 hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 flex items-center justify-center mb-8 rounded-full bg-white shadow-lg text-[#4a7a4a] group-hover:bg-[#4a7a4a] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <Car className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                HENTING OG LEVERING
              </h3>
              <p className="text-[#333] text-sm leading-relaxed">
                Vi tilbyr henting og levering for dere som har en travel
                timeplan eller er for opptatt med hverdagen til å hente selv.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 flex items-center justify-center mb-8 rounded-full bg-white shadow-lg text-[#4a7a4a] group-hover:bg-[#4a7a4a] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <Leaf className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                MILJØVENNLIG
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vi tar miljøet på alvor i våre standarder. Vi har faset ut alle
                skadelige vaskemidler så mye som mulig.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 flex items-center justify-center mb-8 rounded-full bg-white shadow-lg text-[#4a7a4a] group-hover:bg-[#4a7a4a] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <ThumbsUp className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2d3c2d]">
                FORNØYDGARANTI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vi kan ikke forklare hvorfor så mange besøker våre kunder og
                velger den samme Luga-avdelingen igjen og igjen.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-16 text-black text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bestill en konsultasjon i dag!
          </h2>
          <p className="mb-6">
            Vi hjelper deg gjerne med dine skreddersydde behov.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-3 bg-black text-white rounded-full font-medium"
          >
            Contact Now <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </section> */}

      <section className="hidden py-24 px-4 relative bg-[#2d3c2d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full bg-[#4a7a4a]/20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-tl-full bg-[#4a7a4a]/20"></div>

        <div
          className="container mx-auto max-w-4xl relative z-10 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            La oss skape noe spesielt sammen
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ta kontakt for en uforpliktende samtale om dine behov og ønsker. Vi
            hjelper deg gjerne med dine skreddersydde behov.
          </p>
          <button className="px-8 py-4 bg-white text-[#2d3c2d] rounded-full font-medium text-lg flex items-center mx-auto hover:bg-[#edf3ed] transition-colors duration-300 transform hover:scale-105">
            <span>Kontakt Oss Nå</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-white/70">
          <div className="text-center">
            <h4 className="font-medium mb-2">Adresse</h4>
            <p>Storgata 123, 0123 Oslo</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-2">Telefon</h4>
            <p>(+47) 123 45 678</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-2">E-post</h4>
            <p>kontakt@luganorge.no</p>
          </div>
        </div>
      </section>
    </main>
  );
}
