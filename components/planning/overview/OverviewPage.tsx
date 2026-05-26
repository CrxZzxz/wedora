import TodaysPrioritiesSection from "./priorities/TodaysPrioritiesSection";

import WeddingHealthSection from "./wedding-health/WeddingHealthSection";

import AIRecommendationSection from "./ai-recommendations/AIRecommendationSection";

import QuickActionsSection from "./quick-actions/QuickActionsSection";

export default function OverviewPage() {
  return (
    <>
      <TodaysPrioritiesSection />

      <WeddingHealthSection />

      <AIRecommendationSection />

      <QuickActionsSection />
    </>
  );
}