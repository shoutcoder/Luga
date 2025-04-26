'use client';

import React, { useEffect, useState } from 'react';
import { ContactDetails, DeleteDetails } from '@/utils'; // update path
import ConfirmDeleteModal from '@/components/dashboard/common/ConfirmDeleteModal';
import { Trash2 } from 'lucide-react';

interface Contacts {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const EditContact = () => {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await ContactDetails();

      setContacts(result);
      setLoading(false);
    };

    fetchContacts();
  }, []);

  const openDeleteModal = (id: string) => {
    setSelectedContactId(id);
    setModalOpen(true);
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
    setSelectedContactId(null);
  };

  const confirmDelete = async () => {
    if (selectedContactId) {
      const success = await DeleteDetails(selectedContactId);
      if (success) {
        setContacts((prev) => prev.filter((contact) => contact.id !== selectedContactId));
      }
      closeDeleteModal();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">All Contact Messages</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-gray-600">No contact messages found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white shadow-lg p-5 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800"><strong>Name:</strong> {contact.name}</p>
                <p className="text-sm text-gray-600"><strong>Email:</strong> {contact.email}</p>
                <p className="text-sm text-gray-600"><strong>Message:</strong> {contact.message}</p>
                <p className="text-xs text-gray-500"><strong>Date:</strong> {contact.createdAt.toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => openDeleteModal(contact.id)}
                className="mt-3 md:mt-0 text-red-600 hover:text-red-800 transition-all duration-300 p-3 rounded-full bg-gray-100 hover:bg-red-100"
                title="Delete"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      )}

      <ConfirmDeleteModal
        open={modalOpen}
        title="Confirm Delete"
        message="Are you sure you want to delete this contact?"
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default EditContact;
