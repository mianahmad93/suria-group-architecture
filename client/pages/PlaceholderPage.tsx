import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  emoji?: string;
  backLink?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  emoji = "🔨",
  backLink = "/",
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative section-container">
          <button
            onClick={() => navigate(backLink)}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-6 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>
        </div>
      </section>

      <section className="section-container py-24 md:py-32 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="text-8xl mb-6">{emoji}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            This page is being prepared with detailed information and content.
            Please check back soon or contact our team for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlaceholderPage;
