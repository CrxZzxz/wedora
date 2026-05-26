import {
  Users,
  Flower2,
  Camera,
  UtensilsCrossed,
  Music4,
  Sparkles,
  Car,
  Hotel,
  HeartHandshake,
  ScrollText,
} from "lucide-react";

export const prioritiesData = [
  {
    id: "guest-rsvp",
    title: "Confirm pending\nguest RSVPs",
    badge: "32 Pending",
    icon: Users,

    category: "guests",
    priority: "high",
    weddingStage: "invitation",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "decor-review",
    title: "Review decor\nproposals",
    badge: "2 Updates",
    icon: Flower2,

    category: "decor",
    priority: "medium",
    weddingStage: "design",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "photo-shotlist",
    title: "Finalize photography\nshot list",
    badge: "3 Tasks",
    icon: Camera,

    category: "media",
    priority: "medium",
    weddingStage: "planning",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "catering-tasting",
    title: "Schedule catering\ntasting",
    badge: "Tomorrow",
    icon: UtensilsCrossed,

    category: "catering",
    priority: "high",
    weddingStage: "food",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "music-selection",
    title: "Choose wedding\nplaylist",
    badge: "6 Suggestions",
    icon: Music4,

    category: "entertainment",
    priority: "low",
    weddingStage: "experience",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "invitation-design",
    title: "Approve invitation\ndesign",
    badge: "Ready Review",
    icon: Sparkles,

    category: "invitation",
    priority: "high",
    weddingStage: "invitation",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "transport-plan",
    title: "Arrange guest\ntransportation",
    badge: "12 Guests",
    icon: Car,

    category: "hospitality",
    priority: "medium",
    weddingStage: "hospitality",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "hotel-blocking",
    title: "Confirm hotel\nreservations",
    badge: "4 Pending",
    icon: Hotel,

    category: "hospitality",
    priority: "medium",
    weddingStage: "hospitality",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "family-meeting",
    title: "Plan family\ncoordination",
    badge: "Discussion",
    icon: HeartHandshake,

    category: "family",
    priority: "low",
    weddingStage: "coordination",

    completed: false,
    recommended: true,
    visible: true,
  },

  {
    id: "vendor-contracts",
    title: "Verify vendor\ncontracts",
    badge: "2 Reviews",
    icon: ScrollText,

    category: "vendors",
    priority: "high",
    weddingStage: "vendors",

    completed: false,
    recommended: true,
    visible: true,
  },
];