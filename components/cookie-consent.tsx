'use client';

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Godta"
      cookieName="luga_cookie_consent"
      style={{ 
        background: "#2d3c2d",
        fontFamily: "var(--font-poppins)",
      }}
      buttonStyle={{ 
        background: "#ffffff",
        color: "#2d3c2d",
        fontSize: "14px",
        padding: "10px 20px",
        borderRadius: "5px",
        fontWeight: "500"
      }}
      expires={365}
    >
      Vi bruker informasjonskapsler for å forbedre brukeropplevelsen på nettstedet vårt. Ved å fortsette å bruke dette nettstedet, godtar du vår bruk av informasjonskapsler.{" "}
      <Link href="/purchase-terms" className="text-white underline">
        Les mer
      </Link>
    </CookieConsent>
  );
}
