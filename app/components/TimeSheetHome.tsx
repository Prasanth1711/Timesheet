export const TimeSheetHome = () => {
    return <div>
        <h1>My Timesheet</h1>
        <div className='bg-white shadow-md rounded-md m-4 border-2'>
            <div className='flex  justify-between shadow-md m-4 rounded-md border-2 '>
                <div className='p-2'>
                    <p className='font-medium'>Year</p>
                    <div className="w-30 pt-2">
                        <div className="relative  min-w-[200px] h-10">
                            <input
                                className="peer  h-full bg-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
                                placeholder=" " />
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='font-medium'>Month</p>
                    <div className="w-30 pt-2">
                        <div className="relative  min-w-[200px] h-10">
                            <input
                                className="peer  h-full bg-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
                                placeholder=" " />
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='font-medium'>Week</p>
                    <div className="w-30 pt-2">
                        <div className="relative  min-w-[200px] h-10">
                            <input
                                className="peer  h-full bg-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
                                placeholder=" " />
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='font-medium'>Start Date</p>
                    <div className="w-30 pt-2">
                        <div className="relative  min-w-[200px] h-10">
                            <input
                                className="peer  h-full bg-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
                                placeholder=" " />
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='font-medium'>End Date</p>
                    <div className="w-30 pt-2">
                        <div className="relative   h-10">
                            <input
                                className="peer  h-full bg-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
                                placeholder=" " />
                        </div>
                    </div>
                </div>
                <div className="flex align-middle justify-center items-end mx-2">
                    <button type="button" className=" text-white h-10  bg-blue-700 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

        </div>
        <div className='bg-white'>
            <div className='flex justify-between  m-4 p-10 border-2 '>
                <p className='font-medium'>Client</p>
                <p className= 'font-medium'>Project</p>
                <p className= 'font-medium'>Phase</p>
                <p className= 'font-medium'>Task</p>
                <p className= 'font-medium'>Mon</p>
                <p className= 'font-medium'>Tue</p>
                <p className= 'font-medium'>Wed</p>
                <p className= 'font-medium'>Thu</p>
                <p className= 'font-medium'>Fri</p>
                <p className= 'font-medium'>Sat</p>
                <p className= 'font-medium'>Sun</p>
                <p className= 'font-medium'>Total</p>
            </div>
        </div>
        <div>
            
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
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