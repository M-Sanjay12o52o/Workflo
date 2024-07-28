"use client";

import { FC, useState } from 'react'
import Sidebar from './SideBar'
import Image from 'next/image';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
    const [userName, setUserName] = useState<string>("Joe Gardner");

    return <div className='flex flex-row bg-white border-r border-[#DEDEDE]'>
        {/* section 1 */}
        <div>
            <Sidebar />
        </div>
        {/* section 2 */}
        <div className='w-screen bg-[#F4F4F4] p-4'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-black font-bold text-3xl'>Good morning, {userName}</h1>
                <p className='w-40 h-5 font-inter text-sm font-normal text-black flex-none order-0'>
                    Help & feedback
                    <img className='inline-block' src="/icons/help.svg" width={24} height={24} />
                </p>
            </div>
            <div className='flex flex-row mb-4'>
                <div className='flex flex-row bg-white mr-2 rounded-md'>
                    <div className='flex items-center justify-center'>
                        <img src="/icons/one.svg" width={40} height={40} />
                    </div>
                    <div>
                        <h3
                            className='text-gray-500 w-[245px] h-5 font-inter font-semibold flex-none order-0 self-stretch'
                        >Introducing tags</h3>
                        <p
                            className='w-[244.67px] h-[51px] font-inter text-[14px] leading-relaxed text-gray-500 flex-none order-1 self-stretch'
                        >Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
                    </div>
                </div>
                <div className='flex flex-row bg-white mr-2 rounded-md'>
                    <div className='flex items-center justify-center'>
                        <img src="/icons/two.svg" width={40} height={40} />
                    </div>
                    <div>
                        <h3
                            className='text-gray-500 w-[245px] h-5 font-inter font-semibold flex-none order-0 self-stretch'
                        >Share Notes Instantly</h3>
                        <p
                            className='text-gray-500 w-[244.67px] h-[51px] font-inter text-[14px] leading-relaxed flex-none order-1 self-stretch'
                        >Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing option</p>
                    </div>
                </div>
                <div className='flex flex-row h-[100px] bg-white rounded-md'>
                    <div className='flex items-center justify-center'>
                        <img src="/icons/three.svg" width={40} height={40} />
                    </div>
                    <div>
                        <h3
                            className='text-gray-500 w-[245px] h-5 font-inter font-semibold flex-none order-0 self-stretch'
                        >Access Anywhere</h3>
                        <p
                            className='text-gray-500 w-[244.67px] h-[51px] font-inter text-[14px] leading-relaxed flex-none order-1 self-stretch'
                        >Sync your notes across all devices. Stay productive whether you are on your phone, tablet, or computer.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <input type="text" placeholder='Search' />
                <img src="/icons/searchicon.svg" width={24} height={24} />
                <p>
                    Calender view
                    <img src="/icons/calender.svg" width={24} height={24} />
                </p>
                <p>
                    Automation
                    <img src="/icons/automation.svg" width={24} height={24} />
                </p>
                <p>
                    Filter
                    <img src="/icons/filter.svg" width={24} height={24} />
                </p>
                <p>
                    Share
                    <img src="/icons/share.svg" width={24} height={24} />
                </p>
                <button className='p-2 gap-2 h-[40px] w-[136px] full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white rounded-lg shadow-md'>Create new
                    <img className='inline-block' src="/icons/plus.svg" width={24} height={24} />
                </button>
            </div>
        </div>
        {/* // section 2 */}
        <div className='bg-green-700'>
            <h1>section 3</h1>
        </div>
    </div>
}

export default Dashboard