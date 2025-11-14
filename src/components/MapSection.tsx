import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2 md:space-y-3">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <MapPin className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" />
              <h2 className="font-thai font-bold text-3xl sm:text-4xl md:text-5xl text-primary">
                ที่ตั้งบริษัท
              </h2>
            </div>
            <p className="font-en text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Our Location
            </p>
          </div>

          {/* Map */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.8!2d101.2830874!3d6.532828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15.46!3m2!1m1!2zNsKwMzEnNTguMiJOIDEwMcKwMTYnNTkuMSJF!5e1!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alfatani Co., Ltd Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Address Text */}
          <div className="text-center space-y-2 md:space-y-3 px-4">
            <p className="font-thai text-base sm:text-lg font-semibold text-foreground">
              บริษัทอัลฟาตานี จำกัด
            </p>
            <p className="font-en text-sm sm:text-base text-muted-foreground">
              Alfatani Co., Ltd
            </p>
            <div className="font-thai text-sm sm:text-base text-muted-foreground space-y-1">
              <p>143, ตลาดสด, ตลาดสด ถนน ผังเมือง 4</p>
              <p>Sateng, Amphoe Mueang Yala</p>
              <p>Yala 95000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
