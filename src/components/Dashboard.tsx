import React from 'react';
import { Calendar, Clock, BookOpen, TrendingUp, Target, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const todayTasks = [
    { id: 1, title: 'إكمال درس القواعد 15', titleEn: 'Complete Grammar Lesson 15', time: '9:00 ص', status: 'completed' },
    { id: 2, title: 'ممارسة مهارات المحادثة', titleEn: 'Practice Conversation Skills', time: '2:00 م', status: 'pending' },
    { id: 3, title: 'اختبار المفردات: مصطلحات الأعمال', titleEn: 'Vocabulary Quiz: Business Terms', time: '4:30 م', status: 'pending' },
    { id: 4, title: 'مراجعة الأفعال المركبة', titleEn: 'Review Phrasal Verbs', time: '6:00 م', status: 'pending' }
  ];

  const recentAchievements = [
    { id: 1, title: 'خبير القواعد', titleEn: 'Grammar Master', description: 'أكمل 20 درس قواعد', descriptionEn: 'Completed 20 grammar lessons', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'بطل التتابع', titleEn: 'Streak Champion', description: 'تتابع تعلم لمدة 30 يوم', descriptionEn: '30-day learning streak', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { id: 3, title: 'خبير المفردات', titleEn: 'Vocabulary Expert', description: 'تعلم 500 كلمة جديدة', descriptionEn: 'Learned 500 new words', icon: Award, color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">
            مرحباً بعودتك، محرم 👋
          </h1>
          <p className="text-blue-300 text-lg font-medium mb-1">Welcome back, Maharram</p>
          <p className="text-gray-400">جاهز لمتابعة رحلة التعلم؟ • Ready to continue your learning journey?</p>
        </div>
        <div className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-xl">
          <p className="text-blue-100 text-sm mb-1">تقدم اليوم • Today's Progress</p>
          <div className="text-4xl font-bold text-white mb-2">75%</div>
          <div className="w-16 h-2 bg-blue-800 rounded-full mx-auto">
            <div className="w-3/4 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">إجمالي الدروس</p>
              <p className="text-blue-300 text-xs mb-2">Total Lessons</p>
              <p className="text-3xl font-bold text-white">142</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">وقت الدراسة</p>
              <p className="text-green-300 text-xs mb-2">Study Time</p>
              <p className="text-3xl font-bold text-white">24h</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">أيام التتابع</p>
              <p className="text-orange-300 text-xs mb-2">Streak Days</p>
              <p className="text-3xl font-bold text-white">15</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">متوسط النقاط</p>
              <p className="text-purple-300 text-xs mb-2">Avg. Score</p>
              <p className="text-3xl font-bold text-white">3.8</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">جدول اليوم</h3>
            <p className="text-blue-300 font-medium">Today's Schedule</p>
          </div>
          <Calendar className="w-8 h-8 text-blue-400" />
        </div>
        
        <div className="space-y-4">
          {todayTasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className={`w-4 h-4 rounded-full ${task.status === 'completed' ? 'bg-green-500' : 'bg-gray-500'} shadow-lg`}></div>
              <div className="flex-1">
                <p className={`font-semibold text-lg ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-white'}`}>
                  {task.title}
                </p>
                <p className={`text-sm ${task.status === 'completed' ? 'text-gray-500' : 'text-blue-300'}`}>
                  {task.titleEn}
                </p>
                <p className="text-gray-400 text-sm mt-1">{task.time}</p>
              </div>
              <button className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                task.status === 'completed' 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
              }`}>
                {task.status === 'completed' ? 'مكتمل • Completed' : 'ابدأ • Start'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">الإنجازات الأخيرة</h3>
          <p className="text-blue-300 font-medium">Recent Achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{achievement.title}</h4>
              <p className="text-blue-300 text-sm font-medium mb-2">{achievement.titleEn}</p>
              <p className="text-gray-400 text-sm mb-1">{achievement.description}</p>
              <p className="text-gray-500 text-xs">{achievement.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;