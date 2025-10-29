import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";

const completedVentures = [
  {
    id: 1,
    title: "Smart City Development Phase 1",
    location: "Metropolitan Area",
    year: "2023",
    description:
      "Implementation of IoT infrastructure and smart traffic management systems across city zones",
    emoji: "🏙️",
  },
  {
    id: 2,
    title: "Green Energy Solar Farm",
    location: "Rural District",
    year: "2022",
    description:
      "500MW solar power generation facility with energy storage solutions",
    emoji: "☀️",
  },
  {
    id: 3,
    title: "Digital Transformation Initiative",
    location: "Multiple Locations",
    year: "2023",
    description:
      "Enterprise-wide digital modernization for corporate clients across sectors",
    emoji: "💻",
  },
  {
    id: 4,
    title: "Sustainable Textile Manufacturing",
    location: "Industrial Zone",
    year: "2022",
    description:
      "Eco-friendly textile production facility with zero-waste processes",
    emoji: "👕",
  },
];

const ongoingVentures = [
  {
    id: 5,
    title: "Smart City Development Phase 2",
    location: "Metropolitan Area",
    progress: 65,
    description:
      "Expansion of smart infrastructure to additional city districts with AI traffic optimization",
    emoji: "🏙️",
  },
  {
    id: 6,
    title: "Eco-Friendly Manufacturing Hub",
    location: "Industrial Zone",
    progress: 45,
    description:
      "State-of-the-art sustainable manufacturing facility with green technology",
    emoji: "🏭",
  },
  {
    id: 7,
    title: "Logistics Network Expansion",
    location: "Regional Hubs",
    progress: 55,
    description: "Expansion of distribution network to 50 new cities",
    emoji: "🚚",
  },
  {
    id: 8,
    title: "Food Processing Innovation",
    location: "Agricultural Region",
    progress: 38,
    description:
      "Advanced food processing facility using AI quality control and automation",
    emoji: "🥬",
  },
];

type VenturesView = "completed" | "ongoing" | undefined;

const VenturesContent: React.FC<{ view?: VenturesView }> = ({ view }) => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Ventures</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Showcasing our portfolio of completed and ongoing projects across
            diverse sectors
          </p>
        </div>
      </section>

      {/* Completed Ventures */}
      {view !== "ongoing" && (
      <section className="section-container py-16 md:py-24">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Completed Ventures
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {completedVentures.map((venture) => {
            const ventureImages: Record<number, string> = {
              1: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
              2: "https://images.unsplash.com/photo-1509391366360-2e938d440220?w=600&h=400&fit=crop",
              3: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
              4: "https://images.unsplash.com/photo-1581092918270-8cf394b693c7?w=600&h=400&fit=crop",
            };
            return (
              <div
                key={venture.id}
                className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-all"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={ventureImages[venture.id]}
                    alt={venture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {venture.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">
                    📍 {venture.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    ✓ Completed {venture.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {venture.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      )}

      {/* Ongoing Ventures */}
      {view !== "completed" && (
      <section className="bg-secondary py-16 md:py-24">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ongoing Ventures
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-600 rounded-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingVentures.map((venture) => {
              const ventureImages: Record<number, string> = {
                5: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
                6: "https://cdn.builder.io/api/v1/image/assets%2F1453fc3140134efc8736573bb805caf2%2Fd821e4eed9fe43dcba9090b34ed22eda?format=webp&width=600",
                7: "https://images.unsplash.com/photo-1578575437999-589f3cde1cda?w=600&h=400&fit=crop",
                8: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
              };
              return (
                <div
                  key={venture.id}
                  className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-all"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={ventureImages[venture.id]}
                      alt={venture.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground flex-1">
                        {venture.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                        In Progress
                      </span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">
                      📍 {venture.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {venture.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">
                          Progress
                        </span>
                        <span className="text-primary font-bold">
                          {venture.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-amber-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${venture.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Stats */}
      {!view && (
      <section className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-secondary rounded-xl border border-border">
            <div className="text-5xl font-bold text-primary mb-2">
              {completedVentures.length}
            </div>
            <p className="text-lg font-semibold text-foreground">
              Completed Projects
            </p>
          </div>
          <div className="text-center p-8 bg-secondary rounded-xl border border-border">
            <div className="text-5xl font-bold text-primary mb-2">
              {ongoingVentures.length}
            </div>
            <p className="text-lg font-semibold text-foreground">
              Ongoing Ventures
            </p>
          </div>
          <div className="text-center p-8 bg-secondary rounded-xl border border-border">
            <div className="text-5xl font-bold text-primary mb-2">
              $
              {(
                (completedVentures.length * 150 +
                  ongoingVentures.length * 200) /
                100
              ).toFixed(0)}
              B+
            </div>
            <p className="text-lg font-semibold text-foreground">
              Total Investment
            </p>
          </div>
        </div>
      </section>
      )}
    </Layout>
  );
};

const Ventures: React.FC = () => {
  const { type } = useParams<{ type: "completed" | "ongoing" }>();

  if (type === "completed" || type === "ongoing") {
    return <VenturesContent view={type} />;
  }

  return <VenturesContent />;
};

export default Ventures;
