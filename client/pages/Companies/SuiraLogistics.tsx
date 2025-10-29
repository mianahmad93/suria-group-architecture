import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Truck,
  Package,
  Globe,
  Clock,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const SuiraLogistics: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2Ff9011040b2994e6bb93dd072a17305be?format=webp&width=1200"
            alt="Background"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-amber-600/40 to-primary/50"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 section-container py-20 md:py-32 flex flex-col justify-center items-center text-center">
          <div className="fade-in space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Delivering Reliability Across Borders
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Suira Logistics provides smart, efficient, and secure logistics
              and transportation solutions across land, air, and sea.
            </p>
            <a href="#services" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
              Track Your Shipment
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
                About Suira Logistics
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Suira Logistics started in 2016 with one goal — to simplify
              logistics for businesses through advanced tracking, safe delivery,
              and on-time performance.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Our Mission
                </h4>
                <p className="text-muted-foreground">
                  To move goods with precision and trust.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Our Vision
                </h4>
                <p className="text-muted-foreground">
                  To become Pakistan's most dependable logistics partner.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2F0fbbb0ba4d2d46fe9f093d04981ffb25?format=webp&width=600"
              alt="Suira Logistics Operations"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
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
              Comprehensive logistics and transportation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Freight Forwarding (Land, Air, Sea)",
                desc: "Multi-modal transportation solutions",
              },
              {
                icon: Package,
                title: "Warehousing & Storage Solutions",
                desc: "Modern storage facilities across Pakistan",
              },
              {
                icon: Clock,
                title: "Cold Chain Transport",
                desc: "Temperature-controlled logistics for perishables",
              },
              {
                icon: Globe,
                title: "Supply Chain Management",
                desc: "End-to-end supply chain optimization",
              },
              {
                icon: Shield,
                title: "Customs Clearance Assistance",
                desc: "Streamlined international shipping",
              },
              {
                icon: Package,
                title: "Real-time Tracking",
                desc: "Advanced tracking and monitoring systems",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "FMCG Brands",
              icon: "🏭",
            },
            {
              name: "Textile Exporters",
              icon: "🧵",
            },
            {
              name: "Manufacturing Industries",
              icon: "⚙️",
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
            "Suira Logistics ensures every shipment arrives safely and on
            schedule — every time."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              R
            </div>
            <div>
              <p className="font-semibold text-foreground">Logistics Manager</p>
              <p className="text-sm text-muted-foreground">
                Leading Manufacturing Firm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Request Logistics Quote</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get a fast quote for your shipping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">support@suira-logistics.com</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90">+92 345 789 1011</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 rounded-lg mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="opacity-90">Port Qasim Industrial Zone, Karachi</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Request Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default SuiraLogistics;
