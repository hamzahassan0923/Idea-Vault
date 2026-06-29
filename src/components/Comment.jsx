"use client";

import React, { useState } from "react";
import { Send, MessageCircle, Trash2 } from "lucide-react";

export default function CommentSection() {
  const [text, setText] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Admin",
      message: "Welcome! Start commenting 🚀",
      time: "just now",
    },
  ]);

  const addComment = () => {
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      user: "You",
      message: text,
      time: "now",
    };

    setComments([newComment, ...comments]);
    setText("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="bg-[#0d1b2a] mt-7 border border-blue-900 rounded-3xl p-6 shadow-2xl text-white">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500/20 p-3 rounded-2xl border border-blue-800">
          <MessageCircle className="text-blue-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Comments</h2>
          <p className="text-gray-400 text-sm">
            Share your thoughts below
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-4 mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full bg-[#12263f] border border-blue-900 rounded-2xl p-4 text-white outline-none focus:border-blue-500 resize-none"
          rows={4}
        />

        <button
          onClick={addComment}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-900/40"
        >
          <Send size={18} />
          Post Comment
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-[#12263f] border border-blue-900 rounded-2xl p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-blue-300 font-semibold">
                  {c.user}
                </h4>

                <p className="text-gray-300 mt-2">{c.message}</p>

                <span className="text-gray-500 text-xs">
                  {c.time}
                </span>
              </div>

              <button
                onClick={() => deleteComment(c.id)}
                className="text-red-400 hover:text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}