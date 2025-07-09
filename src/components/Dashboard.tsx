import React from 'react';
import { Calendar, Clock, BookOpen, TrendingUp, Target, Award, Play, CheckCircle, Star, Trophy, Zap, Users } from 'lucide-react';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const todayTasks = [
    { id: 1, title: 'إكمال درس القواعد المتقدمة', titleEn: 'Complete Advanced Grammar Lesson', time: '9:00 ص', status: 'completed', difficulty: 'متقدم', difficultyEn: 'Advanced' },
    { id: 2, title: 'ممارسة مهارات المحادثة التفاعلية', titleEn: 'Practice Interactive Conversation Skills', time: '2:00 م', status: 'pending', difficulty: 'متوسط', difficultyEn: 'Intermediate' },
    { id: 3, title: 'اختبار المفردات: مصطلحات الأعمال', titleEn: 'Vocabulary Quiz: Business Terms', time: '4:30 م', status: 'pending', difficulty: 'متقدم', difficultyEn: 'Advanced' },
    { id: 4, title: 'مراجعة الأفعال المركبة والتطبيق', titleEn: 'Review Phrasal Verbs and Practice', time: '6:00 م', status: 'pending', difficulty: 'متوسط', difficultyEn: 'Intermediate' }
  ];

  const recentAchievements = [
    { 
      id: 1, 
      title: 'خبير القواعد النحوية', 
      titleEn: 'Grammar Master Expert', 
      description: 'أكمل 25 درس قواعد متقدم', 
      descriptionEn: 'Completed 25 advanced grammar lessons', 
      icon: BookOpen, 
      color: 'from-blue-500 via-blue-600 to-indigo-700',
      points: 250
    },
    { 
      id: 2, 
      title: 'بطل التتابع الذهبي', 
      titleEn: 'Golden Streak Champion', 
      description: 'تتابع تعلم لمدة 45 يوم متواصل', 
      descriptionEn: '45-day continuous learning streak', 
      icon: TrendingUp, 
      color: 'from-emerald-500 via-emerald-600 to-teal-700',
      points: 450
    },
    { 
      id: 3, 
      title: 'عبقري المفردات', 
      titleEn: 'Vocabulary Genius', 
      description: 'تعلم 750 كلمة جديدة بإتقان', 
      descriptionEn: 'Mastered 750 new vocabulary words', 
      icon: Award, 
      color: 'from-purple-500 via-purple-600 to-indigo-700',
      points: 750
    }
  ];

  const weeklyProgress = [
    { day: 'السبت', dayEn: 'Sat', progress: 85, lessons: 3 },
    { day: 'الأحد', dayEn: 'Sun', progress: 92, lessons: 4 },
    { day: 'الاثنين', dayEn: 'Mon', progress: 78, lessons: 2 },
    { day: 'الثلاثاء', dayEn: 'Tue', progress: 95, lessons: 5 },
    { day: 'الأربعاء', dayEn: 'Wed', progress: 88, lessons: 3 },
    { day: 'الخميس', dayEn: 'Thu', progress: 91, lessons: 4 },
    { day: 'الجمعة', dayEn: 'Fri', progress: 75, lessons: 2 }
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Welcome Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  مرحباً بعودتك، {user.name} 🌟
                </h1>
                <p className="text-blue-100 text-lg font-medium">Welcome back, {user.nameEn}</p>
                <p className="text-blue-200 text-sm">جاهز لمتابعة رحلة التميز التعليمية؟</p>
                <p className="text-blue-300 text-xs">Ready to continue your educational excellence journey?</p>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-100 text-sm font-medium">تقدم اليوم</span>
            </div>
            <p className="text-blue-200 text-xs mb-3">Today's Progress</p>
            <div className="text-4xl font-bold mb-3">87%</div>
            <div className="w-20 h-3 bg-blue-800/50 rounded-full overflow-hidden">
              <div className="w-4/5 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">156</div>
              <div className="text-xs text-gray-500">إجمالي الدروس</div>
              <div className="text-xs text-blue-600">Total Lessons</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <span className="text-sm font-medium text-blue-600">78%</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">32h</div>
              <div className="text-xs text-gray-500">وقت الدراسة</div>
              <div className="text-xs text-emerald-600">Study Time</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <span className="text-sm font-medium text-emerald-600">65%</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">28</div>
              <div className="text-xs text-gray-500">أيام التتابع</div>
              <div className="text-xs text-orange-600">Streak Days</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '93%' }}></div>
            </div>
            <span className="text-sm font-medium text-orange-600">93%</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">4.2</div>
              <div className="text-xs text-gray-500">متوسط النقاط</div>
              <div className="text-xs text-purple-600">Avg. Score</div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">جدول اليوم التعليمي</h3>
              <p className="text-indigo-600 font-medium">Today's Learning Schedule</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">4</div>
              <div className="text-xs text-gray-500">مهام</div>
              <div className="text-xs text-indigo-600">Tasks</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-600">1</div>
              <div className="text-xs text-gray-500">مكتمل</div>
              <div className="text-xs text-emerald-600">Done</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {todayTasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-md group">
              <div className={`w-5 h-5 rounded-full ${task.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-400'} shadow-sm flex items-center justify-center`}>
                {task.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className={`font-semibold text-lg ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                    {task.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.difficulty === 'متقدم' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {task.difficulty}
                  </span>
                </div>
                <p className={`text-sm mb-1 ${task.status === 'completed' ? 'text-gray-400' : 'text-indigo-600'}`}>
                  {task.titleEn}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{task.time}</span>
                  <span>•</span>
                  <span>{task.difficultyEn}</span>
                </div>
              </div>
              
              <button className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                task.status === 'completed' 
                  ? 'bg-emerald-100 text-emerald-700 cursor-default' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl group-hover:scale-105'
              }`}>
                {task.status === 'completed' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>مكتمل</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>ابدأ</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Progress & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">التقدم الأسبوعي</h3>
              <p className="text-blue-600 font-medium">Weekly Progress</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-center">
                  <div className="text-sm font-medium text-gray-800">{day.day}</div>
                  <div className="text-xs text-gray-500">{day.dayEn}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">{day.lessons} دروس</span>
                    <span className="text-sm font-medium text-blue-600">{day.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${day.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">الإنجازات الأخيرة</h3>
              <p className="text-orange-600 font-medium">Recent Achievements</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-md group">
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-800 font-bold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-indigo-600 text-xs font-medium mb-1">{achievement.titleEn}</p>
                  <p className="text-gray-600 text-xs">{achievement.description}</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-600">+{achievement.points}</div>
                  <div className="text-xs text-gray-500">نقطة</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;