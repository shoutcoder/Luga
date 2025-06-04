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
      answer: "LUGA ble grunnlagt med en enkel, men kraftfull idé: det må finnes en bedre måte å ta vare på klær – og kloden – samtidig. Med bakgrunn innen tekstil og design så vi et behov for en grønnere og mer bevisst tilnærming til renseri. Det startet som en visjon - og har vokst til en praksis."
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
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Hos LUGA AS bruker vi en moderne, trygg og miljøbevisst
rensemetode basert på BÜFA TDC 2000 - et avansert
hydrokarbonbasert rensemiddel utviklet i Tyskland. Det gir en
effektiv og skånsom rens, både for deg og miljøet.</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi kombinerer bærekraftige løsninger med eksepsjonell omsorg for klærne dine - fordi morgendagens valg begynner i dag.
          </p> */}
          <div className="flex flex-col gap-4 text-left mt-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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