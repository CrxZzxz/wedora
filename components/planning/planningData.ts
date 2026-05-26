import {
  CalendarRange,
  Camera,
  LayoutGrid,
  Mail,
  Store,
  Users,
  Wallet,
  ClipboardCheck,
  UserPlus,
  Send,
  Sparkles,
} from "lucide-react";

export const planningTabs = [
  {
    key: "overview",
    label: "Overview",
    icon: LayoutGrid,
  },
  {
    key: "invitation",
    label: "Invitation",
    icon: Mail,
  },
  {
    key: "guests",
    label: "Guests",
    icon: Users,
  },
  {
    key: "timeline",
    label: "Timeline",
    icon: CalendarRange,
  },
  {
    key: "budget",
    label: "Budget",
    icon: Wallet,
  },
  {
    key: "vendors",
    label: "Vendors",
    icon: Store,
  },
];

export const priorities = [
  {
    icon: Users,
    title: "Confirm pending guest RSVPs",
    badge: "32 Pending",
  },
  {
    icon: Sparkles,
    title: "Review decor proposals",
    badge: "2 Updates",
  },
  {
    icon: Camera,
    title: "Finalize photography shot list",
    badge: "3 Tasks",
  },
];

export const healthItems = [
  {
    icon: Wallet,
    label: "Budget",
    status: "On Track",
    color: "text-[#7FA36A]",
  },
  {
    icon: Users,
    label: "Guests",
    status: "Review",
    color: "text-[#C99B4A]",
  },
  {
    icon: Store,
    label: "Vendors",
    status: "Good",
    color: "text-[#7FA36A]",
  },
  {
    icon: CalendarRange,
    label: "Timeline",
    status: "On Track",
    color: "text-[#7FA36A]",
  },
  {
    icon: ClipboardCheck,
    label: "Tasks",
    status: "In Progress",
    color: "text-[#C99B4A]",
  },
];

export const quickActions = [
  {
    icon: ClipboardCheck,
    label: "Add Task",
  },
  {
    icon: UserPlus,
    label: "Add Guest",
  },
  {
    icon: Store,
    label: "Add Vendor",
  },
  {
    icon: Send,
    label: "Send Invite",
  },
  {
    icon: Sparkles,
    label: "Inspiration",
  },
];