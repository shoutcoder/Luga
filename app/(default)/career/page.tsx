'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CareerPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    portfolio: '',
    consent: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'coverLetter') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setSubmitStatus({
          type: 'error',
          message: 'Filen er for stor. Maksimal størrelse er 10MB.'
        });
        return;
      }
      if (type === 'cv') setFile(file);
      else setCoverLetter(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });
      if (file) formDataToSend.append('cv', file);
      if (coverLetter) formDataToSend.append('coverLetter', coverLetter);

      const response = await fetch('/api/career-apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Takk for din søknad! Vi vil kontakte deg snart.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: '',
          portfolio: '',
          consent: false
        });
        setFile(null);
        setCoverLetter(null);
      } else {
        throw new Error('Kunne ikke sende søknaden');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Beklager, noe gikk galt. Vennligst prøv igjen senere.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Application Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Søk hos LUGA Skredderi & Rens</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Navn (Fornavn og etternavn) *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefonnummer (Valgfritt)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Hvilken stilling søker du? *
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                Last opp CV (PDF, maks 10 MB) *
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf"
                required
                onChange={(e) => handleFileChange(e, 'cv')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                Last opp søknadsbrev (Valgfritt, PDF eller DOCX)
              </label>
              <input
                type="file"
                id="coverLetter"
                name="coverLetter"
                accept=".pdf,.docx"
                onChange={(e) => handleFileChange(e, 'coverLetter')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                Lenke til portefølje/LinkedIn (Valgfritt)
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Hvorfor ønsker du å jobbe hos oss? (Maks 500 tegn)
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={500}
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2d3c2d] focus:border-transparent"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                Jeg godkjenner at mine opplysninger lagres og behandles i henhold til LUGA sin personvernerklæring. *
              </label>
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#2d3c2d] text-white rounded-md font-medium hover:bg-[#1a231a] transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sender...' : 'Send inn søknad'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;