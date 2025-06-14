"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "./Motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export  function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const questions = [
    {
      question: "Hva betyr dette for deg som kunde?",
      answer: "Klærne dine får lengre levetid, Ingen skadelige rester eller sterke lukter, Skånsom behandling - perfekt for plagg med høy affeksjonsverdi, Et trygt valg for deg, dine klær og planeten"
    },
    {
      question: "Vil du vite mer?",
      answer: "Vi deler gjerne mer informasjon om hvordan vi tar vare på klærne dine med moderne og ansvarlig tekstilpleie. Besøk oss gjerne eller kontakt oss for spørsmål!"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* <div className="mb-16">
          <Image
                src="https://ik.imagekit.io/vv/plant-8338691_1280.jpg?updatedAt=1748693559199"
                alt="Team working on environmental project"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-2xl mb-6"
                sizes="(max-width: 768px) 100%, 500px"
              />
          <h2 className="text-lg font-bold mb-4">
            Hos LUGA bruker vi en moderne, trygg og miljøbevisst
          rensemetode basert på BÜFA TDC 2000 - et avansert
          hydrokarbonbasert rensemiddel utviklet i Tyskland. Det gir en
          effektiv og skånsom rens, både for deg og miljøet.
          </h2>
        
          <h6 className="mt-12 text-xl font-semibold">Fordeler m e d var renseprosess:</h6>
          <div className="flex flex-col gap-4 text-left mt-4">
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Miljøbevisst teknologi</h3>
              <p className="text-sm text-muted-foreground">Lav miljøpåvirkning sammenlignet med tradisjonelle løsemidler, med reduserte utslipp og mindre avfall.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Bevarer tekstilenes kvalitet</h3>
              <p className="text-sm text-muted-foreground">Skånsom mot delikate materialer som ull, silke og broderier. Klærne holder seg pene lenger.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Mild og luktfri behandling</h3>
              <p className="text-sm text-muted-foreground">Etterlater klærne friske uten sterke kjemiske lukter.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Sikre og moderne maskiner</h3>
              <p className="text-sm text-muted-foreground">Vår teknologi sørger for nøyaktig kontroll og optimale resultater - hver gang.</p>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div 
            ref={ref}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
              <Image
                src="https://ik.imagekit.io/vv/plant-8338691_1280.jpg?updatedAt=1748693559199"
                alt="Team working on environmental project"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="">
            <h2 className="text-base md:text-xl font-bold mb-4">
                    Hos LUGA bruker vi en moderne, trygg og miljøbevisst
                    rensemetode basert på BÜFA TDC 2000 - et avansert
                    hydrokarbonbasert rensemiddel utviklet i Tyskland. Det gir en
                    effektiv og skånsom rens, både for deg og miljøet.
                  </h2>
          <h6 className="mt-12 text-base md:text-xl font-semibold">Fordeler m e d var renseprosess:</h6>
          <div className="flex flex-col gap-4 text-left mt-4">
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Miljøbevisst teknologi</h3>
              <p className="text-sm text-muted-foreground">Lav miljøpåvirkning sammenlignet med tradisjonelle løsemidler, med reduserte utslipp og mindre avfall.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Bevarer tekstilenes kvalitet</h3>
              <p className="text-sm text-muted-foreground">Skånsom mot delikate materialer som ull, silke og broderier. Klærne holder seg pene lenger.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Mild og luktfri behandling</h3>
              <p className="text-sm text-muted-foreground">Etterlater klærne friske uten sterke kjemiske lukter.</p>
            </div>
            <div className="pt-2">
              <h3 className="font-semibold mb-1">Sikre og moderne maskiner</h3>
              <p className="text-sm text-muted-foreground">Vår teknologi sørger for nøyaktig kontroll og optimale resultater - hver gang.</p>
            </div>
          </div>
                </div>
            </motion.div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
                {questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
        </Accordion>
        {/* <p className="mt-20 max-w-[80%] mx-auto text-center">Hos LUGA er bærekraft ikke bare en tjeneste det er en verdi vi lever etter. Når du velger oss, tar du et bevisst valg for både stil og miljø. Velkommen inn!</p> */}
      </div>
    </section>
  );
}