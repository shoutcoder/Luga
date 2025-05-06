"use client"
import { useEffect, useState, useTransition } from "react";
import { Mail, MapPin, Phone } from "lucide-react"
import { CreateDetails, LocationsDetails } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const stores = [
  {
    name: "Main Store - Fashion District",
    address: "123 Tailor Street, Fashion District",
    city: "New York, NY 12345",
    phone: "+1 234 567 890",
    email: "nyc@example.com",
  },
  {
    name: "Downtown Boutique",
    address: "456 Style Avenue, Downtown",
    city: "Los Angeles, CA 90012",
    phone: "+1 234 567 891",
    email: "la@example.com",
  },
  {
    name: "Fashion Mall Store",
    address: "789 Designer Boulevard",
    city: "Miami, FL 33101",
    phone: "+1 234 567 892",
    email: "miami@example.com",
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<boolean | null>(null);
  const [locations, setLocations] = useState<Locations[]>([]);

  useEffect(()=>{
    fetchLocation()
  },[])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await CreateDetails(form);
      setSuccess(result);
      if (result) {
        setForm({ name: "", email: "", message: "" });
      }
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    });
  };
  const fetchLocation = async () => {
    try {
      const locations = await LocationsDetails();
      setLocations(locations);
    } catch (err) {
      setLocations([]);
    }
  };
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#1a231a] to-[#0a0f0a] py-16 mb-12">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0)] bg-[size:80px_140px]"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Kontakt oss</h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">Ta kontakt med teamet vårt for spørsmål om tjenestene våre eller besøk en av våre lokasjoner.</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-12 px-4">
        <div className="bg-gradient-to-br from-[#1a231a] to-[#141914] p-8 rounded-lg shadow-xl border border-[#2d3c2d]/20">
          <h2 className="text-2xl font-bold mb-6 text-white">Send oss en melding</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-gray-300">Navn</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">E-post</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                placeholder="your@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Beskjed</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                placeholder="Your message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-[#4a5f4a] to-[#3d4f3d] px-8 py-3 rounded-lg text-white font-semibold hover:from-[#5a7f5a] hover:to-[#4d6f4d] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isPending ? "Sender..." : "send melding"}
            </button>
            {success === true && <p className="text-green-400">Meldingen ble sendt!</p>}
            {success === false && <p className="text-red-400">Noe gikk galt.</p>}

          </form>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-black">Rask kontakt</h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg text-black">Trenger du øyeblikkelig hjelp? Ta direkte kontakt med oss:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-black" />
                <p className="text-black">+1 800 123 4567 (Toll-free)</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-black" />
                <p className="text-black">support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Store Locations Grid */}
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
                        <div className="flex items-center justify-center mb-6">
                          <Phone className="w-4 h-4 mr-2" />
                          <p className="text-sm">{location.phone}</p>
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

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Find Us on Map</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl border border-[#2d3c2d]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0zCsDQyJzQ2LjEiTiA3M8KwNTYnMDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </div>
    </main>
  )
}
