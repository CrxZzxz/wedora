"use client";

import Image from "next/image";

import {
  CalendarDays,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function PlanningHero() {
  return (
    <section>
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1
            className="
              text-[25px]
              font-[550]
              leading-[0.92]
              tracking-[-0.06em]
              text-[#171412]
            "
            style={{
              fontFamily:
                '"Playfair Display", "Cormorant Garamond", serif',
            }}
          >
            My Wedding Plan
          </h1>

          <p
            className="
              mt-2
              text-[10px]
              font-medium
              tracking-[-0.01em]
              text-[#8D847B]
            "
          >
            Organized today. Beautiful forever.
          </p>
        </div>

        {/* PLAN ASSISTANT */}
        <button
          className="
            flex items-center gap-1.5
            rounded-full
            border border-[#E9DED2]
            bg-[#FCF8F3]/85
            px-2.5 py-1.5
            text-[10px]
            font-medium
            text-[#C09A55]
            shadow-[0_4px_12px_rgba(192,154,85,0.08)]
            backdrop-blur-md
          "
        >
          <Sparkles size={10} />

          <span>Plan Assistant</span>
        </button>
      </div>

      {/* HERO CARD */}
      <div
        className="
          relative
          mt-3
          overflow-hidden
          rounded-[22px]
          border border-[#EEE4D9]
          shadow-[0_12px_35px_rgba(186,155,110,0.08)]
        "
      >
        {/* FULL BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/planning/planning-hero-bg.png"
            alt="Wedding"
            fill
            priority
            className="
              object-cover
              object-center
              scale-[1.03]
            "
          />
        </div>

        {/* GLOBAL OVERLAY */}
        <div className="absolute inset-0 bg-black/[0.08]" />

        {/* LEFT READABILITY OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#FFFCF8]/97
            via-[#FFFCF8]/72
            via-[40%]
            to-transparent
          "
        />

        {/* BOTTOM CINEMATIC FADE */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/[0.16]
            via-transparent
            to-transparent
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            aspect-[16/9]
            flex flex-col justify-between
            p-3.5
          "
        >
          {/* TOP CONTENT */}
          <div className="max-w-[60%]">
            {/* COUPLE NAMES */}
            <div
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-white/40
                px-2 py-1
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.24em]
                  text-[#C6A15E]
                "
              >
                AARAV & DIYA
              </p>

              <Sparkles
                size={10}
                className="text-[#D7B878]"
              />
            </div>

            {/* COUNTDOWN */}
            <div className="mt-1">
              <div className="ml-[5px] flex items-start gap-1">
                <h2
                  className="
                    text-[32px]
                    leading-[0.70]
                    tracking-[-0.05em]
                    text-[#433E39]
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", serif',
                    fontWeight: 50,
                  }}
                >
                  127
                </h2>

                <span
                  className="
                    pt-[5px]
                    text-[12px]
                    font-medium
                    tracking-[-0.03em]
                    text-[#433E39]
                  "
                >
                  days
                </span>
              </div>

              {/* SUBTITLE */}
              <div className="mt-[1px] flex items-center gap-1">
                <p
                  className="
                    ml-[3px]
                    text-[17px]
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#C59B4F]
                  "
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", "Playfair Display", serif',
                    fontWeight: 500,
                  }}
                >
                  to forever
                </p>

                <span className="text-[16px] text-[#D8B97C]">
                  ♡
                </span>
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-3 space-y-0.5">
              <div
                className="
                  flex items-center gap-1.5
                  text-[#6D655D]
                "
              >
                <div
                  className="
                    flex h-5 w-5 items-center justify-center
                    rounded-full
                    bg-white/45
                    backdrop-blur-md
                  "
                >
                  <CalendarDays size={11} />
                </div>

                <span className="text-[10px] font-medium">
                  25 December 2025
                </span>
              </div>

              <div
                className="
                  flex items-center gap-1.5
                  text-[#6D655D]
                "
              >
                <div
                  className="
                    flex h-5 w-5 items-center justify-center
                    rounded-full
                    bg-white/45
                    backdrop-blur-md
                  "
                >
                  <MapPin size={11} />
                </div>

                <span className="text-[10px] font-medium">
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex items-end justify-between gap-3">
            {/* PROGRESS */}
            <div className="flex-1 max-w-[55%]">
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[11px] font-medium text-[#5E5650]">
                  Wedding Progress
                </p>

                <span className="text-[11px] font-semibold text-[#433E39]">
                  72%
                </span>
              </div>

              <div
                className="
                  h-[5px]
                  overflow-hidden
                  rounded-full
                  bg-white/40
                  backdrop-blur-sm
                "
              >
                <div className="h-full w-[72%] rounded-full bg-[#CBA24F]" />
              </div>
            </div>

            {/* CTA BUTTON */}
            <button
              className="
                flex items-center gap-1
                rounded-full
                bg-white/92
                px-3 py-1.5
                text-[11px]
                font-medium
                text-[#171412]
                shadow-[0_10px_25px_rgba(0,0,0,0.10)]
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-[1.02]
              "
            >
              View Invitation

              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}