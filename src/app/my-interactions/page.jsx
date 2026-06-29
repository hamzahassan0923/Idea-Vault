"use client";

import React, { useState } from "react";
import { MessageCircle, Trash2, User } from "lucide-react";

export default function MyCommentsPage() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "You",
      message: "This idea is really strong 🚀",
      time: "2 min ago",
    },
    {
      id: 2,
      user: "You",
      message: "Need to improve battery optimization.",
      time: "1 hour ago",
    },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#06121f] text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <MessageCircle className="text-blue-400" size={38} />
            My Comments
          </h1>

          <p className="text-gray-400 mt-2">
            All comments you have posted
          </p>
        </div>

        {/* Comments */}
        <div className="space-y-4">

          {comments.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No comments found
            </div>
          ) : (
            comments.map((c) => (
              <div
                key={c.id}
                className="bg-[#0d1b2a] border border-blue-900 rounded-2xl p-5 flex justify-between items-start hover:bg-[#12263f] transition"
              >

                {/* Left */}
                <div className="flex gap-4">

                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-800">
                    <User className="text-blue-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-300">
                      {c.user}
                    </h3>

                    <p className="text-gray-300 mt-1">
                      {c.message}
                    </p>

                    <span className="text-xs text-gray-500">
                      {c.time}
                    </span>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => deleteComment(c.id)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}