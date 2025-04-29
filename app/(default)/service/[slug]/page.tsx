"use client";

const services = [
  {
    title: "Skredderi",
    description: [
      "Vi tar imot små og store oppdrag fra privatpersoner, bedrifter og institusjoner. Vår dyktige skredder har over 20 års erfaring innen konfeksjon og skreddersøm. Hos oss kan du få klær spesialtilpasset for perfekt passform.",
      "Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.",
    ],
    image: "/customer.jpg",
  },
  {
    title: "Nye Klær på Mål",
    description: [
      "Drømmer du om en unik dress, skjorte eller kjole? Vi syr klær etter dine mål. Du velger stoff, fòr, knapper og modell fra vårt galleri - eller tar med egne materialer og ideer!",
    ],
    image: "/customer.jpg",
  },
];

export default function Service() {
  return (
    <main className="min-h-screen mt-10 pt-24 text-white">
      <div className="container mx-auto px-4 text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-24 text-center">
          Skredderi
        </h1>

        {services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 mb-12">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  {service.description.map((para, i) => (
                    <p key={i} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="relative h-[300px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative h-[300px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  {service.description.map((para, i) => (
                    <p key={i} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
