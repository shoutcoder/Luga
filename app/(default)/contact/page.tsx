import { Mail, MapPin, Phone } from "lucide-react"

const stores = [
  {
    name: "Main Store - Fashion District",
    address: "123 Tailor Street, Fashion District",
    city: "New York, NY 12345",
    phone: "+1 234 567 890",
    email: "nyc@example.com",
  },
  {
    name: "Downtown Boutique",
    address: "456 Style Avenue, Downtown",
    city: "Los Angeles, CA 90012",
    phone: "+1 234 567 891",
    email: "la@example.com",
  },
  {
    name: "Fashion Mall Store",
    address: "789 Designer Boulevard",
    city: "Miami, FL 33101",
    phone: "+1 234 567 892",
    email: "miami@example.com",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#1a231a] to-[#0a0f0a] py-16 mb-12">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(30deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(150deg,_#4a5f4a_12%,_transparent_12.5%,_transparent_87%,_#4a5f4a_87.5%,_#4a5f4a_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0),_linear-gradient(60deg,_#4a5f4a77_25%,_transparent_25.5%,_transparent_75%,_#4a5f4a77_75%,_#4a5f4a77_0)] bg-[size:80px_140px]"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Contact Us</h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">Get in touch with our team for any inquiries about our services or visit one of our locations.</p>
        </div>
      </div>

{/* Contact Form Section */}
<div className="grid md:grid-cols-2 gap-12 mb-12 px-4">
          <div className="bg-gradient-to-br from-[#1a231a] to-[#141914] p-8 rounded-lg shadow-xl border border-[#2d3c2d]/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg bg-[#2d3c2d]/50 border border-[#4a5f4a]/50 focus:border-[#6a8f6a] transition-colors outline-none text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#4a5f4a] to-[#3d4f3d] px-8 py-3 rounded-lg text-white font-semibold hover:from-[#5a7f5a] hover:to-[#4d6f4d] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-black">Quick Contact</h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg text-black">Need immediate assistance? Reach out to us directly:</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-black" />
                  <p className="text-black">+1 800 123 4567 (Toll-free)</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-black" />
                  <p className="text-black">support@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="container mx-auto px-4">
        {/* Store Locations Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stores.map((store, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a231a] to-[#141914] p-6 rounded-lg shadow-xl hover:translate-y-[-4px] transition-all duration-300 border border-[#2d3c2d]/20">
              <h3 className="text-xl font-bold mb-4 text-white">{store.name}</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-4 group">
                  <MapPin className="w-6 h-6 mt-1 text-[#4a5f4a] group-hover:text-[#6a8f6a] transition-colors" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.city}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Phone className="w-6 h-6 mt-1 text-[#4a5f4a] group-hover:text-[#6a8f6a] transition-colors" />
                  <p>{store.phone}</p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Mail className="w-6 h-6 mt-1 text-[#4a5f4a] group-hover:text-[#6a8f6a] transition-colors" />
                  <p>{store.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Find Us on Map</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl border border-[#2d3c2d]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0zCsDQyJzQ2LjEiTiA3M8KwNTYnMDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        
      </div>
    </main>
  )
}
