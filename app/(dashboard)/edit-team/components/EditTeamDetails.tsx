"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  TeamMemberDetails,
  deleteTeamMember,
} from "@/utils";
import EditTeamDetailsModal from "./EditTeamDetailsModal";
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal";
import { Pencil, Trash2 } from "lucide-react";

const EditTeamDetails = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const fetchTeam = async () => {
    const data = await TeamMemberDetails();
    setTeam(data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <section className="my-24 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedMember(null);
            setEditOpen(true);
          }}
        >
          Add Member
        </button>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.id} className="text-center relative space-y-2">
            <div className="relative h-[240px]">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {/* <div className="flex justify-center gap-2 mt-2">
              <button
                className="text-sm text-blue-600 underline"
                onClick={() => {
                  setSelectedMember(member);
                  setEditOpen(true);
                }}
              >
                Edit
              </button>
              <button
                className="text-sm text-red-600 underline"
                onClick={() => {
                  setSelectedMember(member);
                  setDeleteOpen(true);
                }}
              >
                Delete
              </button>
            </div> */}
            <div className="absolute top-1 right-1 flex gap-2 opacity-100 transition">
              <button
                onClick={() => {
                  setSelectedMember(member);
                  setEditOpen(true);
                }}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => {
                  setSelectedMember(member);
                  setDeleteOpen(true);
                }}
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <Trash2 size={16} className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <EditTeamDetailsModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        member={selectedMember}
        onSuccess={fetchTeam}
      />

      <ConfirmDeleteModal
         title="Delete Member"
         message={`Are you sure you want to delete ${selectedMember?.name}?`}
      
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={async () => {
          if (selectedMember) {
            await deleteTeamMember(selectedMember.id);
            setDeleteOpen(false);
            fetchTeam();
          }
        }}
      />
    
    </section>
  );
};

export default EditTeamDetails;
