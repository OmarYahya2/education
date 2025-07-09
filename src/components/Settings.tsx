import React from 'react';
import { Settings as SettingsIcon, User, Bell, Globe, Shield } from 'lucide-react';

interface SettingsProps {
  user: any;
  setUser: (user: any) => void;
}

const Settings: React.FC<SettingsProps> = ({ user, setUser }) => {
  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">الإعدادات</h2>
          <p className="text-blue-600 text-lg font-medium">Settings</p>
        </div>
        <SettingsIcon className="w-8 h-8 text-blue-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800">الملف الشخصي • Profile</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">الاسم • Name</label>
              <input 
                type="text" 
                value={user.name}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني • Email</label>
              <input 
                type="email" 
                value={user.email}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800">الإشعارات • Notifications</h3>
          </div>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
              <span className="mr-3 text-gray-700">إشعارات الدروس • Lesson notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
              <span className="mr-3 text-gray-700">تذكيرات الأهداف • Goal reminders</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800">اللغة • Language</h3>
          </div>
          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>العربية والإنجليزية • Arabic & English</option>
            <option>العربية فقط • Arabic Only</option>
            <option>الإنجليزية فقط • English Only</option>
          </select>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800">الخصوصية • Privacy</h3>
          </div>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
              <span className="mr-3 text-gray-700">ملف عام • Public profile</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="mr-3 text-gray-700">إخفاء التقدم • Hide progress</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;