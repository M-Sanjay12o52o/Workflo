"use client";

import { FC, useEffect, useState } from 'react';
import Sidebar from './SideBar';
import { Search, Calendar, Zap, Filter, Share, Plus, HelpCircle } from 'lucide-react';
import TaskBoard from './Taskboard';
import { useRouter } from 'next/navigation';
import { Card } from './ui/card';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const router = useRouter();
    const [userName, setUserName] = useState<string>("Joe Gardner");

    const boards = [
        { title: 'To do', tasks: tasks.filter((task) => task.status === 'To do') },
        { title: 'In progress', tasks: tasks.filter((task) => task.status === 'In progress') },
        { title: 'Under review', tasks: tasks.filter((task) => task.status === 'Under review') },
        { title: 'Finished', tasks: tasks.filter((task) => task.status === 'Finished') },
    ]

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/getTasks');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            setTasks(data);

            console.log('fetchTasks', data);
            return data;
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    }



    return (
        <div className="flex h-screen bg-[#F4F4F4]">
            {/* Section 1: Sidebar */}
            <div className="flex-shrink-0">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-grow overflow-hidden">
                {/* Section 2: Top content */}
                <div className="p-6 bg-white shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Good morning, {userName}</h1>
                        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                            Help & feedback
                            <HelpCircle className="ml-2" size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                            { icon: "/icons/one.svg", title: "Introducing tags", description: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient." },
                            { icon: "/icons/two.svg", title: "Share Notes Instantly", description: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options." },
                            { icon: "/icons/three.svg", title: "Access Anywhere", description: "Sync your notes across all devices. Stay productive whether you are on your phone, tablet, or computer." }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow">
                                <img src={item.icon} alt="" className="w-10 h-10 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                        {[
                            { icon: Calendar, text: "Calendar view" },
                            { icon: Zap, text: "Automation" },
                            { icon: Filter, text: "Filter" },
                            { icon: Share, text: "Share" }
                        ].map((item, index) => (
                            <button key={index} className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                                {item.text}
                                <item.icon className="ml-2" size={20} />
                            </button>
                        ))}
                        <button className="flex items-center px-4 py-2 bg-gradient-to-b from-[#4C38C2] to-[#2F2188] text-white rounded-lg shadow-md hover:from-[#5A45D1] hover:to-[#3A2A9E]"
                            onClick={() => router.push('/assign')}
                        >
                            Create new
                            <Plus className="ml-2" size={20} />
                        </button>
                    </div>
                </div>

                {/* Section 3: Bottom content */}
                <div className="grid grid-cols-4 gap-4">
                    {boards.map((board, index) => (
                        <TaskBoard
                            key={index}
                            boardTitle={board.title}
                            tasks={board.tasks}
                            setTasks={setTasks}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Dashboard;