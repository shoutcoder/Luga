import { useEffect,useRef } from "react";
interface EditServiceModalProps {
    isOpen: boolean;
    slide: { title: string; image: string };
    onClose: () => void;
    onSave: () => void;
    onChange: (field: string, value: string) => void;
  }
  
  const EditServiceModal = ({
    isOpen,
    slide,
    onClose,
    onSave,
    onChange,
  }: EditServiceModalProps) => {
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
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 min-h-screen">
        <div ref={modalRef} className="bg-white rounded-xl p-6 w-full max-w-[35rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Edit Service</h3>
  
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Service Title</label>
            <input
              type="text"
              value={slide.title}
              onChange={(e) => onChange("title", e.target.value)}
              placeholder="Enter title"
              className="w-full border rounded p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
            <input
              type="text"
              value={slide.image}
              onChange={(e) => onChange("image", e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded p-2"
            />
          </div>
  
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditServiceModal;
  