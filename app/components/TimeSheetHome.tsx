import { Inputs } from "./Inputs"
import SearchDropDown from "./SearchDropDown"
import { DatePickerWithRange } from "./Temp"
import { TimeSheetTable } from "./TimeSheetTable"

export const TimeSheetHome = () => {
    return <div>
        <h1>My Timesheet</h1>
        {/* <Inputs/> */}
        <div className='flex  justify-between shadow-md m-4 rounded-md border-2 '>
            <div className='p-2'>
                <DatePickerWithRange />
            </div>
        </div>

        <div className='bg-white m-4'>
            <div className="p-2 m-2">
                <TimeSheetTable />

            </div>
            {/* <div className='flex justify-between  m-4 p-10 border-2 '>
                <p className='font-medium'>Client</p>
                <p className='font-medium'>Project</p>
                <p className='font-medium'>Phase</p>
                <p className='font-medium'>Task</p>
                <p className='font-medium'>Mon</p>
                <p className='font-medium'>Tue</p>
                <p className='font-medium'>Wed</p>
                <p className='font-medium'>Thu</p>
                <p className='font-medium'>Fri</p>
                <p className='font-medium'>Sat</p>
                <p className='font-medium'>Sun</p>
                <p className='font-medium'>Total</p>
            </div> */}
        </div>
        <div>
        </div>
    </div>
}