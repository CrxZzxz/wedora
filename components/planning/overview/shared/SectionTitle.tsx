interface Props {
  title: string;
  action?: string;
}

export default function SectionTitle({
  title,
  action,
}: Props) {
  return (
    <div className="mb-4 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        {/* ICON */}
        <div
          className="
            flex h-5 w-5
            items-center justify-center
            rounded-full
            bg-[#F6EFE5]
          "
        >
          <span
            className="
              text-[15px]
              text-[#C8A45D]
            "
          >
            ✦
          </span>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-[19px]
            leading-none
            tracking-[-0.04em]
            text-[#171412]
          "
          style={{
            fontFamily:
              '"Cormorant Garamond","Playfair Display",serif',
            fontWeight: 600,
          }}
        >
          {title}
        </h2>
      </div>

      {/* ACTION */}
      {action && (
        <button
          className="
            rounded-full
            bg-[#F8F2E9]
            px-3 py-1.5
            text-[11px]
            font-medium
            tracking-[-0.01em]
            text-[#C29A55]
            transition-all duration-200
          "
        >
          {action}
        </button>
      )}
    </div>
  );
}