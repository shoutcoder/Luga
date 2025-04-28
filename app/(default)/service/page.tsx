'use client'

export default function Service() {
  return (
    <main className="min-h-screen mt-10 pt-24 text-white">
      <div className="container mx-auto px-4 text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-24 text-center">Skredderi</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Skredderi</h2>
            <p className="mb-4">
            Vi tar imot små og store oppdrag fra privatpersoner, bedrifter og institusjoner. Vår dyktige skredder har over 20 års erfaring innen konfeksjon og skreddersøm. Hos oss kan du få klær spesialtilpasset for perfekt passform.
            </p>
            <p>
              Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.
            </p>
          </div>
          <div className="relative h-[300px]">
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-[300px]">
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Nye Klær på Mål</h2>
            <p className="mb-4">
            Drømmer du om en unik dress, skjorte eller kjole? Vi syr klær etter dine mål. Du velger stoff, fòr, knapper og modell fra vårt galleri - eller tar med egne materialer og ideer!
            </p>
            
          </div>
          
        </div>
      </div>
    </main>
  )
}
