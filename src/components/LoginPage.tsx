import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, User, Lock, Mail, GraduationCap, Star, Globe } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userData: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    nameEn: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData = {
      name: isLogin ? 'محرم حسن' : formData.name,
      nameEn: isLogin ? 'Maharram Hassan' : formData.nameEn,
      email: formData.email || 'maharram@example.com',
      level: 'المستوى الذهبي',
      levelEn: 'Gold Level'
    };
    
    onLogin(userData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo and branding */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl mb-6 shadow-2xl relative">
            <GraduationCap className="w-10 h-10 text-white" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              أكاديمية التميز
            </h1>
            <p className="text-xl font-semibold text-indigo-600">Excellence Academy</p>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Globe className="w-4 h-4" />
              <span className="text-sm">
                {isLogin ? 'مرحباً بعودتك إلى رحلة التعلم' : 'ابدأ رحلتك التعليمية معنا'}
              </span>
            </div>
            <p className="text-sm text-indigo-500 font-medium">
              {isLogin ? 'Welcome back to your learning journey' : 'Start your educational journey with us'}
            </p>
          </div>
        </div>

        {/* Login form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl"></div>
          
          <div className="relative z-10">
            {/* Tab switcher */}
            <div className="flex mb-8 bg-gray-100/80 rounded-2xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 px-6 text-center rounded-xl font-semibold transition-all duration-300 ${
                  isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="text-base">تسجيل الدخول</div>
                <div className="text-xs mt-1 opacity-80">Login</div>
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 px-6 text-center rounded-xl font-semibold transition-all duration-300 ${
                  !isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="text-base">إنشاء حساب</div>
                <div className="text-xs mt-1 opacity-80">Sign Up</div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        <span className="text-base">الاسم بالعربية</span>
                        <span className="text-sm text-indigo-600 block">Arabic Name</span>
                      </label>
                      <div className="relative">
                        <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="أدخل اسمك بالعربية"
                          required={!isLogin}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        <span className="text-base">الاسم بالإنجليزية</span>
                        <span className="text-sm text-indigo-600 block">English Name</span>
                      </label>
                      <div className="relative">
                        <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="nameEn"
                          value={formData.nameEn}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your English name"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  <span className="text-base">البريد الإلكتروني</span>
                  <span className="text-sm text-indigo-600 block">Email Address</span>
                </label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="example@academy.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  <span className="text-base">كلمة المرور</span>
                  <span className="text-sm text-indigo-600 block">Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pr-12 pl-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2" />
                    <span className="text-sm text-gray-600">
                      <span className="block">تذكرني</span>
                      <span className="text-xs text-indigo-500">Remember me</span>
                    </span>
                  </label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <span className="block">نسيت كلمة المرور؟</span>
                    <span className="text-xs text-indigo-500">Forgot password?</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">
                  {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
                </span>
                <div className="text-sm mt-1 opacity-90">
                  {isLogin ? 'Login' : 'Sign Up'}
                </div>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <span className="block text-sm">
                  {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                </span>
                <span className="text-xs text-indigo-500 mb-2 block">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                </span>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                >
                  {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                  <span className="block text-xs text-indigo-500">
                    {isLogin ? 'Create new account' : 'Login instead'}
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center space-y-3">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <p className="text-gray-700 font-medium">
              منصة تعليمية متطورة لتطوير المهارات والمعرفة
            </p>
            <p className="text-indigo-600 text-sm mt-1">
              Advanced educational platform for skill and knowledge development
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <span>© 2024 أكاديمية التميز</span>
            <span>•</span>
            <span>Excellence Academy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;