import { MessageCircle, Music, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/alfatani-logo-full.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "LINE",
      icon: MessageCircle,
      url: "https://line.me/R/ti/p/@891wnxnm",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@alfatani.co",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1AR5dW4zYa/?mibextid=wwXIfr",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/alfatani.co",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <img src={logo} alt="Alfatani Logo" className="h-16 sm:h-20 md:h-24 w-auto" />
            <p className="font-en font-medium text-xs sm:text-sm opacity-90">
              © 2025 All Rights Reserved
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20"></div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>

          {/* Tagline */}
          <div className="text-center space-y-1 px-4">
            <p className="font-thai text-xs sm:text-sm opacity-90">
              ผู้ให้บริการด้านฮัจญ์และอุมเราะห์
            </p>
            <p className="font-en text-xs sm:text-sm opacity-90">
              Hajj & Umrah Services Provider
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
