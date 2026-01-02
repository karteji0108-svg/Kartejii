import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { PostCard } from './PostCard';
import type { Post } from '../App';

interface HomeScreenProps {
  isDarkMode: boolean;
  posts: Post[];
  onToggleLike: (postId: number) => void;
}

export function HomeScreen({ isDarkMode, posts, onToggleLike }: HomeScreenProps) {
  return (
    <div className="pb-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-5 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-900 dark:text-white">Ben Reti</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Ruang berbagi antar anggota</p>
          </div>
          <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white">DS</span>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} isDarkMode={isDarkMode} onToggleLike={onToggleLike} />
        ))}
      </div>
    </div>
  );
}