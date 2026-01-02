import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface Post {
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

interface PostCardProps {
  post: Post;
  isDarkMode: boolean;
  onToggleLike: (postId: number) => void;
}

export function PostCard({ post, isDarkMode, onToggleLike }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white">{post.avatar}</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white">{post.author}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary-600 dark:text-primary-400">{post.role}</span>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span className="text-gray-500 dark:text-gray-400">{post.time}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <p className="text-gray-900 dark:text-gray-100 mb-4 leading-relaxed pl-[60px]">
        {post.content}
      </p>

      {/* Post Actions */}
      <div className="flex items-center gap-6 pl-[60px]">
        <button
          onClick={() => onToggleLike(post.id)}
          className={`flex items-center gap-2 transition-all hover:scale-105 ${
            post.isLiked
              ? 'text-red-500'
              : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
          <span className="font-medium">{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-105">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-105 ml-auto">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}