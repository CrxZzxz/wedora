"use client";

import SectionTitle from "../shared/SectionTitle";

import AIRecommendationCard from "./AIRecommendationCard";

import { recommendationsData } from "./recommendationsData";

export default function AIRecommendationSection() {
  return (
    <section className="mt-4">
      <SectionTitle
        title="AI Insights"
        action="Refresh"
      />

      <AIRecommendationCard
        title={recommendationsData.title}
        buttonText={
          recommendationsData.buttonText
        }
      />
    </section>
  );
}