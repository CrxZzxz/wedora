interface Props {
  title: string;
  buttonText: string;
}

export default function AIRecommendationCard({
  title,
  buttonText,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border border-[#F2E8DC]
        bg-[#FFFCF9]
        px-5
        py-4
        shadow-[0_10px_30px_rgba(0,0,0,0.03)]
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          right-[-20px]
          top-[-20px]
          h-[120px]
          w-[120px]
          rounded-full
          bg-[#F7E7CA]
          opacity-25
          blur-3xl
        "
      />

      <div
        className="
          relative z-10
          flex items-center justify-between
          gap-4
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* LABEL */}
          <div className="flex items-center gap-2">
            <span className="text-[#D1A85B]">
              ✦
            </span>

            <p
              className="
                text-[13px]
                font-semibold
                text-[#C49A53]
              "
            >
              AI Recommendation
            </p>
          </div>

          {/* TITLE */}
          <p
            className="
              mt-3
              max-w-[220px]
              text-[11px]
              leading-[1.6]
              text-[#433E39]
            "
          >
            {title}
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <button
          className="
            flex h-[30px]
            min-w-50px]
            items-center justify-center
            rounded-full
            bg-[#D3A956]
            px-3
            text-[11px]
            font-semibold
            text-white
            shadow-[0_10px_24px_rgba(211,169,86,0.28)]
            transition-all duration-200
            active:scale-[0.98]
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}