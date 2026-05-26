import { LucideIcon } from "lucide-react";

export interface WeddingHealthItem {
  id: number;

  label: string;

  status: string;

  icon: LucideIcon;

  color: "green" | "gold" | "orange";

  progress?: number;
}