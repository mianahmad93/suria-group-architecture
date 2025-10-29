import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-amber-600 to-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Suira Group
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Leading the way in innovation, integrity, and sustainable growth
            across multiple industries
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value through innovative solutions,
                responsible business practices, and strategic partnerships that
                drive sustainable growth across all our ventures.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading diversified business group recognized globally
                for excellence, integrity, and positive impact on society,
                creating opportunities and prosperity for all stakeholders.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white border border-border rounded-xl hover-lift transition-all group">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Our Values"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-6">
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, innovation, excellence, sustainability, and customer
                focus. We believe in building trust through transparency and
                delivering quality in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values List */}
        <div className="bg-secondary rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Integrity - Operating with honesty and transparency",
              "Innovation - Embracing change and driving progress",
              "Excellence - Pursuing quality in all endeavors",
              "Sustainability - Protecting our planet for future generations",
              "Collaboration - Working together for mutual success",
              "Customer Focus - Delivering exceptional value",
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container py-16 md:py-24">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
          Our Journey
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mx-auto mb-16"></div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              year: "2010",
              title: "Foundation",
              desc: "Suira Group was established with a vision to create value through diversified business ventures.",
            },
            {
              year: "2012",
              title: "First Expansion",
              desc: "Launched Suira Technologies, marking our entry into the digital transformation space.",
            },
            {
              year: "2015",
              title: "Portfolio Growth",
              desc: "Expanded with Suira Constructions and Suira Foods, diversifying our business portfolio.",
            },
            {
              year: "2018",
              title: "Logistics Integration",
              desc: "Acquired and integrated Suira Logistics to strengthen our supply chain capabilities.",
            },
            {
              year: "2020",
              title: "Textiles Division",
              desc: "Established Suira Textiles focusing on sustainable and innovative textile solutions.",
            },
            {
              year: "2024",
              title: "Market Leadership",
              desc: "Recognized as a leading diversified business group with presence across 5 major sectors.",
            },
          ].map((milestone, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                {index < 5 && <div className="w-1 h-16 bg-primary mt-4"></div>}
              </div>
              <div className="pt-2 pb-8">
                <div className="text-sm font-bold text-primary">
                  {milestone.year}
                </div>
                <h4 className="text-xl font-semibold text-foreground mt-2">
                  {milestone.title}
                </h4>
                <p className="text-muted-foreground mt-2">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Companies" },
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Employees" },
              { number: "50+", label: "Active Projects" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
