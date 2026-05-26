"use client";

import SectionTitle from "../shared/SectionTitle";

import WeddingHealthCard from "./WeddingHealthCard";

import { weddingHealthData } from "./weddingHealthData";

export default function WeddingHealthSection() {
  return (
    <section className="mt-4">
      <SectionTitle
        title="Wedding Health"
        action="View Details"
      />

      <div
        className="
          rounded-[30px]
          border border-[#F1E8DD]
          bg-[#FFFCF9]
          p-3
          shadow-[0_10px_30px_rgba(0,0,0,0.03)]
        "
      >
        <div className="flex items-center">
          {/* LEFT HEALTH SCORE */}
          <div
            className="
              flex w-[60px]
              flex-shrink-0
              flex-col items-center
              justify-center
            "
          >
            {/* CIRCLE */}
            <div
              className="
                relative
                flex h-[53px] w-[53px]
                items-center justify-center
                rounded-full
                border-[4px]
                border-[#9DDB9F]
              "
            >
              <div className="text-center">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    text-[#7CC97D]
                  "
                >
                  Good
                </p>

                <h3
                  className="
                    text-[15px]
                    font-bold
                    tracking-[-0.05em]
                    text-[#171412]
                  "
                >
                  80%
                </h3>
              </div>
            </div>

            <p
              className="
                mt-2
                text-center
                text-[8.5px]
                font-semibold
                leading-[1.1]
                text-[#433E39]
              "
            >
              Overall Health
            </p>
          </div>

          {/* DIVIDER */}
          <div
            className="
              mx-3
              h-[70px]
              w-px
              bg-[#EFE5DA]
            "
          />

          {/* RIGHT METRICS */}
          <div
            className="
              flex flex-1
              items-start
              justify-between
              gap-1
            "
          >
            {weddingHealthData.map((item) => (
              <WeddingHealthCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}