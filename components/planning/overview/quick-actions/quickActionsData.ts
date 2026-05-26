import {
  ClipboardList,
  UserPlus,
  Store,
  Send,
  Lightbulb,
} from "lucide-react";

import { QuickActionItem } from "./quickActions.types";

export const quickActionsData: QuickActionItem[] =
  [
    {
      id: "task",
      label: "Add Task",
      icon: ClipboardList,
    },

    {
      id: "guest",
      label: "Add Guest",
      icon: UserPlus,
    },

    {
      id: "vendor",
      label: "Add Vendor",
      icon: Store,
    },

    {
      id: "invite",
      label: "Send Invite",
      icon: Send,
    },

    {
      id: "inspiration",
      label: "Inspiration",
      icon: Lightbulb,
    },
  ];