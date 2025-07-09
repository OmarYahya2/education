import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './components/KnowledgeBase';
import Statistics from './components/Statistics';
import Calendar from './components/Calendar';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import Community from './components/Community';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({
    name: 'محرم حسن',
    nameEn: 'Maharram Hassan',
    email: 'maharram@example.com',
    level: 'المستوى الذهبي',
    levelEn: 'Gold Level'
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'statistics':
        return <Statistics />;
      case 'calendar':
        return <Calendar />;
      case 'achievements':
        return <Achievements />;
      case 'goals':
        return <Goals />;
      case 'community':
        return <Community />;
      case 'settings':
        return <Settings user={user} setUser={setUser} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-slate-50' : 'bg-gray-900'}`}>
      <div className="flex h-screen">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode}
        />
        
        <div className="flex-1 flex flex-col">
          <Header 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            user={user}
            onLogout={handleLogout}
          />
          
          <div className="flex-1 flex">
            <main className="flex-1 p-6 overflow-y-auto">
              {renderContent()}
            </main>
            
            <UserProfile user={user} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;