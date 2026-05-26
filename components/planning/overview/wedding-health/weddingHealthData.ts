import {
  Wallet,
  Users,
  ClipboardList,
  CalendarDays,
  BriefcaseBusiness,
} from "lucide-react";

export const weddingHealthData = [
  {
    id: 1,
    label: "Budget",
    status: "On Track",
    icon: Wallet,
    color: "green",
  },

  {
    id: 2,
    label: "Guests",
    status: "Review",
    icon: Users,
    color: "gold",
  },

  {
    id: 3,
    label: "Vendors",
    status: "Good",
    icon: BriefcaseBusiness,
    color: "green",
  },

  {
    id: 4,
    label: "Timeline",
    status: "On Track",
    icon: CalendarDays,
    color: "green",
  },

  {
    id: 5,
    label: "Tasks",
    status: "In Progress",
    icon: ClipboardList,
    color: "orange",
  },
] as const;