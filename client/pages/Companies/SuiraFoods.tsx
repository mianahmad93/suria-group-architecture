import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Leaf,
  Package,
  Truck,
  CheckCircle,
  Award,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const SuiraFoods: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary via-amber-600 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=800&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative section-container py-20 md:py-32 flex flex-col justify-center items-center text-center">
          <div className="fade-in space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Serving Quality You Can Taste
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Suira Foods is committed to providing premium, hygienic, and
              delicious food products that bring flavor and freshness to every
              table.
            </p>
            <a href="#services" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="slide-up space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About Suira Foods
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2018, Suira Foods is one of Pakistan's fastest-growing
              food manufacturers, known for innovation, taste, and trust.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Our Mission
                </h4>
                <p className="text-muted-foreground">
                  To deliver quality food that enhances lifestyles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Our Vision
                </h4>
                <p className="text-muted-foreground">
                  To be the most reliable name in food excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
              alt="Suira Foods Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete food production and distribution solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Food Manufacturing & Packaging",
                desc: "State-of-the-art production facilities",
              },
              {
                icon: Leaf,
                title: "Private Label Production",
                desc: "Customized products for retail partners",
              },
              {
                icon: Truck,
                title: "Distribution & Supply Chain",
                desc: "Reliable delivery across Pakistan",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance & Testing",
                desc: "Rigorous safety and quality standards",
              },
              {
                icon: Award,
                title: "Export of Packaged Goods",
                desc: "International quality certifications",
              },
              {
                icon: Leaf,
                title: "Sustainable Practices",
                desc: "Eco-friendly production methods",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl border border-border hover-lift transition-all slide-up"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <Icon className="text-primary mb-4" size={36} />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-container py-16 md:py-24">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {[
            {
              name: "Imtiaz Supermarket",
              icon: "🏪",
            },
            {
              name: "Metro Cash & Carry",
              icon: "🛒",
            },
            {
              name: "Carrefour",
              icon: "🏬",
            },
            {
              name: "Local Restaurant Chains",
              icon: "🍽️",
            },
          ].map((partner, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl border border-border hover-lift transition-all text-center slide-up"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="text-5xl mb-4">{partner.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 md:p-12 border border-border max-w-3xl mx-auto">
          <div className="text-4xl mb-4">💬</div>
          <p className="text-lg text-foreground italic mb-6">
            "Suira Foods guarantees consistency, hygiene, and unbeatable flavor
            in every batch."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              Q
            </div>
            <div>
              <p className="font-semibold text-foreground">Quality Lead</p>
              <p className="text-sm text-muted-foreground">
                Major Retail Partnership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Become Our Distribution Partner
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join our growing network of successful partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">hello@suirafoods.com</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90">+92 321 456 7890</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="opacity-90">Food Industrial Park, Faisalabad</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Become a Distributor
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default SuiraFoods;
