// EditSlideModal.tsx
import React,{useEffect,useRef} from "react";

interface Slide {
  url: string;
  title: string;
  description: string;
  ctaButton: string
  ctaLink: string
}

interface EditSlideModalProps {
  isOpen: boolean;
  slide: Slide;
  onClose: () => void;
  onSave: (updatedSlide: Slide) => void;
  onChange: (field: string, value: string) => void;
}

const EditSlideModal: React.FC<EditSlideModalProps> = ({ isOpen, slide, onClose, onSave, onChange }) => {
  if (!isOpen) return null;
  
  const modalRef = useRef<HTMLDivElement>(null);
    
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 min-h-screen overflow-hidden -mt-8">
      <div ref={modalRef} className="bg-white rounded-xl p-6 w-full max-w-[35rem] shadow-xl space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Edit Slide</h3>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
          <input
            type="text"
            value={slide.url}
            onChange={(e) => onChange("image", e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
          <input
            type="text"
            value={slide.title}
            onChange={(e) => onChange("title", e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
          <textarea
            value={slide.description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Enter description"
            className="w-full h-40 border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1"> Button Title</label>
          <input
            type="text"
            value={slide.ctaButton}
            onChange={(e) => onChange("ctaButton", e.target.value)}
            placeholder="Enter Button title"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Button Link</label>
          <input
            type="text"
            value={slide.ctaLink}
            onChange={(e) => onChange("ctaLink", e.target.value)}
            placeholder="Enter Button Link"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-black px-4 py-1 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary text-white px-4 py-1 rounded-md"
            onClick={() => onSave(slide)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSlideModal;
