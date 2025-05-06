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
      question: "Hva er vårt oppdrag?",
      answer: "Vårt oppdrag er å forene luksus med ansvar. Vi ønsker å gi kundene våre muligheten til å ta miljøvennlige valg uten å ofre kvalitet eller komfort. Hos oss handler det ikke bare om å rense klær, men å inspirere til en livsstil hvor bærekraft, estetikk og ansvar går hånd i hånd."
    },
    {
      question: "Hvordan startet vi?",
      answer: "GLUGA ble grunnlagt med en enkel, men kraftfull idé: det må finnes en bedre måte å ta vare på klær – og kloden – samtidig. Med bakgrunn innen tekstil og design så vi et behov for en grønnere og mer bevisst tilnærming til renseri. Det startet som en visjon - og har vokst til en praksis."
    },
    {
      question: "Hva gjør vår metode unik?",
      answer: "Det handler ikke bare om teknologien, men om holdningen bak. Vi kombinerer tradisjonelt håndverk med moderne løsninger, og behandler hvert plagg med respekt – som om det var vårt eget. Vår bruk av flytende silikon som rensemiddel setter oss i en egen klasse når det gjelder mildhet, effektivitet og miljøbevissthet."
    },
    {
      question: "Hvordan kan du være med?",
      answer: "Å være en del av LUGA-familien betyr å velge med hjertet og handle med omtanke. Du kan støtte vårt arbeid ved å: Velge oss som ditt faste renseri, Dele vår historie med venner og familie, Engasjere deg i våre bærekraftsinitiativer og kundeevents, Følge oss på sosiale medier og hjelpe oss å spre budskapet."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Et renseri for fremtiden</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi kombinerer bærekraftige løsninger med eksepsjonell omsorg for klærne dine - fordi morgendagens valg begynner i dag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={ref}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
              <Image
                src="https://images.pexels.com/photos/3059608/pexels-photo-3059608.jpeg"
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
              {/* <div className="flex items-center space-x-2 mb-2">
                <span className="inline-block w-10 h-1 bg-teal-600 rounded-full"></span>
                <span className="text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Committed to a Sustainable Future</h3>
              <p className="text-white/80">
                Since 2017, we've been working tirelessly to develop and implement 
                environmental solutions that make a real difference.
              </p> */}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="">
                  <h3 className="text-2xl font-bold mb-4">Bærekraft møter kvalitet hos LUGA</h3>
                  <p className="text-muted-foreground mb-4">
                    Hos LUGA Skredderi & Rens tror vi på mer enn bare rene klær vi tror på rene valg. Derfor bruker vi miljøvennlig teknologi for å beskytte både plaggene dine og planeten vår.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Vi benytter en banebrytende metode som erstatter tradisjonelle, skadelige kjemikalier med flytende silikon, et trygt, luktfritt og skånsomt rensemiddel som er laget av naturlige elementer. Det er så mildt at det brukes i mange hudpleieprodukter, men samtidig effektivt nok til å ta vare på alt fra silke og kasjmir til paljetter og blonder.
                  </p>
                  <h3 className="text-2xl font-bold my-4">Hvorfor velge LUGA og vår grønne rensemetode?</h3>
                  <ul className="list-none list-inside space-y-2">
                    <li>
                    <strong>Skånsom pleie for klærne dine:</strong> Fargene holder seg klare, stoffene føles mykere, og selv de mest delikate materialene bevares lenger.
                    </li>
                    <li>
                    <strong>Helt trygt og allergivennlig:</strong> Ingen sterke lukter, ingen irritasjoner – bare ren komfort.
                    </li>
                    <li>
                    <strong>Et grønt valg for fremtiden:</strong> Vår rensemetode brytes ned til naturlige elementer uten å skade luft, jord eller vann. Det er bærekraft du faktisk kan kjenne.
                    </li>
                    <li>
                    <strong>Redusert energiforbruk:</strong> Metoden bruker mindre energi og vann enn tradisjonelle renseløsninger.
                    </li>
                  </ul>
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
        <p className="mt-20 max-w-[80%] mx-auto text-center">Hos LUGA er bærekraft ikke bare en tjeneste det er en verdi vi lever etter. Når du velger oss, tar du et bevisst valg for både stil og miljø. Velkommen inn!</p>
      </div>
    </section>
  );
}