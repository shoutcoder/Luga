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
      question: "What is our mission?",
      answer: "Our mission is to create a sustainable future through innovative environmental solutions, community engagement, and education. We believe that by working together, we can make a significant impact on our planet's health."
    },
    {
      question: "How did we start?",
      answer: "GreenEarth was founded in 2017 by a group of environmental scientists and activists who recognized the urgent need for practical, community-driven solutions to environmental challenges. What started as a small local initiative has grown into a global movement."
    },
    {
      question: "What makes our approach unique?",
      answer: "We combine scientific expertise with community engagement, ensuring that our solutions are both effective and embraced by the people they impact. Our projects are designed to be sustainable, scalable, and adaptable to different contexts and needs."
    },
    {
      question: "How can you get involved?",
      answer: "There are many ways to contribute to our mission! You can volunteer for our projects, donate to support our initiatives, participate in our educational programs, or simply adopt more sustainable practices in your daily life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about our journey, values, and the impact we're making together for a sustainable planet.
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
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-block w-10 h-1 bg-teal-600 rounded-full"></span>
                <span className="text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Committed to a Sustainable Future</h3>
              <p className="text-white/80">
                Since 2017, we've been working tirelessly to develop and implement 
                environmental solutions that make a real difference.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Why We Do What We Do</h3>
                <p className="text-muted-foreground mb-4">
                  At GreenEarth, we believe that creating a sustainable future requires 
                  both innovative solutions and community engagement. Our work spans across
                  multiple areas including conservation, renewable energy, sustainable agriculture,
                  and environmental education.
                </p>
                <p className="text-muted-foreground">
                  With each project, we strive to create lasting change that benefits 
                  both people and the planet, ensuring a healthier world for future generations.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}