import React from 'react';
import { Target, TrendingUp, Clock, BookOpen } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    { id: 1, title: 'إكمال 50 درس', titleEn: 'Complete 50 Lessons', progress: 75, current: 38, target: 50, icon: BookOpen },
    { id: 2, title: 'دراسة 30 ساعة', titleEn: 'Study 30 Hours', progress: 60, current: 18, target: 30, icon: Clock },
    { id: 3, title: 'تحسين النقاط', titleEn: 'Improve Score', progress: 40, current: 3.2, target: 4.0, icon: TrendingUp },
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">الأهداف</h2>
          <p className="text-blue-600 text-lg font-medium">Goals</p>
        </div>
        <Target className="w-8 h-8 text-blue-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <goal.icon className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-gray-800">{goal.progress}%</span>
            </div>
            <h4 className="text-gray-800 font-bold text-lg mb-1">{goal.title}</h4>
            <p className="text-blue-600 text-sm font-medium mb-4">{goal.titleEn}</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{goal.current}</span>
              <span>{goal.target}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;