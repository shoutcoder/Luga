import React from 'react';

export default function Bestill() {
  return (
    <div className="w-full">
      <iframe 
        src="https://repair.vandre.no/Luga/repair?language=no"
        className="w-full min-h-screen h-full border-none"
        title="Luga Repair"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
