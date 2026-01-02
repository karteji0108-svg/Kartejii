import { 
  Settings, 
  Edit, 
  Shield, 
  Bell, 
  Lock, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Moon,
  Sun,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';

interface ProfileScreenProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function ProfileScreen({ isDarkMode, toggleDarkMode }: ProfileScreenProps) {
  const userRole = 'Anggota'; // Could be 'Anggota' or 'Admin'
  const isAdmin = false; // Toggle for role switch demo

  return (
    <div className="pb-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 px-6 pt-12 pb-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-white">Profil Saya</h3>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl">
          {/* Avatar & Name */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">DS</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white mb-1">Dimas Saputra</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full">
                  {userRole}
                </span>
                {isAdmin && (
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-1">28</div>
              <div className="text-gray-600 dark:text-gray-400">Postingan</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-1">12</div>
              <div className="text-gray-600 dark:text-gray-400">Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-1">3</div>
              <div className="text-gray-600 dark:text-gray-400">Penghargaan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 py-4 space-y-3">
        <h4 className="text-gray-900 dark:text-white px-2 mb-2">Informasi Pribadi</h4>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <Mail className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <div className="text-gray-500 dark:text-gray-400">Email</div>
              <div className="text-gray-900 dark:text-white mt-0.5">dimas.saputra@email.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <Phone className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <div className="text-gray-500 dark:text-gray-400">Telepon</div>
              <div className="text-gray-900 dark:text-white mt-0.5">+62 812-3456-7890</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <div className="text-gray-500 dark:text-gray-400">Alamat</div>
              <div className="text-gray-900 dark:text-white mt-0.5">Jakarta Selatan, Indonesia</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <div className="text-gray-500 dark:text-gray-400">Bergabung Sejak</div>
              <div className="text-gray-900 dark:text-white mt-0.5">15 Agustus 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="px-4 py-4 space-y-3">
        <h4 className="text-gray-900 dark:text-white px-2 mb-2">Pengaturan</h4>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-3">
              {isDarkMode ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
              <span className="text-gray-900 dark:text-white">Mode Gelap</span>
            </div>
            <div
              className={`w-12 h-6 rounded-full transition-colors relative ${
                isDarkMode ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </div>
          </button>

          {/* Role Switch (Admin Feature) */}
          <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="text-left">
                <div className="text-gray-900 dark:text-white">Mode Admin</div>
                <div className="text-gray-500 dark:text-gray-400">Kelola organisasi</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">Notifikasi</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">Privasi & Keamanan</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">Bantuan & Dukungan</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors border border-red-100 dark:border-red-800">
          <LogOut className="w-5 h-5" />
          <span>Keluar</span>
        </button>
      </div>

      {/* Version Info */}
      <div className="text-center py-6">
        <p className="text-gray-400">KARTEJI v1.0.0</p>
        <p className="text-gray-400 mt-1">© 2026 Karang Taruna Digital</p>
      </div>
    </div>
  );
}
