import React from 'react';
import { Users, MessageCircle, Heart, Share } from 'lucide-react';

const Community: React.FC = () => {
  const posts = [
    { id: 1, author: 'أحمد محمد', authorEn: 'Ahmed Mohamed', content: 'أكملت للتو درس القواعد الجديد!', contentEn: 'Just completed the new grammar lesson!', likes: 12, comments: 3 },
    { id: 2, author: 'فاطمة علي', authorEn: 'Fatima Ali', content: 'هل يمكن أن تساعدوني في الأفعال المركبة؟', contentEn: 'Can you help me with phrasal verbs?', likes: 8, comments: 7 },
    { id: 3, author: 'محمد حسن', authorEn: 'Mohamed Hassan', content: 'وصلت لمستوى جديد في المنصة!', contentEn: 'Reached a new level on the platform!', likes: 15, comments: 5 },
  ];

  return (
    <div className="space-y-8 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">المجتمع</h2>
          <p className="text-blue-600 text-lg font-medium">Community</p>
        </div>
        <Users className="w-8 h-8 text-blue-500" />
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{post.author[0]}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{post.author}</h4>
                <p className="text-blue-600 text-sm">{post.authorEn}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-2">{post.content}</p>
            <p className="text-blue-600 text-sm mb-4">{post.contentEn}</p>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-300">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-500 transition-colors duration-300">
                <Share className="w-5 h-5" />
                <span>مشاركة • Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;