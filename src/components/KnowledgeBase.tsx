import React from 'react';
import { BookOpen, MessageSquare, Type, Globe, ChevronRight, Star } from 'lucide-react';

const KnowledgeBase: React.FC = () => {
  const subjects = [
    {
      id: 'vocabulary',
      title: 'المفردات',
      titleEn: 'Vocabulary',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      progress: 75,
      lessons: 24,
      completed: 18,
      difficulty: 'متوسط • Intermediate'
    },
    {
      id: 'phrasal',
      title: 'الأفعال المركبة',
      titleEn: 'Phrasal Verbs',
      icon: MessageSquare,
      color: 'from-red-500 to-red-600',
      progress: 45,
      lessons: 16,
      completed: 7,
      difficulty: 'صعب • Advanced'
    },
    {
      id: 'grammar',
      title: 'القواعد',
      titleEn: 'Grammar',
      icon: Type,
      color: 'from-orange-500 to-orange-600',
      progress: 88,
      lessons: 32,
      completed: 28,
      difficulty: 'سهل • Beginner'
    },
    {
      id: 'conversation',
      title: 'المحادثة',
      titleEn: 'Conversation',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      progress: 62,
      lessons: 20,
      completed: 12,
      difficulty: 'متوسط • Intermediate'
    }
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
            قاعدة المعرفة
          </h2>
          <p className="text-blue-300 text-lg font-medium">Knowledge Base</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg">
          عرض الكل • View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:from-gray-750 hover:to-gray-850 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-blue-500 shadow-xl group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${subject.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <subject.icon className="w-7 h-7 text-white" />
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </div>
            
            <div className="mb-4">
              <h3 className="text-white font-bold text-xl mb-1">{subject.title}</h3>
              <p className="text-blue-300 font-medium text-sm mb-2">{subject.titleEn}</p>
              <p className="text-gray-400 text-xs">{subject.difficulty}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">التقدم • Progress</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-bold">{subject.progress}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${subject.color} transition-all duration-500 shadow-sm`}
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm pt-2">
                <div className="text-center">
                  <div className="text-white font-bold text-lg">{subject.completed}</div>
                  <div className="text-gray-400 text-xs">مكتمل • Done</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-300 font-bold text-lg">{subject.lessons - subject.completed}</div>
                  <div className="text-gray-400 text-xs">متبقي • Left</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-300 font-bold text-lg">{subject.lessons}</div>
                  <div className="text-gray-400 text-xs">إجمالي • Total</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Course Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">الدورة المميزة</h3>
            <p className="text-purple-200 font-medium mb-1">Featured Course</p>
            <p className="text-purple-300 text-sm mb-4">دورة شاملة في اللغة الإنجليزية للأعمال • Complete Business English Course</p>
            <button className="bg-white text-purple-900 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg">
              ابدأ الآن • Start Now
            </button>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;