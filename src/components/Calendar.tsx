import React from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, Users } from 'lucide-react';

const Calendar: React.FC = () => {
  const events = [
    { id: 1, title: 'درس القواعد المتقدمة', titleEn: 'Advanced Grammar Lesson', time: '10:00 AM', type: 'lesson' },
    { id: 2, title: 'جلسة محادثة جماعية', titleEn: 'Group Conversation Session', time: '2:00 PM', type: 'group' },
    { id: 3, title: 'اختبار المفردات', titleEn: 'Vocabulary Test', time: '4:00 PM', type: 'test' },
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">التقويم</h2>
          <p className="text-blue-600 text-lg font-medium">Calendar</p>
        </div>
        <CalendarIcon className="w-8 h-8 text-blue-500" />
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">أحداث اليوم • Today's Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className={`p-3 rounded-xl ${
                event.type === 'lesson' ? 'bg-blue-100 text-blue-600' :
                event.type === 'group' ? 'bg-emerald-100 text-emerald-600' :
                'bg-orange-100 text-orange-600'
              }`}>
                {event.type === 'lesson' ? <BookOpen className="w-5 h-5" /> :
                 event.type === 'group' ? <Users className="w-5 h-5" /> :
                 <Clock className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{event.title}</h4>
                <p className="text-blue-600 text-sm">{event.titleEn}</p>
                <p className="text-gray-500 text-sm">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;