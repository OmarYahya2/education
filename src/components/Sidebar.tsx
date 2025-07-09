import React from 'react';
import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Calendar, 
  Settings, 
  Home,
  Target,
  Award
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'الرئيسية', labelEn: 'Dashboard' },
    { id: 'knowledge', icon: BookOpen, label: 'قاعدة المعرفة', labelEn: 'Knowledge Base' },
    { id: 'statistics', icon: BarChart3, label: 'الإحصائيات', labelEn: 'Statistics' },
    { id: 'calendar', icon: Calendar, label: 'التقويم', labelEn: 'Calendar' },
    { id: 'achievements', icon: Award, label: 'الإنجازات', labelEn: 'Achievements' },
    { id: 'goals', icon: Target, label: 'الأهداف', labelEn: 'Goals' },
    { id: 'community', icon: Users, label: 'المجتمع', labelEn: 'Community' },
    { id: 'settings', icon: Settings, label: 'الإعدادات', labelEn: 'Settings' },
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 h-full border-r border-gray-700 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-gray-700 bg-gray-900/50">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">منصة التعليم</div>
            <div className="text-sm text-blue-300 font-medium">EduPlatform</div>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === item.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white hover:transform hover:scale-102'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'}`} />
              <div className="text-right">
                <div className={`font-semibold text-sm ${activeTab === item.id ? 'text-white' : 'text-gray-300'}`}>
                  {item.label}
                </div>
                <div className={`text-xs ${activeTab === item.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {item.labelEn}
                </div>
              </div>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-center">
          <div className="text-white font-bold text-sm mb-1">الخطة المميزة</div>
          <div className="text-green-100 text-xs mb-3">Premium Plan</div>
          <button className="w-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-white/30 transition-all duration-300">
            ترقية الآن • Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;