"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Car } from "@prisma/client";
import { Pencil } from "lucide-react";
import IconWithText from "@/components/shared/IconWithText/IconWithText";
import { useState } from "react";
import CarCardEditForm from "./CarCardEditForm/CarCardEditForm";

interface CarCardEditButtonProps {
  car: Car
}

export default function CarCardEditButton(props: CarCardEditButtonProps) {
  const { car } = props
  const [openDialog, setOpenDialog] = useState(false)
  const handleCloseDialog = () => setOpenDialog(false)
  const handleShowDialog = () => setOpenDialog(true)

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild className="flex-1 w-full">
        <Button className='w-full' variant="default" onClick={handleShowDialog}>
          <IconWithText icon={Pencil} text='Edit' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <CarCardEditForm car={car} handleCloseDialog={handleCloseDialog}  />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
