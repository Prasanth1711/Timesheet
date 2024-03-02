import { Inputs } from "./Inputs"
import { DatePickerWithRange } from "./Temp"

export const TimeSheetHome = () => {
    return <div>
        <h1>My Timesheet</h1>
        {/* <Inputs/> */}
        <div className='flex  justify-between shadow-md m-4 rounded-md border-2 '>
            <div className='p-2'>
                <DatePickerWithRange />
            </div>
        </div>
        <div className='bg-white'>
            <div className='flex justify-between  m-4 p-10 border-2 '>
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
            </div>
        </div>
        <div>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ELAN</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Familia Dental</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">iSpace</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Securitas Electronic Security (SES)</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
}