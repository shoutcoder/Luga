import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
  newFeatureTitle: string;
  newFeatureImage: string;
  setNewFeatureTitle: (val: string) => void;
  setNewFeatureImage: (val: string) => void;
}

const AddFeatureModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onAdd,
  newFeatureTitle,
  newFeatureImage,
  setNewFeatureTitle,
  setNewFeatureImage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h3 className="text-xl font-semibold mb-4">Add New Feature Section</h3>
        <input
          type="text"
          placeholder="Feature title"
          value={newFeatureTitle}
          onChange={(e) => setNewFeatureTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newFeatureImage}
          onChange={(e) => setNewFeatureImage(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Feature
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFeatureModal;
