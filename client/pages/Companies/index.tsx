import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceholderPage from "../PlaceholderPage";

const CompanyPage: React.FC = () => {
  const { company } = useParams<{ company: string }>();

  const companyInfo: Record<
    string,
    { title: string; description: string; emoji: string }
  > = {
    technologies: {
      title: "Suira Technologies",
      description:
        "We are working on detailed information about our cutting-edge technology solutions. Check back soon!",
      emoji: "💻",
    },
    constructions: {
      title: "Suira Constructions",
      description:
        "Detailed information about our construction and infrastructure projects is coming soon.",
      emoji: "🏗️",
    },
    foods: {
      title: "Suira Foods",
      description:
        "Learn more about our premium food products and distribution network coming soon.",
      emoji: "🍱",
    },
    logistics: {
      title: "Suira Logistics",
      description:
        "Information about our comprehensive logistics and supply chain solutions is being prepared.",
      emoji: "📦",
    },
    textiles: {
      title: "Suira Textiles",
      description:
        "Details about our sustainable textile manufacturing and fashion solutions coming soon.",
      emoji: "👔",
    },
  };

  const info = company ? companyInfo[company] : null;

  if (!info) {
    return (
      <PlaceholderPage
        title="Company Not Found"
        description="The company page you're looking for doesn't exist."
        emoji="❓"
        backLink="/"
      />
    );
  }

  return (
    <PlaceholderPage
      title={info.title}
      description={info.description}
      emoji={info.emoji}
      backLink="/"
    />
  );
};

export default CompanyPage;
