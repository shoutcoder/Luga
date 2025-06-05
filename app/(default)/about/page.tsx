import { GallaryDetails, TeamMemberDetails } from "@/utils"
import Image from "next/image"

export default async function AboutPage() {
  const teamMember = await TeamMemberDetails()
  const gallary = await GallaryDetails()
  return (
    <main className="min-h-screen mt-10 pt-18 text-white">
      <div className="container mx-auto px-4 text-black">
        <h1 className="text-3xl md:text-4xl font-bold text-center">OM OSS</h1>
        <p className="text-center mb-12">Skredderi og renseri med fokus på kvalitet, bærekraft og personlig service</p>
        
        <div>
          <p className="mb-5">LUGA er en veletablert aktør innen skredderi og renseri, med avdelinger i Oslo, Sandvika, Strømmen og Drammen.
          Med over 15 000 reparasjoner og tilpasninger i året, har vi bygget en solid posisjon i tekstilbransjen, drevet av en sterk lidenskap for kvalitet, håndverk og bærekraft.</p>
          <p className="mb-5">Hos oss kan du få forlenget levetiden på dine klær, tilpasset plagg etter perfekt passform, renset alt fra hverdagsklær til bunader og skinn, samt produsert skreddersydde dresser, skjorter og kjoler etter dine mål.
          Vi tilbyr også spesialtilpasning av arbeidstøy og produksjon av mindre kleskolleksjoner, perfekt for lokale designere.</p>
        </div>

        <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-2">Vårt team</h2>
            <p className="mb-2">
              Bak LUGA står et sammensveiset team på 11 entusiastiske medarbeidere som elsker å arbeide med tekstiler.
              Vårt skredderteam består av både faglærte og svært erfarne håndverkere, som sammen sikrer høy kvalitet i alt vi gjør.
              Vi har også et sterkt nettverk av samarbeidspartnere i utlandet, som gir oss tilgang til førsteklasses stoffer til både festantrekk og arbeidsklær.
            </p>
            <p>
            LUGA ledes av en daglig leder med mastergrad innen økonomi og ledelse, samt over 20 års erfaring innen forretningsutvikling og salg.
            </p>
        </div>

        <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-2">Vår reise</h2>
            <p className="mb-2">
            LUGA sin reise startet i det små, med justeringer av klær på kjøkkenet hjemme hos vår daglige leder.
            Gjennombruddet kom da vi åpnet vår første butikk, med eget skredderverksted og alt av nødvendig utstyr.
            Dette ga oss friheten til å utvikle egne tjenester og tilby skreddersøm og tilpasning direkte til kundene.
            Siden den gang har vi vokst jevnt, bygget sterke partnerskap, og aldri sett oss tilbake.
            </p>
        </div>

        <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-2">Innovasjon og bærekraft</h2>
            <p className="mb-2">
            Et av våre viktigste vekstområder de siste årene har vært samarbeidet med vekterbransjen i Oslo og Akershus.
            I stedet for å kaste skadet arbeidstøy, tilbyr vi en helhetlig løsning med henting, gjennomgang, rens og reparasjon.
            Dette har spart våre partnere for store kostnader og redusert miljøbelastningen.
            Alt tøy som ikke kan repareres sendes til Norsk Tekstilgjenvinning, slik at vi sikrer en bærekraftig håndtering.
            </p>
            <p>Denne satsningen har alene bidratt til over 10 % av vår omsetning det siste året.</p>
        </div>

        <div className="flex flex-col mb-8">
            <h2 className="text-2xl font-bold mb-2">Vår filosofi</h2>
            <p className="mb-2">
            Hos LUGA handler det om mer enn klær.<br/>
            Vi tror på å forlenge plaggens liv, ta vare på ressurser, og gi kundene våre det beste innen skreddersøm, rens og tekstilpleie.
            Vi jobber hver dag for å levere kvalitet, personlig service og bærekraftige løsninger som gjør en forskjell.
            </p>
            <p>Velkommen til LUGA. Vi ser frem til å ta vare på dine klær!</p>
        </div>

        

        {/* Photo Gallery Section */}
        <section className="my-12">
          {/* <h2 className="text-3xl font-bold mb-12 text-center">Our Gallary</h2> */}
          <div className="">
            <Image
              src="https://ik.imagekit.io/vv/Untitled%20design.png?updatedAt=1747809795624"
              alt="Workshop image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
            {/* {gallary.map((img, index) => (
              <div key={index} className="relative h-[200px]">
                <Image
                  src={img.imageUrl}
                  alt={`Workshop image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            ))} */}
          </div>
        </section>

        {/* Company Culture Section */}
        {/* <section className="my-24 bg-gray-50 py-16 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a231a] p-3 rounded-full text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p>We invest in our team's growth through regular training and skill development programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a231a] p-3 rounded-full text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
                    <p>We foster a supportive workplace where creativity and innovation thrive.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg"
                  alt="Company Culture"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <main  className="flex justify-center">
          <div className=" flex gap-5 flex-wrap justify-center   ">
            {teamMember.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] w-[250px] mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          </main>
        </section>
      </div>
    </main>
  )
}
