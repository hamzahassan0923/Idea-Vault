"use client";

import React, { useState } from "react";

import { User, Pencil, Save } from "lucide-react";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#06121f] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // if not logged in
  if (!session) {
    return (
      <div className="min-h-screen bg-[#06121f] text-white flex items-center justify-center">
        Please login first
      </div>
    );
  }

  const user = session.user;

  const handleEdit = () => {
    setName(user.name || "");
    setEmail(user.email || "");
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);

    // এখানে API call দিবা later
    console.log("Updated:", { name, email });
  };

  return (
    <div className="min-h-screen bg-[#06121f] text-white p-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <User className="text-blue-400" size={38} />
          My Profile
        </h1>

        {/* Card */}
        <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl p-8 shadow-2xl">

          {/* Profile Image */}
          <div className="flex flex-col items-center mb-8">

            <img
              src={user.image || "https://i.ibb.co/2dK6q1R/avatar.png"}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-600"
            />

            <h2 className="text-2xl font-bold mt-4">
              {user.name}
            </h2>

            <p className="text-gray-400">{user.email}</p>
          </div>

          {/* Form */}
          <div className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-gray-400 text-sm">Name</label>

              <input
                type="text"
                disabled={!editMode}
                value={editMode ? name : user.name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none disabled:opacity-60"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm">Email</label>

              <input
                type="email"
                disabled={!editMode}
                value={editMode ? email : user.email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none disabled:opacity-60"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">

              {!editMode ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
                >
                  <Pencil size={18} />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition"
                  >
                    <Save size={18} />
                    Save
                  </button>
                </>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}