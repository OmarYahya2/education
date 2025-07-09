import React from 'react';
import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Calendar, 
  Settings, 
  Home,
  Target,
  Award,
  GraduationCap,
  Star,
  Crown
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, darkMode }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'الرئيسية', labelEn: 'Dashboard', color: 'from-blue-500 to-indigo-600' },
    { id: 'knowledge', icon: BookOpen, label: 'قاعدة المعرفة', labelEn: 'Knowledge Base', color: 'from-emerald-500 to-teal-600' },
    { id: 'statistics', icon: BarChart3, label: 'الإحصائيات', labelEn: 'Statistics', color: 'from-purple-500 to-indigo-600' },
    { id: 'calendar', icon: Calendar, label: 'التقويم', labelEn: 'Calendar', color: 'from-orange-500 to-red-600' },
    { id: 'achievements', icon: Award, label: 'الإنجازات', labelEn: 'Achievements', color: 'from-yellow-500 to-orange-600' },
    { id: 'goals', icon: Target, label: 'الأهداف', labelEn: 'Goals', color: 'from-pink-500 to-purple-600' },
    { id: 'community', icon: Users, label: 'المجتمع', labelEn: 'Community', color: 'from-cyan-500 to-blue-600' },
    { id: 'settings', icon: Settings, label: 'الإعدادات', labelEn: 'Settings', color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <div className="w-80 h-full border-r border-gray-200 flex flex-col shadow-lg transition-all duration-300 bg-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl relative">
            <GraduationCap className="w-7 h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-2 h-2 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-gray-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              أكاديمية التميز
            </div>
            <div className="text-indigo-600 font-semibold text-sm">
              Excellence Academy
            </div>
            <div className="text-gray-500 text-xs mt-1">
              منصة التعلم المتطور • Advanced Learning Platform
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
              activeTab === item.id
                ? `bg-gradient-to-r ${item.color} text-white shadow-xl transform scale-105`
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:shadow-md'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}>
                <item.icon className={`w-5 h-5 ${
                  activeTab === item.id 
                    ? 'text-white' 
                    : 'text-gray-500 group-hover:text-indigo-500'
                }`} />
              </div>
              <div className="text-right">
                <div className={`font-bold text-sm ${
                  activeTab === item.id 
                    ? 'text-white' 
                    : 'text-gray-700 group-hover:text-gray-800'
                }`}>
                  {item.label}
                </div>
                <div className={`text-xs ${
                  activeTab === item.id 
                    ? 'text-white/80' 
                    : 'text-gray-500 group-hover:text-indigo-500'
                }`}>
                  {item.labelEn}
                </div>
              </div>
            </div>
            
            {activeTab === item.id && (
              <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
            )}
          </button>
        ))}
      </nav>
      
      {/* Premium upgrade */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-3">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-bold text-base mb-1">الخطة الذهبية</div>
            <div className="text-yellow-100 text-sm mb-1">Premium Gold Plan</div>
            <div className="text-orange-100 text-xs mb-4">
              احصل على مزايا حصرية ووصول لامحدود
            </div>
            <div className="text-yellow-200 text-xs mb-4">
              Get exclusive features and unlimited access
            </div>
            <button className="w-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold py-3 px-4 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20">
              <span className="block">ترقية الآن</span>
              <span className="text-xs opacity-80">Upgrade Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;