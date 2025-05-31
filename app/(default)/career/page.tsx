'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'design', name: 'Design', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'sales', name: 'Sales', count: 4 },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://ik.imagekit.io/vv/pexels-belle-co-99483-1000445.jpg?updatedAt=1748695037857"
            alt="Career opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Be part of something extraordinary. We're looking for talented individuals who want to make an impact.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We encourage creative thinking and new ideas',
                icon: '🚀',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible hours and remote work options',
                icon: '⚖️',
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career development',
                icon: '📈',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8">
            Don't see a position that matches your skills? Send us your resume anyway!
          </p>
          <Link href='#' className="px-8 py-3 bg-[#2d3c2d] text-white rounded-lg text-lg font-semibold transition-colors">
            Submit Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;