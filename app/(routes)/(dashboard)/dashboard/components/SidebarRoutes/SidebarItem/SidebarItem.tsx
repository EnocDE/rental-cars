import Link from "next/link";
import { SidebarDataType } from "../SidebarRoutes.types";
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  item: SidebarDataType
}

export default function SidebarItem(props: SidebarItemProps) {
  const { href, icon: Icon, label } = props?.item
  const pathname = usePathname()
  const activePath = pathname === href
  return (
    <Link
      className={cn(`flex gap-x-2 mt-2 first-of-type:mt-0 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer transition ${activePath ? 'bg-slate-300/40' : ''}`)}
      href={href}>
      <Icon className="h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  )
}
