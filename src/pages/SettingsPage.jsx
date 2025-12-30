import React from 'react';
import { User, Bell, Lock, Globe } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Account Settings</h1>
      
      {/* Profile Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
            <User size={20} /> Profile Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" defaultValue="Aasim" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" defaultValue="atasssolutions@gmail.com" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                <textarea rows="3" defaultValue="Full Stack Developer building cool things." className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"></textarea>
            </div>
        </div>
        <div className="mt-4 text-right">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">Save Changes</button>
        </div>
      </div>

      {/* Preferences Section (Dummy Toggles) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
            <Bell size={20} /> Notifications
        </h2>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium dark:text-white">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive emails about new orders.</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle-checkbox h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium dark:text-white">Dark Mode Default</p>
                    <p className="text-sm text-gray-500">Always start in dark mode.</p>
                </div>
                <input type="checkbox" className="toggle-checkbox h-5 w-5" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;