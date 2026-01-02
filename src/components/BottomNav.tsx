import { Home, Calendar, Plus, Bell, User } from 'lucide-react';
import type { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isDarkMode: boolean;
}

export function BottomNav({ currentScreen, onNavigate, isDarkMode }: BottomNavProps) {
  const navItems = [
    { id: 'home' as Screen, label: 'Ben Reti', icon: Home },
    { id: 'activities' as Screen, label: 'Kegiatan', icon: Calendar },
    { id: 'create' as Screen, label: 'Posting', icon: Plus, isCenter: true },
    { id: 'announcements' as Screen, label: 'Info', icon: Bell },
    { id: 'profile' as Screen, label: 'Saya', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[390px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 px-2 py-2 safe-area-bottom z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative -mt-6"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/40 hover:shadow-xl hover:scale-105 transition-all active:scale-95">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex-1 flex flex-col items-center gap-1 py-2 transition-all"
            >
              {/* Bubble Active Indicator */}
              {isActive && (
                <div className="absolute inset-0 mx-auto w-16 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl -z-10 transition-all shadow-sm" />
              )}
              
              <Icon
                className={`w-6 h-6 transition-all ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400 scale-110'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              />
              <span
                className={`transition-all ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}