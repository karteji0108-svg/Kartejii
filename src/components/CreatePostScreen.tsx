import { useState } from 'react';
import { X, Image, Smile, MapPin, Hash } from 'lucide-react';

interface CreatePostScreenProps {
  isDarkMode: boolean;
  onBack: () => void;
  onCreatePost: (content: string) => void;
}

export function CreatePostScreen({ isDarkMode, onBack, onCreatePost }: CreatePostScreenProps) {
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setContent(text);
      setCharCount(text.length);
    }
  };

  const handlePost = () => {
    if (content.trim()) {
      onCreatePost(content);
      setContent('');
      setCharCount(0);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-5 py-3.5 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        <h3 className="text-gray-900 dark:text-white">Buat Postingan</h3>
        <button
          onClick={handlePost}
          disabled={!content.trim()}
          className={`px-6 py-2 rounded-full transition-all ${
            content.trim()
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg shadow-primary-500/30'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
          }`}
        >
          Posting
        </button>
      </div>

      {/* Author Info */}
      <div className="px-5 py-5 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white">DS</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white">Dimas Saputra</h4>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Anggota</p>
          </div>
        </div>
      </div>

      {/* Content Input */}
      <div className="px-5 py-5">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Apa yang ingin kamu bagikan?"
          className="w-full min-h-[240px] bg-transparent text-gray-900 dark:text-white placeholder-gray-400 resize-none focus:outline-none leading-relaxed"
          autoFocus
        />
        
        {/* Character Count */}
        <div className="flex justify-end mt-2">
          <span
            className={`transition-colors ${
              charCount > maxChars * 0.9
                ? 'text-red-500 font-medium'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            {charCount}/{maxChars}
          </span>
        </div>
      </div>

      {/* Media Options */}
      <div className="px-5 py-5 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 mb-4">Tambahkan ke postingan</p>
        <div className="grid grid-cols-4 gap-3">
          <button className="flex flex-col items-center gap-2 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all border border-primary-100 dark:border-primary-800">
            <Image className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-700 dark:text-primary-400">Foto</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-2xl hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-all border border-accent-100 dark:border-accent-800">
            <Smile className="w-6 h-6 text-accent-600 dark:text-accent-400" />
            <span className="text-accent-700 dark:text-accent-400">Emoji</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all border border-green-100 dark:border-green-800">
            <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400">Lokasi</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all border border-purple-100 dark:border-purple-800">
            <Hash className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-400">Tag</span>
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="mx-5 my-5 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800">
        <h4 className="text-primary-900 dark:text-primary-300 mb-2">💡 Tips Posting</h4>
        <ul className="space-y-1.5 text-primary-800 dark:text-primary-400">
          <li>• Gunakan bahasa yang sopan dan ramah</li>
          <li>• Pastikan informasi yang dibagikan akurat</li>
          <li>• Tambahkan foto untuk menarik perhatian</li>
        </ul>
      </div>
    </div>
  );
}