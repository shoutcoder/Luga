import React from "react";
import { ChevronRight } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 relative bg-[#2d3c2d] text-white overflow-hidden">
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
  );
};

export default ContactCTA;
