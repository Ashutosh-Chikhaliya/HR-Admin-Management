import React from 'react'
import InputField from '../widgets/InputField'

const Header = () => {
    return (
        <div className='relative'>
            <div className='flex justify-between items-center p-6  h-full'>
                {/* Page Title or User Greeting */}
                <div>
                    <h2 className='text-[#16151C] font-bold text-xl'>Hello Robert👋</h2>
                    <h2 className='text-[#A2A1A8] text-sm'>Good Morning</h2>
                </div>


                <div className='flex gap-5'>
                    <div className='flex relative items-center h-full'>
                        <img src="src\assets\dashboard\search.svg" alt="" className='absolute ms-2 h-5' />
                        <InputField className={"ps-10 h-full p-3"} placeholder={"search"} />
                    </div>

                    <button className='bg-[#A2A1A81A] rounded-lg px-3 p-3 items-center flex cursor-pointer'>
                        <img src="src/assets/dashboard/notification.svg" alt="" className='h-5' />
                    </button>

                    <div className='flex gap-1 border-[#A2A1A833] border-[1px] items-center rounded-lg pe-1 p-0.5'>
                        <div className=''>
                            <img src="src\assets\dashboard\profilePhoto.svg" alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-[#16151C] font-bold'>Robert Allen</div>
                            <div className='text-xs text-[#A2A1A8]'>HR Manager</div>
                        </div>
                        <div>v</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
