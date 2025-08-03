import React, { useState, useEffect } from 'react';
import { Sun, Moon, SunMoon } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    // Initialize theme from localStorage after component mounts
    const savedTheme = localStorage.getItem('theme');
    const validThemes: Theme[] = ['light', 'dark', 'system'];
    
    if (savedTheme && validThemes.includes(savedTheme as Theme)) {
      setTheme(savedTheme as Theme);
    } else {
      setTheme('system');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the appropriate class
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
    
    localStorage.setItem('theme', theme);
    console.log('Theme changed to:', theme, 'isDark:', isDark, 'classes:', root.className);
  }, [theme]);

  const cycleTheme = (): void => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentThemeIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const ThemeIcon: React.FC = () => {
    if (theme === 'light') return <Sun size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <SunMoon size={20} />;
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <ThemeIcon />
    </button>
  );
};

export default ThemeSwitcher;