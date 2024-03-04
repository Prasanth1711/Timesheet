"use client"
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Dispatch, SetStateAction } from "react";


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type SelectRangeEventHandler = (range: DateRange | undefined) => void;

export function DatePickerWithRange({ getSelectedDates }: any) {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 6);

  const [date, setDate] = React.useState<DateRange>({
    from: today,
    to: nextWeek,
  })
  function getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }

  React.useEffect(() => {
    if (date.from && date.to) {
      const temp = getDatesInRange(date.from!, date.to!)
      getSelectedDates(temp)
    }
  }, [date])
  const onSelectRange: SelectRangeEventHandler = (range) => {
    const newTo = new Date(range?.from ?? today);
    newTo.setDate(newTo.getDate() + 6);
    if(range?.from?.getDay()==1){
      if (range?.to > date?.to) {
          setDate({ from: undefined, to: undefined })
      } else{
        setDate({ from: range?.from, to: newTo })
      }
    }
  };

  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onSelectRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
