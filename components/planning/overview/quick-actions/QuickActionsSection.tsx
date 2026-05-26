"use client";

import SectionTitle from "../shared/SectionTitle";

import QuickActionCard from "./QuickActionCard";

import { quickActionsData } from "./quickActionsData";

export default function QuickActionsSection() {
  return (
    <section className="mt-5">
      <SectionTitle title="Quick Actions" />

      <div
        className="
          mt-4
          flex items-start justify-between
          gap-3
        "
      >
        {quickActionsData.map((item) => (
          <QuickActionCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* BOTTOM HINT */}
      <div
        className="
          mt-5
          flex items-center justify-center
          rounded-full
          border border-[#EFE4D7]
          bg-[#FBF7F2]
          px-4 py-2
        "
      >
        <p
          className="
            text-center
            text-[12px]
            text-[#9B8E81]
          "
        >
          ⓘ Swipe or tap on a section above
          to focus on what matters most.
        </p>
      </div>
    </section>
  );
}