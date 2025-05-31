"use client";
// For App Router (e.g., app/layout.js)

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope', // Optional: For Tailwind `font-variable`
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

const services = {
  id: "service01",
  title: "Skredderi",
  url: "https://luganorge.no/wp-content/uploads/2022/01/rensogskredderi_bilde_bakgrunn.jpg",
  desc: "Produksjon Vårt hovedmål å tilby et stort utvalg av skreddesydd arbeidsklær av høy kvalitet til en gunstig pris. Med stikkordene glede, farge og omsorg har vi et bredt utvalg arbeidsklær som gjør arbeidet litt lettere for alle yrkesgrupper innen helse og omsorg.",
  bgImage:
    "https://luganorge.no/wp-content/uploads/2022/01/rensogskredderi_bilde_bakgrunn.jpg",
  features: [
    {
      title: "Skredderi",
      image: "https://luganorge.no/wp-content/uploads/2022/01/rens-800x533.jpg",
      details: [
        {
          content:
            "Vi tar imot små og store oppdrag fra privatpersoner, bedrifter og institusjoner. Vår dyktige skredder har over 20 års erfaring innen konfeksjon og skreddersøm. Hos oss kan du få klær spesialtilpasset for perfekt passform.",
        },
        {
          content:
            "Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.",
        },
      ],
    },
    {
      title: "Nye Klær på Mål",
      image: "/customer.jpg",
      details: [
        {
          content:
            "Drømmer du om en unik dress, skjorte eller kjole? Vi syr klær etter dine mål. Du velger stoff, fòr, knapper og modell fra vårt galleri - eller tar med egne materialer og ideer!",
        },
      ],
    },
    {
      title: "Nye Klær på Mål",
      image: "/customer.jpg",
      details: [
        {
          content:
            "Nye klær Få sydd en unik dress, skjorte eller kjole for deg etter mål. Du velger stoff, for, knapper og modell fra vårt galleri. Du kan også ta med ditt eget stoff og modellen du ønsker!",
        },
      ],
    },
    {
      title: "Nye Klær på Mål",
      image: "/customer.jpg",
      details: [
        {
          content:
            "Nye klær Få sydd en unik dress, skjorte eller kjole for deg etter mål. Du velger stoff, for, knapper og modell fra vårt galleri. Du kan også ta med ditt eget stoff og modellen du ønsker!",
        },
      ],
    },
  ],
};


export default function Service() {
  const params = useParams();
  const rawSlug = params.slug;

  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [faqs, setFaqs] = useState<Faqs[]>([]);
  const [features, setFeatures] = useState<FullService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const faqs = await FaqDetails();
      setFaqs(faqs);
    } catch (err) {
      setFaqs([]);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, [slug]);

  const loadFeatures = async () => {
    setLoading(true);
    const data = await getService(slug);

    setFeatures(data);

    setLoading(false);
  };

  if (features == null) {
    return <FullScreenLoader />;
  }

  return (
    <main className="min-h-screen text-black bg-white">
      <div className=" w-full h-full">
        {/* //service section */}

        {/* /hero  */}
        <section className=" container h-[50vh] space-y-2 md:space-y-3 lg:space-y-5 mx-auto flex flex-col justify-center items-center relative text-center mt-36  overflow-hidden">
          {/* <span className="inline-block px-4  py-2 bg-white text-[#333] font-medium rounded-full text-sm md:text-lg  ">
            Premium skredderservice
          </span> */}
          <h1
            className="text-5xl md:text-8xl tracking-widest font-extrabold font-Manrope mb-4 leading-tight text-black" 
          >
            {features.title}
          </h1>
          {/* <h1 className={manrope.variable}>  {features.title}</h1> */}

          <p className=" text-base sm:text-lg md:text-xl md:font-medium w-full md:w-[80%] text-[#333]">{features.desc}</p>

          {/* <div className="w-full  h-[600px] mx-auto md:px-20">
            <Image
              src={services.url}
              alt={services.title}
              width={800}
              height={400}
              className="w-full h-full rounded my-10 object-cover"
            />
          </div> */}

          {/* <Button size="lg" className="gap-2  rounded-full mt-10">
              Bestill time <ArrowRight className="w-4 h-4" />
            </Button> */}
        </section>

        {/* sticky section */}

        <section className="py-24 bg-[#F5F5F5] mt-16">
          <div className="container mx-auto max-w-7xl px-6  gap-10">
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
                <div key={index} className="mx-auto w-full md:w-[70%] " >
                  {" "}
                  <h3 className="text-2xl font-semibold uppercase text-[#333] mb-2">
                    {service.title}
                  </h3>
                  {/* <p className="text-gray-700 mb-6">
                    We begin by gathering and analyzing critical data, including
                    commodity weights, financial info, and waste processes...
                  </p> */}
                  {
                    service.image &&
                    <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-105 my-10"
                  />

                  }
                  
                  <div className="space-y-3">
                    {service.details.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className=" text-sm md:text-base  text-[#333] font-medium">
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

// "use client";

// import FullScreenLoader from "@/components/dashboard/common/FullScreenLoader";
// import { FaqDetails, OurServices,getService } from "@/utils";
// import {
//   Car,
//   ChevronDown,
//   ChevronRight,
//   Leaf,
//   Link,
//   ThumbsUp,
// } from "lucide-react";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const sevices = {
//   id: "01",
//   title: "Skredderi",
//   desc: "Produksjon Vårt hovedmål å tilby et stort utvalg av skreddesydd arbeidsklær av høy kvalitet til en gunstig pris. Med stikkordene glede, farge og omsorg har vi et bredt utvalg arbeidsklær som gjør arbeidet litt lettere for alle yrkesgrupper innen helse og omsorg.",
//   bgImage:
//     "https://luganorge.no/wp-content/uploads/2022/01/rensogskredderi_bilde_bakgrunn.jpg",
//   feature: [
//     {
//       title: "Skredderi",
//       description: [
//         "Vi tar imot små og store oppdrag fra privatpersoner, bedrifter og institusjoner. Vår dyktige skredder har over 20 års erfaring innen konfeksjon og skreddersøm. Hos oss kan du få klær spesialtilpasset for perfekt passform.",
//         "Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.",
//       ],
//       image: "https://luganorge.no/wp-content/uploads/2022/01/rens-800x533.jpg",
//     },
//     {
//       title: "Nye Klær på Mål",
//       description: [
//         "Drømmer du om en unik dress, skjorte eller kjole? Vi syr klær etter dine mål. Du velger stoff, fòr, knapper og modell fra vårt galleri - eller tar med egne materialer og ideer!",
//       ],
//       image: "/customer.jpg",
//     },
//     {
//       title: "Nye Klær på Mål",
//       description: [
//         "Nye klær Få sydd en unik dress, skjorte eller kjole for deg etter mål. Du velger stoff, for, knapper og modell fra vårt galleri. Du kan også ta med ditt eget stoff og modellen du ønsker!",
//       ],
//       image: "/customer.jpg",
//     },
//   ],
//   logo: [
//     "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
//     "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
//     "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
//   ],
// };

// export default function Service() {
//   const params = useParams();
//   const rawSlug = params.slug;

//   const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const [faqs, setFaqs] = useState<Faqs[]>([]);
//   const [features, setFeatures] = useState<FullService | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetchFaqs();
//   }, []);

//   const fetchFaqs = async () => {
//     try {
//       const faqs = await FaqDetails();
//       setFaqs(faqs);
//     } catch (err) {
//       setFaqs([]);
//     }
//   };
//   useEffect(() => {
//     loadFeatures()
//   }, [slug])

//   const loadFeatures = async () => {
//     setLoading(true)
//     const data = await getService(slug)
//     setFeatures(data)
//     setLoading(false)
//   }

//   console.log("Slug:", slug); // e.g. "skredderi"
//   if(features==null){
//     return <FullScreenLoader/>
//   }
//   return (
//     <main className="min-h-screen mt-10  text-black bg-white">
//       <div className=" w-full h-full">
//         {/* //service section */}
//         <div className="container mx-auto px-4 text-black py-16">
//           <h1 className="text-3xl text-[#2d353c] md:text-6xl font-bold mb-12 text-center">
//             {features.title}
//           </h1>

//           <p className="text-center mb-12 md:text-lg ">{features?.desc}</p>
//           {features.features.map((service, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
//                 } items-center gap-8 mb-12`}
//             >
//               <div className="md:w-1/2">
//                 <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
//                 {service.details.map((para, i) => (
//                   <p key={i} className="mb-4">
//                     {para.content|| ""}
//                   </p>
//                 ))}
//               </div>
//               <div className="relative h-[300px] w-full md:w-1/2">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="object-cover w-full h-full rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           ))}

//           {/* <div className="flex items-center  justify-around gap-10 mt-16">
//             {sevices?.logo &&
//               sevices.logo.map((item, index) => (
//                 <div key={index}>
//                   <img src={item} alt={`logo-${index}`} />
//                 </div>
//               ))}
//           </div> */}
//         </div>

//         {/* //why choose us  */}
//         <section className="py-16 ">
//           <div className="container mx-auto px-4 text-center text-black">
//             <h2 className="text-3xl font-bold mb-6">Hvorfor velge oss?</h2>
//             <p className="mb-12 text-lg">
//               Med 20+ års erfaring, kvalitetsmaterialer og lidenskap for
//               håndverk, garanterer vi førsteklasses resultat.
//             </p>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">Erfaring</h3>
//                 <p>
//                   20+ års erfaring i skreddersøm og kundetilpassede løsninger.
//                 </p>
//               </div>
//               <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
//                 <p>
//                   Vi bruker kun nøye utvalgte stoffer og søm med høy presisjon.
//                 </p>
//               </div>
//               <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">Kundetilfredshet</h3>
//                 <p>Vi lytter, tilpasser og leverer — hver gang.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* faq */}

//         <section className="py-16 ">
//           <div className="container mx-auto px-4">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
//               Ofte stilte spørsmål
//             </h2>
//             <p className="text-xs md:text-base text-center max-w-3xl mx-auto mb-12">
//               Har du et spørsmål om Luga? Se listen nedenfor for våre mest
//               stilte spørsmål. Hvis spørsmålet ditt ikke står her, vennligst{" "}
//             </p>
//             <div className="max-w-3xl mx-auto">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="border-b border-gray-200 py-4">
//                   <button
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                     className="flex items-center justify-between w-full text-left"
//                   >
//                     <h4 className="text-lg font-medium">{faq.question}</h4>
//                     <ChevronDown
//                       className={`w-5 h-5 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""
//                         }`}
//                     />
//                   </button>
//                   <div
//                     className={`transition-all duration-200 overflow-hidden ${openFaq === index ? "max-h-40 mt-4" : "max-h-0"
//                       }`}
// zg                  >
//                     <p className=" text-sm">{faq.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* //feature  */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
//                   {/* <Truck className="w-10 h-10" />{" "} */}
//                   <Car className="w-10 h-10" fill="#2d3c2d" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">HENTING OG LEVERING</h3>
//                 <p className="text-gray-600 text-sm">
//                   Vi tilbyr henting og levering for dere som har en travel
//                   timeplan eller er for opptatt med hverdagen til å hente selv.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 flex items-center justify-center  mb-4 text-[#2d3c2d]">
//                   <Leaf className="w-10 h-10" fill="#2d3c2d" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">MILJØVENNLIG</h3>
//                 <p className="text-gray-600 text-sm">
//                   Vi tar miljøet på alvor i våre standarder. Vi har faset ut
//                   alle skadelige vaskemidler så mye som mulig.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
//                   <ThumbsUp className="w-10 h-10" fill="#2d3c2d" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">FORNØYDGARANTI</h3>
//                 <p className="text-gray-600">
//                   Vi kan ikke forklare hvorfor så mange besøker våre kunder og
//                   velger den samme Luga-avdelingen igjen og igjen.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* <section className="py-16 text-black text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Bestill en konsultasjon i dag!
//           </h2>
//           <p className="mb-6">
//             Vi hjelper deg gjerne med dine skreddersydde behov.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center px-10 py-3 bg-black text-white rounded-full font-medium"
//           >
//             Contact Now <ChevronRight className="ml-2 h-4 w-4" />
//           </Link>
//         </section> */}
//       </div>
//     </main>
//   );
// }
