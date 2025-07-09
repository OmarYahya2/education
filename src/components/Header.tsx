import React from 'react';
import { Bell, Sun, Moon, MessageCircle, Search, LogOut, User, Star, Award } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  user: any;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, user, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">
                مساء الخير، {user.name} 
              </h1>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-lg">✨</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-indigo-600 font-medium">
                Good evening, {user.nameEn}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">جاهز لمتابعة رحلة التميز التعليمية؟</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-indigo-500 text-xs">Ready to continue your educational excellence journey?</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في الدروس والمواد التعليمية... • Search courses and materials..."
              className="bg-gray-50 text-gray-800 border border-gray-200 focus:border-indigo-500 pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-96 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800"
            title="تبديل الوضع • Toggle theme"
          >
            {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-500" />}
          </button>
          
          <button className="p-3 rounded-xl transition-all duration-300 relative bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">5</span>
            </span>
          </button>
          
          <button className="p-3 rounded-xl transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800">
            <MessageCircle className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-200 shadow-sm">
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <p className="font-bold text-gray-800">{user.name}</p>
                <Award className="w-4 h-4 text-yellow-500" />
              </div>
              <p className="text-indigo-600 text-sm font-medium">{user.nameEn}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-gray-600 text-xs">{user.level}</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-indigo-500 text-xs">{user.levelEn}</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Profile"
                className="w-14 h-14 rounded-xl border-2 border-indigo-500 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="p-3 rounded-xl transition-all duration-300 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300"
            title="تسجيل الخروج • Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;