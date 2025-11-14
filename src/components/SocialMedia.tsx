import { Card } from "@/components/ui/card";
import { MessageCircle, Music, Facebook, Instagram } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "LINE",
      icon: MessageCircle,
      url: "https://line.me/R/ti/p/@891wnxnm",
      color: "bg-[#00B900]",
      handle: "@alfatani",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@alfatani.co",
      color: "bg-[#000000]",
      handle: "@alfatani.co",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1AR5dW4zYa/?mibextid=wwXIfr",
      color: "bg-[#1877F2]",
      handle: "Alfatani Co",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/alfatani.co",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      handle: "@alfatani.co",
    },
  ];

  return (
    <section id="social" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="font-thai font-bold text-3xl sm:text-4xl md:text-5xl text-primary">
              ติดตามเราได้ที่
            </h2>
            <p className="font-en text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Follow Us on Social Media
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card
                  key={social.name}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`${social.color} p-4 sm:p-6 flex items-center justify-center`}>
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="p-3 sm:p-4 text-center space-y-1">
                      <p className="font-en font-bold text-base sm:text-lg text-foreground">
                        {social.name}
                      </p>
                      <p className="font-en text-xs sm:text-sm text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
