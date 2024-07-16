"use client"
import { useAuth } from "@clerk/nextjs"
import SidebarItem from "./SidebarItem/SidebarItem"
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data"
import { Separator } from "@/components/ui/separator"

export default function SidebarRoutes() {
  const { userId } = useAuth()
  return (
    <aside className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">General</p>
          {
            dataGeneralSidebar.map(item => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
          <Separator className="my-4" />
          <p className="mb-2 text-slate-500">Admin</p>
          {
            dataAdminSidebar.map(item => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
      </div>
    </aside>
  )
}
