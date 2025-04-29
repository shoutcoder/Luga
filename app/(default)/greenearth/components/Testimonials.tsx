"use client";

import { useRef } from "react";
import { motion } from "./Motion";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "GreenEarth's reforestation project transformed our neighborhood. Not only did it beautify the area, but it also brought our community together with a shared purpose of environmental stewardship."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Partner Organization",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "Working with GreenEarth has been an incredible experience. Their team is knowledgeable, passionate, and truly committed to creating sustainable environmental solutions that work for everyone involved."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Volunteering with GreenEarth has been life-changing. The organization doesn't just talk about making a difference—they actually do it, and they empower others to join the cause in meaningful ways."
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Corporate Partner",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "As a business looking to improve our sustainability practices, GreenEarth provided expert guidance and practical solutions that helped us reduce our environmental impact while also saving costs."
  }
];

export  function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      
      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-muted/30"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say About Us</h2>
            <p className="text-muted-foreground">
              Hear from the communities, volunteers, and partners who have experienced
              the impact of our environmental initiatives firsthand.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="overflow-x-auto hide-scrollbar"
          ref={scrollRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="w-[340px] md:w-[420px] flex-shrink-0"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-teal-600/40" />
                  </div>
                  <blockquote className="italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}