import { Bell, Pin, ChevronRight, AlertCircle, FileText, Calendar, TrendingUp } from 'lucide-react';
import type { Announcement } from '../App';

interface AnnouncementsScreenProps {
  isDarkMode: boolean;
  announcements: Announcement[];
  onMarkAsRead: (announcementId: number) => void;
}

const iconMap = {
  Pin,
  FileText,
  AlertCircle,
  TrendingUp,
};

const categoryStats = [
  { name: 'Total Info', count: 24, color: 'from-blue-500 to-blue-600' },
  { name: 'Belum Dibaca', count: 3, color: 'from-red-500 to-red-600' },
  { name: 'Minggu Ini', count: 5, color: 'from-green-500 to-green-600' },
];

export function AnnouncementsScreen({ isDarkMode, announcements, onMarkAsRead }: AnnouncementsScreenProps) {
  const getColorClasses = (color: string, isPinned: boolean = false) => {
    const colors = {
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    };
    return isPinned
      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
      : colors[color as keyof typeof colors];
  };

  const unreadCount = announcements.filter(a => !a.isRead).length;

  return (
    <div className="pb-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-5 py-4 sticky top-0 z-10">
        <h3 className="text-gray-900 dark:text-white">Info & Pengumuman</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Update terbaru dari Karang Taruna</p>
      </div>

      {/* Stats Cards */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg">
            <div className="opacity-90 mb-1">Total Info</div>
            <div className="text-2xl">{announcements.length}</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 text-white shadow-lg">
            <div className="opacity-90 mb-1">Belum Dibaca</div>
            <div className="text-2xl">{unreadCount}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-lg">
            <div className="opacity-90 mb-1">Minggu Ini</div>
            <div className="text-2xl">5</div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <button className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full whitespace-nowrap shadow-sm">
            Semua
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Penting
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Belum Dibaca
          </button>
        </div>
      </div>

      {/* Announcements List */}
      <div className="px-4 space-y-3">
        {announcements.map((announcement) => {
          const Icon = iconMap[announcement.icon as keyof typeof iconMap] || AlertCircle;
          return (
            <div
              key={announcement.id}
              className={`bg-white dark:bg-gray-900 rounded-3xl p-5 border transition-all hover:shadow-xl ${
                announcement.isRead
                  ? 'border-gray-200 dark:border-gray-800'
                  : 'border-primary-300 dark:border-primary-700 shadow-md shadow-primary-500/10'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${getColorClasses(
                    announcement.color,
                    announcement.isPinned
                  )}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category & Date */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-xl shadow-sm ${getColorClasses(
                        announcement.color,
                        announcement.isPinned
                      )}`}
                    >
                      {announcement.isPinned ? '📌 Disematkan' : announcement.category}
                    </span>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {announcement.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className={`mb-2 ${
                      announcement.isRead
                        ? 'text-gray-700 dark:text-gray-300'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {announcement.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {announcement.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Unread Indicator */}
              {!announcement.isRead && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 dark:text-primary-400">
                      Belum dibaca
                    </span>
                    <button 
                      onClick={() => onMarkAsRead(announcement.id)}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-xl hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-all shadow-sm"
                    >
                      Tandai dibaca
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}