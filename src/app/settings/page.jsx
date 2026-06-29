"use client";

import React, { useState } from "react";
import { Settings, Bell, User, Shield, Moon, Sun } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);

  return (
    <div className="min-h-screen bg-[#06121f] text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold flex items-center gap-3 mb-8">
          <Settings className="text-blue-400" size={38} />
          Settings
        </h1>

        <div className="space-y-6">

          {/* Profile Section */}
          <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <User className="text-blue-400" size={20} />
              Profile Settings
            </h2>

            <p className="text-gray-400">
              Manage your account information from Profile page
            </p>
          </div>

          {/* Notifications */}
          <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl p-6">

            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Bell className="text-blue-400" size={20} />
              Notifications
            </h2>

            {/* Toggle 1 */}
            <div className="flex items-center justify-between py-3 border-b border-blue-900">
              <span>Push Notifications</span>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                  notifications ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    notifications ? "ml-7" : "ml-0"
                  }`}
                />
              </button>
            </div>

            {/* Toggle 2 */}
            <div className="flex items-center justify-between py-3">
              <span>Email Notifications</span>

              <button
                onClick={() => setEmailNotif(!emailNotif)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                  emailNotif ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    emailNotif ? "ml-7" : "ml-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl p-6">

            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Moon className="text-blue-400" size={20} />
              Appearance
            </h2>

            <div className="flex items-center justify-between">
              <span>Dark Mode (Enabled by default)</span>

              <div className="flex items-center gap-2 text-blue-400">
                <Moon />
                <Sun />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl p-6">

            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Shield className="text-blue-400" size={20} />
              Security
            </h2>

            <p className="text-gray-400">
              Password change, 2FA, and login security options will be here.
            </p>

            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition">
              Change Password
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}