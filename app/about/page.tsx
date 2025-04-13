import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen mt-10 pt-24 text-white">
      <div className="container mx-auto px-4 text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-24 text-center">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Since our establishment, we have been providing high-quality tailoring and garment services to our valued customers. With decades of experience in the industry, we take pride in our craftsmanship and attention to detail.
            </p>
            <p>
              Our team of skilled tailors and fashion experts work diligently to ensure each piece meets our high standards of quality and style.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="p-6 bg-[#1a231a] rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p>To provide exceptional tailoring services that help our clients look and feel their best.</p>
          </div>
          <div className="p-6 bg-[#1a231a] rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p>To be the most trusted name in bespoke tailoring and garment services.</p>
          </div>
          <div className="p-6 bg-[#1a231a] rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p>Quality, integrity, and customer satisfaction are at the heart of everything we do.</p>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Gallary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['workshop1.jpg', 'workshop2.jpg', 'workshop3.jpg', 'workshop4.jpg'].map((img, index) => (
              <div key={index} className="relative h-[200px]">
                <Image
                  src={`/placeholder.svg`}
                  alt={`Workshop image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="my-24 bg-gray-50 py-16 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a231a] p-3 rounded-full text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p>We invest in our team's growth through regular training and skill development programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a231a] p-3 rounded-full text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
                    <p>We foster a supportive workplace where creativity and innovation thrive.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg"
                  alt="Company Culture"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="my-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'Master Tailor', image: '/placeholder.svg' },
              { name: 'Jane Smith', role: 'Design Lead', image: '/placeholder.svg' },
              { name: 'Mike Johnson', role: 'Pattern Maker', image: '/placeholder.svg' },
              { name: 'Sarah Williams', role: 'Quality Control', image: '/placeholder.svg' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
