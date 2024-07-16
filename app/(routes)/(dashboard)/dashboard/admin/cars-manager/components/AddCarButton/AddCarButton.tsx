"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { useState } from "react"
import AddCarForm from "./AddCarForm/AddCarForm"

export default function AddCarButton() {
  const [openDialog, setOpenDialog] = useState(false)
  const handleCloseDialog = () => setOpenDialog(false)
  const handleShowDialog = () => setOpenDialog(true)

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 w-full sm:w-fit" variant={"outline"} onClick={handleShowDialog}>
          Add new car
          <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <AddCarForm handleCloseDialog={handleCloseDialog} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
