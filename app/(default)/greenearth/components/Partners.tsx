"use client";

import { useRef } from "react";
import { motion } from "./Motion";
import { useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Building, Building2, LandPlot, Trees, Factory, Network } from "lucide-react";

const partners = [
  { id: 1, name: "EcoTech Solutions", icon: <Building className="h-8 w-8" /> },
  { id: 2, name: "Green Future Fund", icon: <Trees className="h-8 w-8" /> },
  { id: 3, name: "Sustainable Industries", icon: <Factory className="h-8 w-8" /> },
  { id: 4, name: "Global Conservation Alliance", icon: <LandPlot className="h-8 w-8" /> },
  { id: 5, name: "Urban Renewal Initiative", icon: <Building2 className="h-8 w-8" /> },
  { id: 6, name: "Environmental Research Network", icon: <Network className="h-8 w-8" /> },
];

export function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with organizations that share our commitment to sustainability
            and environmental stewardship.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-muted mb-4">
                {partner.icon}
              </div>
              <h3 className="font-medium">{partner.name}</h3>
            </motion.div>
          ))}
        </div>

        <Separator className="my-16" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { 
              title: "For Businesses", 
              description: "Partner with us to enhance your sustainability initiatives and reduce your environmental footprint.",
              items: ["Corporate Partnership Programs", "Sustainable Business Consulting", "Employee Engagement Initiatives"]
            },
            { 
              title: "For Organizations", 
              description: "Collaborate on joint projects and share resources to maximize our collective impact on environmental issues.",
              items: ["Joint Research Projects", "Knowledge Exchange Programs", "Collaborative Funding Opportunities"]
            },
            { 
              title: "For Communities", 
              description: "Work with us to implement sustainable solutions that address your community's specific environmental challenges.",
              items: ["Community Outreach Programs", "Local Sustainability Workshops", "Grassroots Environmental Initiatives"]
            }
          ].map((section, index) => (
            <div key={index} className="p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}