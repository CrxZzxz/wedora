import { QuickActionItem } from "./quickActions.types";

interface Props {
  item: QuickActionItem;
}

export default function QuickActionCard({
  item,
}: Props) {
  const Icon = item.icon;

  return (
    <button
      className="
        group
        flex flex-col
        items-center
        justify-center
        gap-2
        transition-all duration-200
        active:scale-[0.96]
      "
    >
      {/* ICON BOX */}
      <div
        className="
          flex h-[62px] w-[62px]
          items-center justify-center
          rounded-[20px]
          border border-[#F1E7DA]
          bg-[#FFFCF9]
          shadow-[0_8px_24px_rgba(0,0,0,0.03)]
          transition-all duration-200
          group-hover:-translate-y-1
        "
      >
        <Icon
          size={24}
          className="text-[#6E655E]"
        />
      </div>

      {/* LABEL */}
      <span
        className="
          text-[12px]
          font-medium
          text-[#534C46]
        "
      >
        {item.label}
      </span>
    </button>
  );
}