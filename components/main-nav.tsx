"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/mobile-nav";
import Role from "./dashboard/common/Role";
import { Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react"
const iconStyles = " w-4 h-4 md:w-4 md:h-4 transition-transform duration-300";

const socials = [
    {
        href: "https://facebook.com",
        Icon: Facebook,
        color: "hover:bg-blue-100 text-black",
        label: "Facebook",
    },
    //   {
    //     href: "https://twitter.com",
    //     Icon: Twitter,
    //     color: "hover:bg-sky-100 text-sky-500",
    //     label: "Twitter",
    //   },
    {
        href: "https://twitter.com",
        Icon: X,
        color: "hover:bg-black/10 text-black",
        label: "X (Twitter)",
    },
    {
        href: "https://instagram.com",
        Icon: Instagram,
        color: "hover:bg-pink-100 text-black",
        label: "Instagram",
    },
    //   {
    //     href: "https://linkedin.com",
    //     Icon: Linkedin,
    //     color: "hover:bg-blue-200 text-blue-800",
    //     label: "LinkedIn",
    //   },
    {
        href: "https://wa.me/919999999999",
        Icon: FaWhatsapp,
        color: "hover:bg-green-100 text-black",
        label: "WhatsApp",
    }

];

export default function MainNav() {
  const pathname = usePathname();
  const isHome = pathname === "/"  ;
  const isGreenEarth = pathname === "/greenearth"  ;
  return (
    <div>
      <div className="flex justify-between bg-white text-white py-2">
              <div className="flex items-center px-4 md:px-16 gap-4">
                {socials.map(({ href, Icon, color, label }, index) => (
                    <Link
                        key={index}
                        href={href}
                        target="_blank"
                        className={`group cursor-pointer ${color} transition-all duration-300`}
                        title={label}
                    >
                        <Icon className={`${iconStyles} group-hover:scale-110`} />
                    </Link>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 px-4 md:px-16">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-black" />
                  <p className="text-black text-xs">+1 800 123 4567 (Toll-free)</p>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-black" />
                  <p className="text-black text-xs">support@example.com</p>
                </div>
              </div>

      </div>
      <nav
        className={`bg-[#2d3c2d] z-50 flex items-center justify-between px-4 py-3 md:px-16 md:py-6 backdrop-blur-md ${
          isGreenEarth ? "bg-[#2d3c2d]" : isHome ? "" : "bg-[#2d3c2d]"
        }`}
      >
        <div className="  hidden md:flex items-center space-x-6 text-white">
          <Link href="/" className="text-sm font-medium">
            Hjem
          </Link>
          <Link href="/about" className="text-sm font-medium">
            Om
          </Link>
          <Link href="/#services" className="text-sm font-medium">
            Tjenester
          </Link>
        </div>
        <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/logo.png"
            width={130}
            height={70}
            alt=""
            className="w-[100px] h-[60px]"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link href="/pricing" className="text-sm font-medium">
            Priser
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Kontakt
          </Link>
          <Role />
        </div>
        <MobileNav />
      </nav>
    </div>
  );
}
