export function SplashScreen() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-28 h-28 mx-auto bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-slow">
            <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8L42 18L32 28L22 18L32 8Z" fill="white" fillOpacity="0.9"/>
              <path d="M18 22L28 32L18 42L8 32L18 22Z" fill="white" fillOpacity="0.7"/>
              <path d="M46 22L56 32L46 42L36 32L46 22Z" fill="white" fillOpacity="0.7"/>
              <path d="M32 36L42 46L32 56L22 46L32 36Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
        </div>
        
        {/* App Name */}
        <h1 className="text-white tracking-wider mb-3 animate-fade-in-up">KARTEJI</h1>
        <p className="text-white/90 tracking-wide mb-8 animate-fade-in-up delay-200">Karang Taruna Digital</p>
        
        {/* Loading Indicator */}
        <div className="flex justify-center gap-2 animate-fade-in-up delay-300">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}