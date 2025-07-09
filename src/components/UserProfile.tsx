import React from 'react';
import { Trophy, Calendar, Target, Star, Award, BookOpen } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="w-80 bg-gradient-to-b from-gray-900 to-gray-800 border-l border-gray-700 p-6 space-y-6 shadow-2xl">
      <div className="text-center">
        <h3 className="text-white font-bold text-lg mb-1">الملف الشخصي</h3>
        <p className="text-blue-300 text-sm font-medium mb-4">User Profile</p>
        
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto p-1 shadow-xl">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-gray-900 shadow-lg"></div>
        </div>
        
        <h4 className="text-white font-bold text-lg">محرم حسن</h4>
        <p className="text-blue-300 text-sm font-medium">Maharram Hassan</p>
        <p className="text-gray-400 text-xs mb-4">طالب مميز • Premium Student</p>
        
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-center space-x-2">
            <Award className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">المستوى الذهبي • Gold Level</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">5</div>
          <div className="text-orange-100 text-xs font-medium">فصول • Terms</div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">98</div>
          <div className="text-blue-100 text-xs font-medium">دروس • Lessons</div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-white font-bold">النشاط الأخير</h5>
            <p className="text-blue-300 text-sm">Recent Activity</p>
          </div>
          <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300 font-medium">
            عرض الكل • View all
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">أكمل اختبار القواعد</p>
              <p className="text-green-300 text-xs font-medium">Completed Grammar Quiz</p>
              <p className="text-gray-400 text-xs">منذ ساعتين • 2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">حصل على 5 نجوم</p>
              <p className="text-blue-300 text-xs font-medium">Earned 5-star rating</p>
              <p className="text-gray-400 text-xs">منذ يوم • 1 day ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">وصل للهدف الأسبوعي</p>
              <p className="text-purple-300 text-xs font-medium">Reached weekly goal</p>
              <p className="text-gray-400 text-xs">منذ 3 أيام • 3 days ago</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-center mb-3">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h5 className="text-white font-bold text-center mb-2">ترقية للنسخة المتقدمة</h5>
        <p className="text-blue-100 text-sm text-center mb-1">Upgrade to Pro</p>
        <p className="text-blue-200 text-xs text-center mb-4">افتح المزايا المتقدمة والوصول اللامحدود</p>
        <button className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
          ترقية الآن • Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default UserProfile;