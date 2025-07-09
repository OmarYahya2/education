import React from 'react';
import { Trophy, Calendar, Target, Star, Award, BookOpen, TrendingUp, Users, Crown, Zap } from 'lucide-react';

interface UserProfileProps {
  user: any;
  darkMode: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, darkMode }) => {
  const achievements = [
    { icon: Trophy, color: 'from-yellow-500 to-orange-500', title: 'بطل التعلم', titleEn: 'Learning Champion' },
    { icon: Star, color: 'from-blue-500 to-indigo-600', title: 'نجم الأسبوع', titleEn: 'Star of the Week' },
    { icon: Award, color: 'from-purple-500 to-pink-600', title: 'خبير المفردات', titleEn: 'Vocabulary Expert' }
  ];

  const recentActivities = [
    { 
      icon: BookOpen, 
      color: 'from-emerald-500 to-emerald-600', 
      title: 'أكمل درس القواعد المتقدمة', 
      titleEn: 'Completed Advanced Grammar Lesson',
      time: 'منذ ساعتين',
      timeEn: '2 hours ago'
    },
    { 
      icon: Star, 
      color: 'from-blue-500 to-blue-600', 
      title: 'حصل على تقييم 5 نجوم', 
      titleEn: 'Earned 5-star rating',
      time: 'منذ يوم',
      timeEn: '1 day ago'
    },
    { 
      icon: Target, 
      color: 'from-purple-500 to-purple-600', 
      title: 'وصل للهدف الأسبوعي', 
      titleEn: 'Reached weekly goal',
      time: 'منذ 3 أيام',
      timeEn: '3 days ago'
    }
  ];

  return (
    <div className="w-96 border-l border-gray-200 p-6 space-y-6 shadow-lg transition-all duration-300 bg-white">
      {/* Profile Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <h3 className="font-bold text-xl text-gray-800">الملف الشخصي</h3>
          <Crown className="w-5 h-5 text-yellow-500" />
        </div>
        <p className="text-indigo-600 font-medium mb-6">User Profile</p>
        
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 rounded-3xl mx-auto p-1 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <h4 className="font-bold text-xl text-gray-800">{user.name}</h4>
          <p className="text-indigo-600 font-medium">{user.nameEn}</p>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-3 shadow-lg">
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-white" />
              <div className="text-center">
                <span className="text-white font-bold text-sm block">{user.level}</span>
                <span className="text-yellow-100 text-xs">{user.levelEn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">8</div>
          <div className="text-orange-100 text-xs font-medium">فصول دراسية</div>
          <div className="text-red-200 text-xs">Terms</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">156</div>
          <div className="text-blue-100 text-xs font-medium">دروس مكتملة</div>
          <div className="text-indigo-200 text-xs">Completed</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">32h</div>
          <div className="text-emerald-100 text-xs font-medium">ساعات دراسة</div>
          <div className="text-teal-200 text-xs">Study Hours</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 text-center shadow-lg">
          <div className="text-white text-2xl font-bold">4.8</div>
          <div className="text-purple-100 text-xs font-medium">متوسط التقييم</div>
          <div className="text-pink-200 text-xs">Avg Rating</div>
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-bold text-gray-800">الإنجازات الأخيرة</h5>
            <p className="text-indigo-600 text-sm">Recent Achievements</p>
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
            <span className="block">عرض الكل</span>
            <span className="text-xs">View all</span>
          </button>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-md group">
              <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{achievement.title}</p>
                <p className="text-xs text-indigo-600 font-medium">{achievement.titleEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-bold text-gray-800">النشاط الأخير</h5>
            <p className="text-indigo-600 text-sm">Recent Activity</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md group">
              <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <activity.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 mb-1">{activity.title}</p>
                <p className="text-xs text-indigo-600 font-medium mb-1">{activity.titleEn}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{activity.time}</span>
                  <span>•</span>
                  <span>{activity.timeEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upgrade Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-center space-y-2 mb-4">
            <h5 className="text-white font-bold text-lg">ترقية للنسخة الذهبية</h5>
            <p className="text-indigo-100 font-medium">Upgrade to Gold Premium</p>
            <p className="text-indigo-200 text-sm">افتح المزايا المتقدمة والوصول اللامحدود لجميع الدورات</p>
            <p className="text-indigo-300 text-xs">Unlock advanced features and unlimited access to all courses</p>
          </div>
          <button className="w-full bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20 hover:transform hover:scale-105">
            <span className="block text-base">ترقية الآن</span>
            <span className="text-sm opacity-80">Upgrade Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;