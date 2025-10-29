import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Suira Technologies Launches AI-Powered Solutions Platform",
    date: "2024-12-15",
    author: "Tech Team",
    excerpt:
      "Revolutionary AI platform designed to transform business operations and enhance productivity across industries.",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Suira Constructions Completes Mega Infrastructure Project",
    date: "2024-12-10",
    author: "Construction News",
    excerpt:
      "Historic milestone achieved with completion of the largest infrastructure project in the region, creating thousands of jobs.",
    category: "Construction",
    featured: true,
  },
  {
    id: 3,
    title: "Suira Foods Expands Distribution Network to 50 New Cities",
    date: "2024-12-05",
    author: "Business Development",
    excerpt:
      "Significant growth as we expand our premium food products to new markets, bringing quality closer to consumers.",
    category: "Foods",
    featured: false,
  },
  {
    id: 4,
    title: "Suira Logistics Achieves Carbon-Neutral Operations",
    date: "2024-11-28",
    author: "Sustainability Lead",
    excerpt:
      "Pioneering commitment to environmental responsibility through sustainable logistics practices and green technology adoption.",
    category: "Logistics",
    featured: false,
  },
  {
    id: 5,
    title: "Suira Textiles Wins International Design Award",
    date: "2024-11-20",
    author: "Design Team",
    excerpt:
      "Recognition for innovative sustainable textile designs that push the boundaries of fashion and environmental responsibility.",
    category: "Textiles",
    featured: false,
  },
  {
    id: 6,
    title: "Suira Group Named Best Employer by Industry Association",
    date: "2024-11-15",
    author: "HR Department",
    excerpt:
      "Recognition of our commitment to employee wellness, diversity, and inclusive workplace culture across all companies.",
    category: "Corporate",
    featured: false,
  },
];

const News: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Technology: "from-blue-500 to-cyan-500",
      Construction: "from-orange-500 to-yellow-500",
      Foods: "from-green-500 to-emerald-500",
      Logistics: "from-purple-500 to-pink-500",
      Textiles: "from-red-500 to-rose-500",
      Corporate: "from-slate-500 to-gray-500",
    };
    return colors[category] || "from-primary to-blue-600";
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and
            announcements from Suira Group and our companies
          </p>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => {
              const articleImages: Record<number, string> = {
                1: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
                2: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
              };
              return (
                <div
                  key={article.id}
                  className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-all cursor-pointer group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={articleImages[article.id]}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
                          article.category,
                        )}`}
                      >
                        {article.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-primary" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} className="text-primary" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            All Articles
          </h2>
          <div className="space-y-4">
            {regularArticles.map((article, index) => (
              <div
                key={article.id}
                className="p-6 bg-white border border-border rounded-xl hover-lift transition-all cursor-pointer group slide-up"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
                          article.category,
                        )}`}
                      >
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} className="text-primary" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter to receive the latest news and
            announcements from Suira Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
