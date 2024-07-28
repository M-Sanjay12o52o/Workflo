import React from 'react';
import { Home, LayoutGrid, Settings, Users, BarChart2, LogOut, ChevronRight, Download } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between items-start p-6 w-[285px] h-screen bg-white border-r border-[#DEDEDE]">
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                            <span className="text-xl font-medium text-[#080808]">Joe Gardner</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-5">
                            <Home className="text-gray-600" size={24} />
                            <Users className="text-gray-600" size={24} />
                            <BarChart2 className="text-gray-600" size={24} />
                        </div>
                        <button className="flex items-center px-2 py-2 bg-[#F4F4F4] rounded">
                            <LogOut className="text-gray-600 mr-2" size={20} />
                            <span className="text-base text-[#797979]">Logout</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <button className="flex items-center gap-3 p-2 bg-[#F4F4F4] rounded w-full">
                        <Home size={24} className="text-[#797979]" />
                        <span className="text-xl text-[#797979]">Home</span>
                    </button>
                    <button className="flex items-center gap-3 p-2 hover:bg-[#F4F4F4] rounded w-full">
                        <LayoutGrid size={24} className="text-[#797979]" />
                        <span className="text-xl text-[#797979]">Boards</span>
                    </button>
                    <button className="flex items-center gap-3 p-2 hover:bg-[#F4F4F4] rounded w-full">
                        <Settings size={24} className="text-[#797979]" />
                        <span className="text-xl text-[#797979]">Settings</span>
                    </button>
                    <button className="flex items-center gap-3 p-2 hover:bg-[#F4F4F4] rounded w-full">
                        <Users size={24} className="text-[#797979]" />
                        <span className="text-xl text-[#797979]">Teams</span>
                    </button>
                    <button className="flex items-center gap-3 p-2 hover:bg-[#F4F4F4] rounded w-full">
                        <BarChart2 size={24} className="text-[#797979]" />
                        <span className="text-xl text-[#797979]">Analytics</span>
                    </button>
                </div>

                <button className="flex justify-center items-center p-2 gap-2 w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white rounded-lg shadow-md">
                    <span className="text-xl font-medium">Button</span>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="flex items-center p-2 gap-2 w-full bg-[#F3F3F3] rounded-lg mt-4">
                <Download size={40} className="text-[#666666]" />
                <div>
                    <h3 className="text-xl font-medium text-[#666666]">Download the app</h3>
                    <p className="text-sm text-[#666666]">Get the full experience</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;