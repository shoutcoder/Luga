"use client"

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import EditVisitUsModal from "./EditVisitUsModal"; // Import the modal

export default function EditVisitUs() {
    const [editableLocations, setEditableLocations] = useState(locations);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleEditClick = (index: number) => {
        setEditingIndex(index);
        setIsModalOpen(true); // Open modal when edit is clicked
    };

    const handleSave = (editedLocation: any) => {
        const updatedLocations = [...editableLocations];
        updatedLocations[editingIndex!] = editedLocation;
        setEditableLocations(updatedLocations);
        setIsModalOpen(false) 
    };

    return (
        <section id="hours" className="py-14 bg-[#2d3c2d] text-white">
            <div className="container mx-auto px-4">
                <div className="border border-white mb-6 w-max mx-auto rounded-full flex items-center justify-center px-4 py-2 bg-[rgba(255, 255, 255, 0.05)]">
                    <h2 className="text-xs text-center">EDIT YOUR NEAREST LOCATION</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editableLocations.map((location, index) => (
                        <div
                            key={index}
                            className="border border-white rounded-[10px] text-center p-6"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={"/time.png"}
                                    width={100}
                                    height={100}
                                    alt="Location Image"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                            <p className="mb-4 text-center">{location.area}</p>
                            <div className="flex items-center justify-center mb-4">
                                <MapPin className="w-5 h-5 mr-2" />
                                <p className="text-sm">{location.address}</p>
                            </div>
                            <div className="border border-white/70 rounded-[15px] py-3 mb-4 w-70">
                                <h4 className="text-sm font-bold mb-2">OPENING TIMES</h4>
                                <p className="text-sm">Monday-Friday: {location.weekdayHours}</p>
                                <p className="text-sm">Saturday: {location.saturdayHours}</p>
                            </div>
                            <div className="flex items-center justify-center mb-6">
                                <Phone className="w-4 h-4 mr-2" />
                                <p className="text-sm">{location.phone}</p>
                            </div>
                            <button
                                onClick={() => handleEditClick(index)}
                                className="w-max border border-white px-10 rounded-full py-2 text-sm"
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Editing */}
            <EditVisitUsModal
                isOpen={isModalOpen}
                location={editableLocations[editingIndex!]}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </section>
    );
}

const locations = [
    {
        area: "Stockholm",
        address: "Sveavägen 98, 113 50 Stockholm",
        weekdayHours: "10:00-18:00",
        saturdayHours: "11:00-16:00",
        phone: "08-31 55 55",
    },
    {
        area: "Stockholm",
        address: "Sveavägen 98, 113 50 Stockholm",
        weekdayHours: "10:00-18:00",
        saturdayHours: "11:00-16:00",
        phone: "08-31 55 55",
    },
    {
        area: "Stockholm",
        address: "Sveavägen 98, 113 50 Stockholm",
        weekdayHours: "10:00-18:00",
        saturdayHours: "11:00-16:00",
        phone: "08-31 55 55",
    },
];
