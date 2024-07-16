"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import { addDays } from "date-fns";
import { useState } from "react";
import CalendarSelector from "./CalendarSelector/CalendarSelector";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

interface ModalAddReserveProps {
  car: Car;
}

export default function ModalAddReserve(props: ModalAddReserveProps) {
  const { car } = props;
  const { priceDay, id: carId, name: carName } = car;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const handleReservate = async () => {
    if (Object.values(dateSelected).includes("" || undefined)) return toast({title: "You cannot make a reservation before selecting the dates.", variant: "destructive"});
    const response = await axios.post("/api/checkout", {
      carId,
      priceDay,
      carName,
      startDate: dateSelected.from,
      endDate: dateSelected.to
    })
    if (response.status != 200) {
      return toast({title: "Something went wrong."})
    }
    window.location = response.data.url
  };

  const handleSetDate = (date: {
    from: Date | undefined;
    to: Date | undefined;
  }) => {
    setDateSelected(date);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"} className="w-full mt-3">
          Reserve
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Select the days you want to reservate
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              handleSetDate={handleSetDate}
              priceDay={priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleReservate}>
            Reservate now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
