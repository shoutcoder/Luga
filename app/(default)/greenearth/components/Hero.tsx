"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, MousePointer } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "./Motion";

export  function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://i.imgur.com/gO1E8E4.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      
      {/* Content container */}
      <div className="container relative z-10 px-4 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Leaf className="w-4 h-4 mr-2 text-teal-500" />
            <span className="text-sm font-medium text-white">Green Earth Cleaning</span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Miljøvennlig rens, luksuriøs omsorg
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oppdag hvordan moderne rens kan være både skånsom for klærne dine og ansvarlig for planeten vår – der bærekraft møter skjønnhet, og hvor hvert valg du tar bidrar til en grønnere fremtid.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <Button 
              size="lg" 
              className="bg-teal-600  hover:bg-teal-600/90 text-white border-none"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-transparent text-white hover:bg-white/20 hover:text-teal-500"
            >
              Learn More
            </Button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <MousePointer className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}