"use client";

import { motion } from "./Motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trees as Tree, Droplets, Sun, Users } from "lucide-react";
import CountUpAnimation from "@/components/ui/count-up";

const impactMetrics = [
  {
    id: 1,
    icon: <Tree className="h-8 w-8 text-chart-2" />,
    value: 50000,
    label: "Trees Planted",
    description: "Contributing to reforestation and carbon sequestration"
  },
  {
    id: 2,
    icon: <Droplets className="h-8 w-8 text-chart-2" />,
    value: 1200000,
    label: "Gallons of Water Saved",
    description: "Through conservation initiatives and efficient systems"
  },
  {
    id: 3,
    icon: <Sun className="h-8 w-8 text-chart-2" />,
    value: 3500,
    label: "Solar Panels Installed",
    description: "Generating clean, renewable energy for communities"
  },
  {
    id: 4,
    icon: <Users className="h-8 w-8 text-chart-2" />,
    value: 25000,
    label: "People Educated",
    description: "Spreading knowledge about sustainable practices"
  }
];

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="impact" 
      className="py-20 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent" />
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)/20) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
          <p className="text-muted-foreground">
            We measure our success through tangible impacts on the environment and communities.
            Here's what we've achieved together so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-teal-600">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-teal-500/10 text-teal-600 mb-4">
                      {metric.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                      <CountUpAnimation target={metric.value} duration={3} />
                      {metric.id === 2 && <span className="ml-1">+</span>}
                    </div>
                    <div className="text-lg font-medium mb-2">{metric.label}</div>
                    <p className="text-muted-foreground text-sm">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-teal-500/20 to-teal-800/20 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h3>
              <p className="mb-4">
                We believe in being fully transparent about our impact and how we measure it. 
                All of our projects undergo rigorous monitoring and evaluation to ensure we're 
                making a meaningful difference.
              </p>
              <p>
                Our annual impact reports provide detailed insights into our projects, 
                methodologies, and the data behind these numbers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: "75+" },
                { label: "Countries Reached", value: "12" },
                { label: "Tons of CO₂ Offset", value: "18,500" },
                { label: "Community Partners", value: "45+" }
              ].map((item, i) => (
                <div key={i} className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-lg md:text-xl font-bold">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}