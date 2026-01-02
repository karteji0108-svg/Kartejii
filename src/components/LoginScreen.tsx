import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-primary-50 to-white px-6 flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-8 text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl flex items-center justify-center shadow-lg mb-6">
          <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8L42 18L32 28L22 18L32 8Z" fill="white" fillOpacity="0.9"/>
            <path d="M18 22L28 32L18 42L8 32L18 22Z" fill="white" fillOpacity="0.7"/>
            <path d="M46 22L56 32L46 42L36 32L46 22Z" fill="white" fillOpacity="0.7"/>
            <path d="M32 36L42 46L32 56L22 46L32 36Z" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>
        <h2 className="text-gray-900 mb-2">Selamat Datang di</h2>
        <h1 className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">KARTEJI</h1>
        <p className="text-gray-600 mt-2">Terhubung dengan komunitas Karang Taruna</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-4 mb-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-primary-600">
              Lupa Password?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 rounded-2xl shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all active:scale-[0.98]"
        >
          Masuk
        </button>

        {/* Register Link */}
        <div className="text-center mt-6 mb-8">
          <p className="text-gray-600">
            Belum punya akun?{' '}
            <button type="button" className="text-primary-600">
              Daftar Sekarang
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
