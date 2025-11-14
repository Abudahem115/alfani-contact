import logo from "@/assets/alfatani-logo-full.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40"></div>
      
      {/* Dark Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Logo */}
          <div className="flex justify-center animate-fade-in">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
              <img
                src={logo}
                alt="Alfatani Logo"
                className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto mx-auto"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="space-y-2 md:space-y-3 animate-fade-in-up animation-delay-200">
            <h1 className="font-thai font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white drop-shadow-2xl px-4">
              บริษัทอัลฟาตานี จำกัด
            </h1>
            <p className="font-en text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 drop-shadow-lg tracking-wide">
              ALFATANI CO., LTD
            </p>
          </div>

          {/* Description */}
          <div className="space-y-1 md:space-y-2 animate-fade-in-up animation-delay-300">
            <p className="font-thai text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg px-4">
              ผู้ให้บริการด้านฮัจญ์และอุมเราะห์
            </p>
            <p className="font-en text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg">
              Hajj & Umrah Services Provider
            </p>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
