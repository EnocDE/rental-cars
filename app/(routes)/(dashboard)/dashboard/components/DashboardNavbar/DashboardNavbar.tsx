"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"

export default function DashboardNavbar() {
  return (
    <nav className="flex items-center justify-between w-full h-20 border-b gap-x-4 px-6 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
            <SheetContent side="left">
              <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <UserButton />
      </div>
    </nav>
  )
}
