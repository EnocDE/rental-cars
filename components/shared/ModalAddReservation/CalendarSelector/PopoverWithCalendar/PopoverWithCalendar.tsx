import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { Dispatch } from "react";
import { DateRange } from "react-day-picker";

interface PopoverWithCalendarProps {
  date: DateRange | undefined;
  setDate: Dispatch<DateRange | undefined>
}

export default function PopoverWithCalendar(
  props: PopoverWithCalendarProps
) {
  const { date, setDate } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "flex items-center justify-start text-left font-normal gap-2",
            !date ? "text-muted-foreground" : null
          )}
        >
          <CalendarIcon className="w-4 h-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date?.from, "LLL dd, y")} - {""}
                {format(date?.to, "LLL dd, y")}
              </>
            ) : (
              format(date?.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={(value) => {
            setDate({
              from: (() => {
                if (value?.from && value.from < addDays(new Date(), -1)) return
                return value?.from
              })(),
              to: (() => {
                if (value?.from != null && value.to != null && value?.from >= value.to ) return
                return value?.to
              })(),
            });
          }}
          numberOfMonths={1}
          className="bg-white shadow-md rounded-lg"
        />
      </PopoverContent>
    </Popover>
  );
}
