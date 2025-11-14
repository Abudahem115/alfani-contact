import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DownloadSection = () => {
  const pdfUrl = "https://drive.google.com/file/d/16hhvZvesoMdTFnFWqpKyo3PSeRxx93Ua/view?usp=drivesdk";

  return (
    <section id="download" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-primary to-accent p-4 sm:p-5 md:p-6 rounded-full">
                  <FileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4">
                <div className="space-y-1 md:space-y-2">
                  <h3 className="font-thai font-bold text-xl sm:text-2xl md:text-3xl text-foreground">
                    ดาวน์โหลดหนังสือแนะนำบริษัท
                  </h3>
                  <p className="font-en text-base sm:text-lg text-muted-foreground">
                    Company Introduction Brochure
                  </p>
                </div>
                <p className="font-thai text-sm sm:text-base text-muted-foreground">
                  เอกสารแนะนำบริการฮัจญ์และอุมเราะห์ของเรา
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity font-thai text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                >
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>ดาวน์โหลด PDF</span>
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
