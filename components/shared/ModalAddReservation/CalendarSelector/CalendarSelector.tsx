import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import DisplayReservationInfo from "./DisplayReservationInfo/DisplayReservationInfo";
import PopoverWithCalendar from "./PopoverWithCalendar/PopoverWithCalendar";

interface CalendarSelectorProps {
  handleSetDate: (date: {
    from: Date | undefined;
    to: Date | undefined;
  }) => void;
  priceDay: string;
}

export default function CalendarSelector(props: CalendarSelectorProps) {
  const { handleSetDate, priceDay } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  useEffect(() => {
    handleSetDate({
      from: date?.from,
      to: date?.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const calculateDays = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / oneDay);
  };

  const days = date?.from && date.to ? calculateDays(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-2")}>
        {days ? (
          <DisplayReservationInfo days={days} priceDay={priceDay} />
        ) : (
          <DisplayReservationInfo />
        )}
        <PopoverWithCalendar date={date} setDate={setDate} />
      </div>
    </>
  );
}
