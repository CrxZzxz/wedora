import { WeddingHealthItem } from "./weddingHealth.types";

interface Props {
  item: WeddingHealthItem;
}

export default function WeddingHealthCard({
  item,
}: Props) {
  const Icon = item.icon;

  const statusColor: Record<
    "green" | "gold" | "orange",
    string
  > = {
    green: "text-[#69B96E]",
    gold: "text-[#D0A85C]",
    orange: "text-[#E5965B]",
  };

  return (
    <div
      className="
        flex w-[46px]
        flex-col items-center
        text-center
      "
    >
      {/* ICON */}
      <div
        className="
          flex h-10 w-10
          items-center justify-center
          rounded-[13px]
          border border-[#F1E8DE]
          bg-[#FFFCF9]
          shadow-[0_2px_8px_rgba(0,0,0,0.02)]
        "
      >
        <Icon
          size={15}
          className="text-[#746C64]"
        />
      </div>

      {/* LABEL */}
      <p
        className="
          mt-1.5
          text-[8.5px]
          font-medium
          leading-[1.15]
          text-[#433E39]
        "
      >
        {item.label}
      </p>

      {/* STATUS */}
      <span
        className={`
          mt-[2px]
          text-[7.5px]
          font-semibold
          leading-none
          whitespace-nowrap
          ${statusColor[item.color]}
        `}
      >
        {item.status}
      </span>
    </div>
  );
}