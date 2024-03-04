import { useState } from "react"
import { Inputs } from "./Inputs"
import SearchDropDown from "./SearchDropDown"
import { DatePickerWithRange } from "./Temp"
import { TimeSheetTable } from "./TimeSheetTable"
export interface DateDay {
    day: string,
    date: string
}
export const TimeSheetHome = () => {
    const [selectedDates, setSelectedDates] = useState<DateDay[]>([])
    console.log(selectedDates)
    return <div>
        <h1>My Timesheet</h1>
        <div className='flex  justify-between shadow-md m-4 rounded-md border-2 '>
            <div className='p-2'>
                <DatePickerWithRange getSelectedDates={(dates: any) => { setSelectedDates(dates.map((date: Date) => ({ date: date.getDate().toString(), day: date.getDay().toString() } as DateDay))) }} />
            </div>
        </div>

        <div className='bg-white m-4'>
            <div className="p-2 m-2">
                <TimeSheetTable selectedDates={selectedDates} />
            </div>
        </div>
        <div>
        </div>
    </div>
}