import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './components/KnowledgeBase';
import Statistics from './components/Statistics';
import UserProfile from './components/UserProfile';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'statistics':
        return <Statistics />;
      case 'calendar':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Calendar</h2>
            <p className="text-gray-400">Schedule and track your learning sessions</p>
          </div>
        );
      case 'achievements':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
            <p className="text-gray-400">View your learning milestones and badges</p>
          </div>
        );
      case 'goals':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Goals</h2>
            <p className="text-gray-400">Set and track your learning objectives</p>
          </div>
        );
      case 'community':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Community</h2>
            <p className="text-gray-400">Connect with fellow learners and teachers</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            <p className="text-gray-400">Customize your learning experience</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <div className="flex-1 flex">
            <main className="flex-1 p-6 overflow-y-auto">
              {renderContent()}
            </main>
            
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;