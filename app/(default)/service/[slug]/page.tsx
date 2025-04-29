"use client";

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
  return (
    <main className="min-h-screen mt-10  text-white bg-gradient-to-t from-black/0 to-[#2d3c2d]">
      <div className="backdrop-blur-sm bg-black/50 w-full h-full">
        <div className="container mx-auto px-4 text-white py-16">
          <h1 className="text-3xl md:text-6xl font-bold mb-12 text-center">
            {sevices.title}
          </h1>

          <p className="text-center mb-12 md:text-lg ">{sevices?.desc}</p>

          {sevices.feature.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 items-center gap-8 mb-12"
            >
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

          <div className="flex items-center  justify-around gap-10 mt-16">
            {sevices?.logo &&
              sevices.logo.map((item, index) => (
                <div key={index}>
                  <img src={item} alt={`logo-${index}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
