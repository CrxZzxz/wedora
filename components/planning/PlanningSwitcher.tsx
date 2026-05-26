"use client";

import { planningTabs } from "./planningData";

import { PlanningTab } from "./types";

interface Props {
  activeTab: PlanningTab;
  onChange: (tab: PlanningTab) => void;
}

export default function PlanningSwitcher({
  activeTab,
  onChange,
}: Props) {
  return (
    <section className="mt-5">
      <div
        className="
          relative
          grid grid-cols-6
          items-center
          rounded-[20px]
          border border-[#FCF9F5]
          bg-[#FCF9F5]
          p-[2px]
          shadow-[0_10px_35px_rgba(190,160,120,0.06)]
          backdrop-blur-xl
        "
      >
        {planningTabs.map((tab, index) => {
          const Icon = tab.icon;

          const active = activeTab === tab.key;

          return (
            <div
              key={tab.key}
              className="relative flex items-center justify-center"
            >
              {/* CENTER DIVIDER */}
{index === 3 && (
  <div
    className="
      absolute left-0 top-1/2
      h-[34px] w-px
      -translate-y-1/2
      bg-[#ECE2D7]
    "
  />
)}

              <button
                onClick={() =>
                  onChange(tab.key as PlanningTab)
                }
                className="
                  relative
                  flex w-full flex-col items-center justify-center
                  rounded-[18px]
                  py-[12px]
                  transition-all duration-300
                "
              >
                {/* ACTIVE BACKGROUND */}
                {active && (
                  <>
                    <div
                      className="
                        absolute inset-0
                        rounded-[18px]
                        bg-[#D1AA58]
                        shadow-[0_12px_24px_rgba(209,170,88,0.24)]
                      "
                    />

                    
                  </>
                )}

                {/* ICON */}
                <Icon
                  size={19}
                  strokeWidth={2}
                  className={`
                    relative z-10
                    transition-all duration-300
                    ${
                      active
                        ? "text-[#FFFDF9]"
                        : "text-[#766E67]"
                    }
                  `}
                />

                {/* LABEL */}
                <span
                  className={`
                    relative z-10
                    mt-[7px]
                    text-[10px]
                    font-medium
                    tracking-[-0.02em]
                    transition-all duration-300
                    ${
                      active
                        ? "text-[#FFFDF9]"
                        : "text-[#6F6760]"
                    }
                  `}
                >
                  {tab.label}
                </span>

                {/* ACTIVE INDICATOR */}
                {active && (
                  <div
                    className="
                      absolute -bottom-[4px]
                      h-[9px] w-[18px]
                      rounded-full
                      border-[3px]
                      border-[#F7F2EC]
                      bg-[#D1AA58]
                      shadow-[0_4px_10px_rgba(209,170,88,0.25)]
                    "
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}