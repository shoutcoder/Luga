"use client";

import { Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const iconStyles = " w-5 h-5 md:w-6 md:h-6 transition-transform duration-300";

const socials = [
    {
        href: "https://facebook.com",
        Icon: Facebook,
        color: "hover:bg-blue-100 text-blue-600",
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
        color: "hover:bg-pink-100 text-pink-500",
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
        color: "hover:bg-green-100 text-green-600",
        label: "WhatsApp",
    }

];

export default function SocialMediaBar() {
    return (
        <div className="fixed h-fit bottom-1 md:top-1/3 right-0 md:right-0 z-50 flex flex-col gap-1.5 md:gap-2.5 bg-white backdrop-blur-sm shadow-xl p-1.5 md:p-2">
            {socials.map(({ href, Icon, color, label }, index) => (
                <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className={`group p-1.5 md:p-2 cursor-pointer ${color} transition-all duration-300`}
                    title={label}
                >
                    <Icon className={`${iconStyles} group-hover:scale-110`} />
                </Link>
            ))}
        </div>
    );
}
