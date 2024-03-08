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
  const today = new Date()
 const [tempSelection,setTempSelection]=React.useState({
  from:today,
  to:today
 })

  const [date, setDate] = React.useState<DateRange>({
    from: undefined,
    to: undefined,
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


React.useEffect(()=>{
  if (tempSelection?.to > date?.to) {
    setDate({ from: undefined, to: undefined });
  } else {
    let newTo = new Date(tempSelection?.from ?? today);
    let newFrom = new Date(tempSelection?.from ?? today);
    switch (tempSelection.from.getDay()) {
      case 0:
        newTo.setDate(newTo.getDate());
        newFrom.setDate(newFrom.getDate() - 6);
        setDate({ from: newFrom, to: newTo });
        break;
      case 1:
        newTo.setDate(newTo.getDate() + 6);
        setDate({ from: tempSelection?.from, to: newTo });
        break;
      case 2:
        newTo.setDate(newTo.getDate() + 5);
        newFrom.setDate(newFrom.getDate() - 1);
        setDate({ from: newFrom, to: newTo });
        break;

      case 3:
        newTo.setDate(newTo.getDate() + 4);
        newFrom.setDate(newFrom.getDate() - 2);
        setDate({ from: newFrom, to: newTo });
        break;

      case 4:
        newTo.setDate(newTo.getDate() + 3);
        newFrom.setDate(newFrom.getDate() - 3);
        setDate({ from: newFrom, to: newTo });
        break;

      case 5:
        newTo.setDate(newTo.getDate() + 2);
        newFrom.setDate(newFrom.getDate() - 4);
        setDate({ from: newFrom, to: newTo });
        break;

      case 6:
        newTo.setDate(newTo.getDate() + 1);
        newFrom.setDate(newFrom.getDate() - 5);
        setDate({ from: newFrom, to: newTo });
        break;
      default:
        break;
    }
    setDate({ from: newFrom, to: newTo });
  }
},[tempSelection])





  const onSelectRange: SelectRangeEventHandler = (range) => {
    setTempSelection({from:range?.from?? today,to:range?.to ?? today})
  }
 
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
            numberOfMonths={1}
            weekStartsOn={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}