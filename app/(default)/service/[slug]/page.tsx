"use client";

import FullScreenLoader from "@/components/dashboard/common/FullScreenLoader";
import { FaqDetails, OurServices,getService } from "@/utils";
import {
  Car,
  ChevronDown,
  ChevronRight,
  Leaf,
  Link,
  ThumbsUp,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
 
const sevices = {
  id: "01",
  title: "Skredderi",
  desc: "Produksjon Vårt hovedmål å tilby et stort utvalg av skreddesydd arbeidsklær av høy kvalitet til en gunstig pris. Med stikkordene glede, farge og omsorg har vi et bredt utvalg arbeidsklær som gjør arbeidet litt lettere for alle yrkesgrupper innen helse og omsorg.",
  bgImage:
    "https://luganorge.no/wp-content/uploads/2022/01/rensogskredderi_bilde_bakgrunn.jpg",
  feature: [
    {
      title: "Skredderi",
      description: [
        "Vi tar imot små og store oppdrag fra privatpersoner, bedrifter og institusjoner. Vår dyktige skredder har over 20 års erfaring innen konfeksjon og skreddersøm. Hos oss kan du få klær spesialtilpasset for perfekt passform.",
        "Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.",
      ],
      image: "https://luganorge.no/wp-content/uploads/2022/01/rens-800x533.jpg",
    },
    {
      title: "Nye Klær på Mål",
      description: [
        "Drømmer du om en unik dress, skjorte eller kjole? Vi syr klær etter dine mål. Du velger stoff, fòr, knapper og modell fra vårt galleri - eller tar med egne materialer og ideer!",
      ],
      image: "/customer.jpg",
    },
    {
      title: "Nye Klær på Mål",
      description: [
        "Nye klær Få sydd en unik dress, skjorte eller kjole for deg etter mål. Du velger stoff, for, knapper og modell fra vårt galleri. Du kan også ta med ditt eget stoff og modellen du ønsker!",
      ],
      image: "/customer.jpg",
    },
  ],
  logo: [
    "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
    "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
    "https://luganorge.no/wp-content/uploads/2022/01/oekotex.png",
  ],
};

export default function Service() {
  const params = useParams();
  const rawSlug = params.slug;
  
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [faqs, setFaqs] = useState<Faqs[]>([]);
  const [features, setFeatures] = useState<FullService | null>(null)
  const [loading, setLoading] = useState(true)

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
    loadFeatures()
  }, [slug])

  const loadFeatures = async () => {
    setLoading(true)
    const data = await getService(slug)
    console.log("data-",data);
    setFeatures(data)
    setLoading(false)
  }

  console.log("Slug:", slug); // e.g. "skredderi"
  if(features==null){
    return <FullScreenLoader/>
  }  
  return (
    <main className="min-h-screen mt-10  text-black bg-white">
      <div className=" w-full h-full">
        {/* //service section */}
        <div className="container mx-auto px-4 text-black py-16">
          <h1 className="text-3xl text-[#2d353c] md:text-6xl font-bold mb-12 text-center">
            {features.title}
          </h1>

          <p className="text-center mb-12 md:text-lg ">{features?.desc}</p>
          {features.features.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-8 mb-12`}
            >
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                {service.details.map((para, i) => (
                  <p key={i} className="mb-4">
                    {para.content|| ""}
                  </p>
                ))}
              </div>
              <div className="relative h-[300px] w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}

          {/* <div className="flex items-center  justify-around gap-10 mt-16">
            {sevices?.logo &&
              sevices.logo.map((item, index) => (
                <div key={index}>
                  <img src={item} alt={`logo-${index}`} />
                </div>
              ))}
          </div> */}
        </div>

        {/* //why choose us  */}
        <section className="py-16 ">
          <div className="container mx-auto px-4 text-center text-black">
            <h2 className="text-3xl font-bold mb-6">Hvorfor velge oss?</h2>
            <p className="mb-12 text-lg">
              Med 20+ års erfaring, kvalitetsmaterialer og lidenskap for
              håndverk, garanterer vi førsteklasses resultat.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Erfaring</h3>
                <p>
                  20+ års erfaring i skreddersøm og kundetilpassede løsninger.
                </p>
              </div>
              <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
                <p>
                  Vi bruker kun nøye utvalgte stoffer og søm med høy presisjon.
                </p>
              </div>
              <div className="p-6 bg-[#2d3c2d] text-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">Kundetilfredshet</h3>
                <p>Vi lytter, tilpasser og leverer — hver gang.</p>
              </div>
            </div>
          </div>
        </section>

        {/* faq */}

        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Ofte stilte spørsmål
            </h2>
            <p className="text-xs md:text-base text-center max-w-3xl mx-auto mb-12">
              Har du et spørsmål om Luga? Se listen nedenfor for våre mest
              stilte spørsmål. Hvis spørsmålet ditt ikke står her, vennligst{" "}
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
                      className={`w-5 h-5 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-200 overflow-hidden ${openFaq === index ? "max-h-40 mt-4" : "max-h-0"
                      }`}
                  >
                    <p className=" text-sm">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* //feature  */}
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
                  Vi tar miljøet på alvor i våre standarder. Vi har faset ut
                  alle skadelige vaskemidler så mye som mulig.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-[#2d3c2d]">
                  <ThumbsUp className="w-10 h-10" fill="#2d3c2d" />
                </div>
                <h3 className="text-xl font-bold mb-3">FORNØYDGARANTI</h3>
                <p className="text-gray-600">
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
      </div>
    </main>
  );
}
