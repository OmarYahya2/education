import React from 'react';
import { TrendingUp, Clock, Target, Award, BarChart3 } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      id: 'listening',
      title: 'الاستماع',
      titleEn: 'Listening',
      value: '15%',
      description: 'تحدث لمدة 20 دقيقة',
      descriptionEn: 'Speak 20 minutes',
      icon: Clock,
      color: 'from-blue-500 to-blue-600',
      target: '20 دقيقة • 20 min'
    },
    {
      id: 'grammar',
      title: 'القواعد',
      titleEn: 'Grammar',
      value: '32%',
      description: 'تعلم 6 قواعد جديدة',
      descriptionEn: 'Learn 6 new rules',
      icon: Target,
      color: 'from-red-500 to-red-600',
      target: '6 قواعد • 6 rules'
    },
    {
      id: 'pronunciation',
      title: 'النطق',
      titleEn: 'Pronunciation',
      value: '71%',
      description: 'مارس لمدة 15 دقيقة',
      descriptionEn: 'Practice 15 minutes',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      target: '15 دقيقة • 15 min'
    },
    {
      id: 'dictionary',
      title: 'القاموس',
      titleEn: 'Dictionary',
      value: '64%',
      description: 'تعلم 8 كلمات جديدة',
      descriptionEn: 'Learn 8 new words',
      icon: Award,
      color: 'from-green-500 to-green-600',
      target: '8 كلمات • 8 words'
    }
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
            الإحصائيات
          </h2>
          <p className="text-blue-300 text-lg font-medium">Statistics</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 font-medium border border-gray-600">
            أغسطس 2021 • Aug 2021
          </button>
        </div>
      </div>
      
      {/* Progress Chart Area */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">نقاط التقدم</h3>
            <p className="text-blue-300 font-medium">Progress Score</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm"></div>
              <span className="text-gray-400 text-sm">المعدل العام • Average grade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
              <span className="text-gray-400 text-sm">الامتحانات • Exams</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mb-6 border border-gray-700">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-12 h-12 text-blue-400" />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">3.8</div>
            <div className="text-gray-400 mb-2">المعدل العام • Average Score</div>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4].map((star) => (
                <div key={star} className="w-6 h-6 bg-yellow-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-400">
          <span>يناير • Jan</span>
          <span>فبراير • Feb</span>
          <span>مارس • Mar</span>
          <span>أبريل • Apr</span>
          <span>مايو • May</span>
          <span>يونيو • Jun</span>
          <span>يوليو • Jul</span>
          <span>أغسطس • Aug</span>
          <span>سبتمبر • Sep</span>
          <span>أكتوبر • Oct</span>
          <span>نوفمبر • Nov</span>
          <span>ديسمبر • Dec</span>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-xl group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white font-semibold text-lg mb-1">{stat.title}</div>
              <div className="text-blue-300 text-sm font-medium mb-3">{stat.titleEn}</div>
              <div className="text-gray-400 text-sm mb-1">{stat.description}</div>
              <div className="text-gray-500 text-xs mb-3">{stat.descriptionEn}</div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="text-xs text-gray-400">الهدف • Target</div>
                <div className="text-sm text-white font-medium">{stat.target}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;