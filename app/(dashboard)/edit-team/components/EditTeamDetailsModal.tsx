 import React, { useState, useEffect } from "react";
import { createTeamMember, updateTeamMember } from "@/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  member?: TeamMember | null;
}

const EditTeamDetailsModal: React.FC<Props> = ({ open, onClose, onSuccess, member }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name);
      setRole(member.role);
      setImageUrl(member.imageUrl);
    } else {
      setName("");
      setRole("");
      setImageUrl("");
    }
  }, [member]);

  const handleSubmit = async () => {
    const payload = { name, role, imageUrl };

    if (member?.id) {
      await updateTeamMember(member.id, payload);
    } else {
      await createTeamMember(payload);
    }

    onSuccess();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full space-y-4 shadow-xl">
        <h2 className="text-xl font-semibold">{member ? "Edit" : "Add"} Member</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full border px-3 py-2 rounded"
        />
        <div className="flex justify-end gap-3 pt-4">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTeamDetailsModal;

