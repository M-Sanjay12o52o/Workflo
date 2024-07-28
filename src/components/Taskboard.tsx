import React from 'react';
import { Clock, MoreVertical, Plus } from 'lucide-react';

// Define the shape of a task
interface Task {
    title: string;
    description: string;
    priority: 'Urgent' | 'Medium' | 'Low';
    date: string;
}

// Define the props for the TaskBoard component
interface TaskBoardProps {
    title: string;
    tasks: Task[];
}

// Helper function to get priority style
const getPriorityStyle = (priority: Task['priority']): string => {
    switch (priority) {
        case 'Urgent':
            return 'bg-red-100 text-red-800';
        case 'Medium':
            return 'bg-orange-100 text-orange-800';
        case 'Low':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

const TaskBoard: React.FC<TaskBoardProps> = ({ title, tasks }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    {title}
                    <img src="/icons/progress.svg" alt="" className="w-5 h-5 ml-2" />
                </h2>
                <MoreVertical className="text-gray-400 cursor-pointer" size={20} />
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 mb-3">
                    <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                    <div className="flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityStyle(task.priority)}`}>
                            {task.priority}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                            <Clock size={14} className="mr-1" />
                            <span>{task.date}</span>
                        </div>
                    </div>
                </div>
            ))}
            <button className="w-full py-2 mt-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Plus size={16} className="mr-2" />
                Add new
            </button>
        </div>
    );
};

export default TaskBoard;