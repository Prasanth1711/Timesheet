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

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const today = new Date(); // Get current date
  const nextWeek = new Date(today); // Create a new date object for today
  nextWeek.setDate(nextWeek.getDate() + 6); // Add 7 days to get the ending date of this week

  const [date, setDate] = React.useState<DateRange>({
    from: today, // Set starting date of range to today
    to: nextWeek, // Set ending date of range to next week
  })

  const onSelectRange: SelectRangeEventHandler = (range) => {
    if (range) {
      // Calculate the difference between the 'from' and 'to' dates in milliseconds
      const difference = (range.to ?? today).getTime() - (range.from ?? today).getTime();
      // Calculate the number of days between 'from' and 'to' dates
      const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

      // If the selected range is not exactly 7 days, adjust the 'to' date accordingly
      if (daysDifference !== 6) {
        const newTo = new Date(range.from ?? today); // Create a new Date object based on the selected 'from' date
        newTo.setDate(newTo.getDate() + 6 ); // Add 7 days to the 'from' date

        setDate({
          from: range.from ?? today,
          to: newTo,
        });
      }
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
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
