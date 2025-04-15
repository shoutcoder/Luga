import React, { useState,useRef,useEffect } from 'react';

const EditFaqModal = ({
  faq,
  title,
  onClose,
  onSave
}: {
  faq: { question: string; answer: string };
  title: string;
  onClose: () => void;
  onSave: (updatedFaq: { question: string; answer: string }) => void;
}) => {
  const [formData, setFormData] = useState(faq);
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
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center">
      <div  ref={modalRef} className="bg-white p-6 rounded-xl w-full max-w-[35rem] shadow-xl space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        
        <div className="text-left">
          <label className="block mb-1 font-medium">Question</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            placeholder="Enter the question"
          />
        </div>

        <div className="text-left">
          <label className="block mb-1 font-medium">Answer</label>
          <textarea
            className="w-full h-24 p-2 border rounded"
            value={formData.answer}
            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
            placeholder="Enter the answer"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#2d3c2d] text-white rounded hover:bg-[#1b261b]"
            onClick={() => onSave(formData)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFaqModal;
