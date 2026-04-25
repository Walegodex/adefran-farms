"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Local Bakery Owner",
    content: "Adefran Farms has been supplying our bakery with eggs for over a year. The quality is unmatched, the yolks are rich, and deliveries are always on time.",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael O.",
    role: "Restaurant Manager",
    content: "We switched our broiler supply to Adefran and our customers noticed the difference. The meat is tender, healthy, and consistently sized.",
    initials: "MO"
  },
  {
    id: 3,
    name: "Aisha T.",
    role: "Home Consumer",
    content: "I buy their point-of-lay birds for my backyard setup. The birds are always fully vaccinated and start laying exactly when promised. Highly recommended!",
    initials: "AT"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-farm-primary/5 dark:bg-farm-primary/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-farm-primary mx-auto mb-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg border border-black/5 dark:border-white/5 relative"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-farm-secondary text-farm-primary hover:bg-farm-primary hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center font-bold text-lg leading-none">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
