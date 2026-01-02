import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { ActivitiesScreen } from './components/ActivitiesScreen';
import { CreatePostScreen } from './components/CreatePostScreen';
import { AnnouncementsScreen } from './components/AnnouncementsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNav } from './components/BottomNav';

export type Screen = 'splash' | 'login' | 'home' | 'activities' | 'create' | 'announcements' | 'profile';

export interface Post {
  id: number;
  author: string;
  role: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'open' | 'completed';
  category: string;
  isRegistered: boolean;
}

export interface Announcement {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  isPinned: boolean;
  isRead: boolean;
  category: string;
  icon: string;
  color: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Dynamic Posts State
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Budi Santoso',
      role: 'Ketua Karang Taruna',
      avatar: 'BS',
      time: '2 jam yang lalu',
      content: 'Minggu depan kita akan mengadakan kegiatan gotong royong bersih-bersih lingkungan. Yuk ikut berpartisipasi! 🌱',
      likes: 24,
      comments: 8,
      isLiked: true,
    },
    {
      id: 2,
      author: 'Siti Rahayu',
      role: 'Sekretaris',
      avatar: 'SR',
      time: '5 jam yang lalu',
      content: 'Terima kasih kepada semua yang sudah hadir di acara pelatihan kewirausahaan kemarin. Semoga ilmunya bermanfaat! 💼✨',
      likes: 42,
      comments: 15,
      isLiked: false,
    },
    {
      id: 3,
      author: 'Ahmad Hidayat',
      role: 'Anggota',
      avatar: 'AH',
      time: '1 hari yang lalu',
      content: 'Ada yang punya rekomendasi tempat untuk acara bakti sosial bulan depan? Drop di komen ya!',
      likes: 18,
      comments: 12,
      isLiked: true,
    },
    {
      id: 4,
      author: 'Dewi Lestari',
      role: 'Bendahara',
      avatar: 'DL',
      time: '2 hari yang lalu',
      content: 'Laporan keuangan bulan Desember sudah tersedia. Cek di menu Info untuk detail lengkapnya. Transparansi adalah kunci! 📊',
      likes: 31,
      comments: 6,
      isLiked: false,
    },
  ]);

  // Dynamic Activities State
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      title: 'Gotong Royong Bersih Lingkungan',
      date: '15 Jan 2026',
      time: '07:00 - 10:00',
      location: 'Balai Desa',
      participants: 45,
      maxParticipants: 60,
      status: 'upcoming',
      category: 'Lingkungan',
      isRegistered: false,
    },
    {
      id: 2,
      title: 'Pelatihan Kewirausahaan Digital',
      date: '20 Jan 2026',
      time: '13:00 - 16:00',
      location: 'Aula Komunitas',
      participants: 28,
      maxParticipants: 30,
      status: 'upcoming',
      category: 'Pelatihan',
      isRegistered: true,
    },
    {
      id: 3,
      title: 'Bakti Sosial Ramadan',
      date: '10 Feb 2026',
      time: '08:00 - 12:00',
      location: 'Panti Asuhan Harapan',
      participants: 12,
      maxParticipants: 40,
      status: 'open',
      category: 'Sosial',
      isRegistered: false,
    },
    {
      id: 4,
      title: 'Turnamen Futsal Karang Taruna',
      date: '28 Dec 2025',
      time: '14:00 - 18:00',
      location: 'Lapangan Desa',
      participants: 120,
      maxParticipants: 120,
      status: 'completed',
      category: 'Olahraga',
      isRegistered: true,
    },
  ]);

  // Dynamic Announcements State
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: 'Perubahan Jadwal Rapat Bulanan',
      excerpt: 'Rapat bulanan dipindahkan ke tanggal 18 Januari 2026 pukul 19:00 WIB',
      date: '1 Jan 2026',
      isPinned: true,
      isRead: false,
      category: 'Penting',
      icon: 'Pin',
      color: 'red',
    },
    {
      id: 2,
      title: 'Laporan Keuangan Desember 2025',
      excerpt: 'Laporan keuangan bulan Desember telah tersedia untuk dilihat oleh seluruh anggota',
      date: '31 Dec 2025',
      isPinned: false,
      isRead: true,
      category: 'Keuangan',
      icon: 'FileText',
      color: 'blue',
    },
    {
      id: 3,
      title: 'Pendaftaran Kegiatan Bakti Sosial',
      excerpt: 'Pendaftaran dibuka hingga tanggal 5 Februari. Buruan daftar sebelum kuota penuh!',
      date: '29 Dec 2025',
      isPinned: false,
      isRead: false,
      category: 'Info',
      icon: 'AlertCircle',
      color: 'green',
    },
    {
      id: 4,
      title: 'Hasil Evaluasi Program 2025',
      excerpt: 'Ringkasan pencapaian dan evaluasi program Karang Taruna tahun 2025',
      date: '28 Dec 2025',
      isPinned: false,
      isRead: true,
      category: 'Laporan',
      icon: 'TrendingUp',
      color: 'purple',
    },
  ]);

  useEffect(() => {
    // Show splash for 2.5 seconds
    const timer = setTimeout(() => {
      setCurrentScreen('login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleNavigation = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamic Actions
  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now(),
      author: 'Dimas Saputra',
      role: 'Anggota',
      avatar: 'DS',
      time: 'Baru saja',
      content,
      likes: 0,
      comments: 0,
      isLiked: false,
    };
    setPosts([newPost, ...posts]);
    setCurrentScreen('home');
  };

  const handleToggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleRegisterActivity = (activityId: number) => {
    setActivities(activities.map(activity =>
      activity.id === activityId
        ? { 
            ...activity, 
            isRegistered: !activity.isRegistered,
            participants: activity.isRegistered ? activity.participants - 1 : activity.participants + 1
          }
        : activity
    ));
  };

  const handleMarkAsRead = (announcementId: number) => {
    setAnnouncements(announcements.map(announcement =>
      announcement.id === announcementId
        ? { ...announcement, isRead: true }
        : announcement
    ));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'home':
        return <HomeScreen isDarkMode={isDarkMode} posts={posts} onToggleLike={handleToggleLike} />;
      case 'activities':
        return <ActivitiesScreen isDarkMode={isDarkMode} activities={activities} onRegister={handleRegisterActivity} />;
      case 'create':
        return <CreatePostScreen isDarkMode={isDarkMode} onBack={() => setCurrentScreen('home')} onCreatePost={handleCreatePost} />;
      case 'announcements':
        return <AnnouncementsScreen isDarkMode={isDarkMode} announcements={announcements} onMarkAsRead={handleMarkAsRead} />;
      case 'profile':
        return <ProfileScreen isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
      default:
        return <HomeScreen isDarkMode={isDarkMode} posts={posts} onToggleLike={handleToggleLike} />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        {/* Mobile Frame */}
        <div className="mx-auto max-w-[390px] min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden shadow-2xl">
          {renderScreen()}
          
          {/* Show bottom nav only when logged in and not on splash/login/create screens */}
          {isLoggedIn && currentScreen !== 'splash' && currentScreen !== 'login' && currentScreen !== 'create' && (
            <BottomNav currentScreen={currentScreen} onNavigate={handleNavigation} isDarkMode={isDarkMode} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;