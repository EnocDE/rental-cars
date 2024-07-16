import { Calendar, Car, Heart, Sheet } from "lucide-react";
import { SidebarDataType } from "./SidebarRoutes.types";

export const dataGeneralSidebar: SidebarDataType[] = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard"
  },
  {
    icon: Calendar,
    label: "Car Reserves",
    href: "/reserves"
  },
  {
    icon: Heart,
    label: "Favorite cars",
    href: "/favorites"
  }
]

export const dataAdminSidebar: SidebarDataType[] = [
  {
    icon: Sheet,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager"
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/dashboard/admin/reservations"
  }
]