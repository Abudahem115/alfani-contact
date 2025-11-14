import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: "เบอร์โทรศัพท์",
      labelEn: "Phone",
      value: "+66 93 929 3836",
      href: "tel:+66939293836",
    },
    {
      icon: Mail,
      label: "อีเมล",
      labelEn: "Email",
      value: "alfatani18@gmail.com",
      href: "mailto:alfatani18@gmail.com",
    },
    {
      icon: Globe,
      label: "เว็บไซต์",
      labelEn: "Website",
      value: "alfatani.com",
      href: "https://alfatani.com",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="font-thai font-bold text-3xl sm:text-4xl md:text-5xl text-primary">
              ติดต่อเรา
            </h2>
            <p className="font-en text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Contact Us
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <a
                    href={detail.href}
                    target={detail.icon === Globe ? "_blank" : undefined}
                    rel={detail.icon === Globe ? "noopener noreferrer" : undefined}
                    className="block space-y-4 group"
                  >
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-thai font-semibold text-sm text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="font-en text-xs text-muted-foreground">
                        {detail.labelEn}
                      </p>
                      <p className="font-en text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                        {detail.value}
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

export default ContactInfo;
