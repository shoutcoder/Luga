import { useState, useEffect, useRef } from "react";

type Location = {
    area: string;
    address: string;
    phone: string;
    weekdayHours: string;
    saturdayHours:string,
};

type Props = {
    isOpen: boolean;
    location: Location;
    onClose: () => void;
    onSave: (editedLocation: Location) => void;
};

const EditVisitUsModal = ({ isOpen, location, onClose, onSave }: Props) => {
    const [editedLocation, setEditedLocation] = useState<Location>({
        area: "",
        address: "",
        phone: "",
        weekdayHours: "",
        saturdayHours:"",
    });
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location) setEditedLocation(location);
    }, [location]);

    const handleChange = (field: keyof Location, value: string) => {
        setEditedLocation((prev) => ({ ...prev, [field]: value }));
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg w-[35rem]">
                <h2 className="text-2xl mb-4">Edit Location</h2>

                <label className="block text-sm font-semibold mb-1">Area</label>
                <input
                    type="text"
                    className="w-full mb-4 p-2 border"
                    value={editedLocation.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                    placeholder="Area"
                />

                <label className="block text-sm font-semibold mb-1">Address</label>
                <input
                    type="text"
                    className="w-full mb-4 p-2 border"
                    value={editedLocation.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Address"
                />

                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                    type="text"
                    className="w-full mb-4 p-2 border"
                    value={editedLocation.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Phone"
                />

                <label className="block text-sm font-semibold mb-1">Weekday Hours</label>
                <input
                    type="text"
                    className="w-full mb-4 p-2 border"
                    value={editedLocation.weekdayHours}
                    onChange={(e) => handleChange("weekdayHours", e.target.value)}
                    placeholder="Weekday Hours"
                />
                <label className="block text-sm font-semibold mb-1">Saturday Hours</label>
                <input
                    type="text"
                    className="w-full mb-4 p-2 border"
                    value={editedLocation.saturdayHours}
                    onChange={(e) => handleChange("saturdayHours", e.target.value)}
                    placeholder="Weekday Hours"
                />
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(editedLocation)}
                        className="px-4 py-2 bg-[#2d3c2d] hover:bg-[#1b261b]  text-white rounded "
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditVisitUsModal;
