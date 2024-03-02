export const Inputs = () => {
    return <div className='bg-white shadow-md rounded-md m-4 border-2'>

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


}

















