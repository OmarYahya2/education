import React from 'react';
import { Bell, Sun, Moon, MessageCircle, Search } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <h1 className="text-2xl font-bold text-white mb-1">
              مساء الخير، محرم 👋
            </h1>
            <p className="text-blue-300 text-sm font-medium">Good evening, Maharram</p>
            <p className="text-gray-400 text-xs">جاهز لمتابعة رحلة التعلم؟ • Ready to continue learning?</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="البحث في الدروس... • Search courses..."
              className="bg-gray-800/50 backdrop-blur-sm text-white pl-10 pr-4 py-3 rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-96 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-600"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-300" />}
          </button>
          
          <button className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 relative border border-gray-600">
            <Bell className="w-5 h-5 text-gray-300" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </span>
          </button>
          
          <button className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-600">
            <MessageCircle className="w-5 h-5 text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-2 border border-gray-600">
            <div className="text-right">
              <p className="text-white font-semibold text-sm">محرم حسن</p>
              <p className="text-blue-300 text-xs">Maharram Hassan</p>
              <p className="text-gray-400 text-xs">طالب مميز • Premium Student</p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Profile"
                className="w-12 h-12 rounded-xl border-2 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;