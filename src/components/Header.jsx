import React, { useState, useEffect } from 'react';
import { Bell, Search, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode Toggle Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 font-medium z-10 sticky top-0">
      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 w-96 transition-colors">
        <Search size={20} className="text-gray-500 dark:text-gray-300 mr-2" />
        <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent outline-none flex-1 dark:text-white placeholder-gray-500" 
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        
        {/* Dark Mode Toggle Button */}
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
        >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <div className="relative cursor-pointer">
            <Bell size={24} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </div>
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="Admin" className="w-9 h-9 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;