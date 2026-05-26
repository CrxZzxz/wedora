import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface Props {
  title: string;
  badge: string;
  icon: LucideIcon;
}

export default function PriorityCard({
  title,
  badge,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
        flex min-h-[132px]
        flex-col justify-between
        rounded-[30px]
        border border-[#F3EADF]
        bg-[#FFFCF8]
        p-3.5
        shadow-[0_12px_34px_rgba(187,157,109,0.08)]
      "
    >
      {/* TOP */}
      <div>
        {/* ICON */}
        <div
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-[14px]
            bg-[#F8F3EC]
            shadow-[0_4px_12px_rgba(0,0,0,0.03)]
          "
        >
          <Icon
            size={18}
            strokeWidth={2}
            className="text-[#C59E58]"
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-3
            whitespace-pre-line
            text-[12.5px]
            font-semibold
            leading-[1.42]
            tracking-[-0.035em]
            text-[#171412]
          "
        >
          {title}
        </h3>
      </div>

      {/* BOTTOM */}
      <div className="mt-3 flex items-end justify-between">
        {/* BADGE */}
        <div
          className="
            rounded-full
            border border-[#F3E8DA]
            bg-[#F8EFE4]
            px-3 py-1.5
            text-[11px]
            font-medium
            tracking-[-0.02em]
            text-[#D0945B]
          "
        >
          {badge}
        </div>

        {/* ACTION */}
        <button
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-[#EEE5DA]
            bg-white/95
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            transition-all duration-200
            hover:scale-[1.03]
          "
        >
          <ArrowRight
            size={17}
            className="text-[#C59E58]"
          />
        </button>
      </div>
    </div>
  );
}