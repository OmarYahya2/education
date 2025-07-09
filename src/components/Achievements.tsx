import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    { id: 1, title: 'خبير القواعد', titleEn: 'Grammar Master', icon: Award, earned: true, color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'بطل التتابع', titleEn: 'Streak Champion', icon: Trophy, earned: true, color: 'from-emerald-500 to-emerald-600' },
    { id: 3, title: 'نجم المحادثة', titleEn: 'Conversation Star', icon: Star, earned: false, color: 'from-yellow-500 to-orange-500' },
    { id: 4, title: 'محقق الأهداف', titleEn: 'Goal Achiever', icon: Target, earned: false, color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">الإنجازات</h2>
          <p className="text-blue-600 text-lg font-medium">Achievements</p>
        </div>
        <Award className="w-8 h-8 text-blue-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center transition-all duration-300 ${
            achievement.earned ? 'hover:transform hover:scale-105' : 'opacity-60'
          }`}>
            <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${
              !achievement.earned && 'grayscale'
            }`}>
              <achievement.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-gray-800 font-bold text-lg mb-1">{achievement.title}</h4>
            <p className="text-blue-600 text-sm font-medium">{achievement.titleEn}</p>
            <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${
              achievement.earned 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              {achievement.earned ? 'محقق • Earned' : 'مقفل • Locked'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;