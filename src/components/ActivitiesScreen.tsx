import { Calendar, MapPin, Users, Clock, ChevronRight } from 'lucide-react';
import type { Activity } from '../App';

interface ActivitiesScreenProps {
  isDarkMode: boolean;
  activities: Activity[];
  onRegister: (activityId: number) => void;
}

export function ActivitiesScreen({ isDarkMode, activities, onRegister }: ActivitiesScreenProps) {
  return (
    <div className="pb-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-5 py-4 sticky top-0 z-10">
        <h3 className="text-gray-900 dark:text-white">Kegiatan</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Daftar kegiatan Karang Taruna</p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white dark:bg-gray-900 px-5 py-3 flex gap-2 overflow-x-auto border-b border-gray-200 dark:border-gray-800">
        <button className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full whitespace-nowrap shadow-sm">
          Semua
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Akan Datang
        </button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Selesai
        </button>
      </div>

      {/* Activities List */}
      <div className="p-4 space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all"
          >
            {/* Category Badge */}
            <div className="flex items-start justify-between mb-3">
              <span className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-xl shadow-sm">
                {activity.category}
              </span>
              {activity.status === 'upcoming' && (
                <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl shadow-sm">
                  Segera
                </span>
              )}
              {activity.status === 'completed' && (
                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl shadow-sm">
                  Selesai
                </span>
              )}
              {activity.isRegistered && activity.status !== 'completed' && (
                <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-xl shadow-sm">
                  Terdaftar
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="text-gray-900 dark:text-white mb-4">
              {activity.title}
            </h4>

            {/* Details */}
            <div className="space-y-2.5 mb-4">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{activity.date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{activity.time}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{activity.location}</span>
              </div>
            </div>

            {/* Participants Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>
                    {activity.participants}/{activity.maxParticipants} peserta
                  </span>
                </div>
                <span className="text-primary-600 dark:text-primary-400">
                  {Math.round((activity.participants / activity.maxParticipants) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${(activity.participants / activity.maxParticipants) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onRegister(activity.id)}
              disabled={activity.status === 'completed'}
              className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all shadow-md ${
                activity.status === 'completed'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : activity.isRegistered
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                  : 'bg-gradient-to-r from-primary-500 to-accent-600 text-white hover:shadow-lg hover:scale-[1.02]'
              }`}
            >
              <span className="font-medium">
                {activity.status === 'completed' 
                  ? 'Kegiatan Selesai' 
                  : activity.isRegistered 
                  ? 'Batalkan Pendaftaran'
                  : 'Daftar Sekarang'}
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}