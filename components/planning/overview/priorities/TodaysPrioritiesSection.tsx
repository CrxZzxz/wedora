import PriorityCard from "./PriorityCard";

import { prioritiesData } from "./prioritiesData";

import SectionTitle from "../shared/SectionTitle";

export default function TodaysPrioritiesSection() {
  /*
   FUTURE READY FILTER LAYER
   -------------------------
   Later this can come from:
   - user progress
   - wedding timeline
   - AI recommendations
   - backend task completion
   - vendor integrations
  */

  const visiblePriorities = prioritiesData.filter(
    (item) =>
      item.visible &&
      item.recommended &&
      !item.completed
  );

  return (
    <section className="mt-5 overflow-hidden">
      <SectionTitle
        title="Today's Priorities"
        action="View All"
      />

      {/* PRIORITY CAROUSEL */}
      <div
        className="
          mt-4
          flex gap-4
          overflow-x-auto
          overflow-y-hidden
          px-[2px]
          pb-[2px]
          scrollbar-hide
          snap-x snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          [&::-webkit-scrollbar-track]:hidden
          [&::-webkit-scrollbar-thumb]:hidden
        "
      >
        {visiblePriorities.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[170px]
              flex-shrink-0
              snap-start
            "
          >
            <PriorityCard
              title={item.title}
              badge={item.badge}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}