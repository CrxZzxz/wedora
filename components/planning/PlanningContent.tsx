import OverviewPage from "./overview/OverviewPage";

import { PlanningTab } from "./types";

interface Props {
  activeTab: PlanningTab;
}

function ComingSoonCard() {
  return (
    <div
      className="
        mt-6
        rounded-[28px]
        border border-[#F1E8DD]
        bg-[#FFFCF8]
        p-6
        shadow-[0_10px_30px_rgba(186,155,110,0.05)]
      "
    >
      <p
        className="
          text-[15px]
          font-medium
          tracking-[-0.03em]
          text-[#6E655D]
        "
      >
        This section is being beautifully crafted.
      </p>
    </div>
  );
}

export default function PlanningContent({
  activeTab,
}: Props) {
  switch (activeTab) {
    case "overview":
      return <OverviewPage />;

    /*
      FUTURE TAB MODULES
      ------------------
      invitation -> InvitationPage
      guests -> GuestsPage
      timeline -> TimelinePage
      budget -> BudgetPage
      vendors -> VendorsPage
    */

    default:
      return <ComingSoonCard />;
  }
}