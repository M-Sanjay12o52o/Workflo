"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Taskmodal from './Taskmodal';
import { Reorder } from 'framer-motion';
import { Card } from './ui/card';
import React, { FC, useState } from 'react';
import { X, Maximize2, Share, Star, CheckCircle, Flag, Calendar, Tag, Edit, Plus, Clock, MoreVertical, } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

interface Tasks extends Task {
    id: string;
}

// Define the props for the TaskBoard component
interface TaskBoardProps {
    key: number;
    boardTitle: string;
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
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

const TaskBoard: React.FC<TaskBoardProps> = ({ boardTitle, tasks, setTasks }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<"To do" | "In progress" | "Under review" | "Finished" | undefined>(undefined);
    const [priority, setPriority] = useState<"Low" | "Medium" | "Urgent" | undefined>(undefined);
    const [deadline, setDeadline] = useState<Date | null>(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const statusOptions = [
        { value: 'To do', label: 'To do' },
        { value: 'In progress', label: 'In progress' },
        { value: 'Under review', label: 'Under review' },
        { value: 'Finished', label: 'Finished' },
    ];

    const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value as 'To do' | 'In progress' | 'Under review' | 'Finished');
    };

    const priorityOptions = [
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Urgent', label: 'Urgent' },
    ];

    const handleChangePriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(event.target.value as 'Low' | 'Medium' | 'Urgent');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/postTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    status,
                    priority,
                    deadline: deadline ? new Date(deadline) : undefined,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create task');
            }

            const createdTask = await response.json();
            console.log(createdTask);
        } catch (error) {
            console.error('Error creating task:', error);
            setError('Failed to create task. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow p-4 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    {boardTitle}
                    <img src="/icons/progress.svg" alt="" className="w-5 h-5 ml-2" />
                </h2>
                <MoreVertical className="text-gray-400 cursor-pointer" size={20} />
            </div>
            <Reorder.Group values={tasks} onReorder={setTasks}>
                {tasks.map((task, index) => (
                    <Reorder.Item key={task.id} value={task.id}>
                        <Card
                            key={index}
                            className="bg-gray-50 rounded-lg p-3 mb-3"
                        // onClick={() => router.push(`/tasks/${task.id}`)}
                        >
                            <p>index: {index}</p>
                            <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                            <div className="flex justify-between items-center">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityStyle(task.priority)}`}>
                                    {task.priority}
                                </span>
                                <div className="flex items-center text-xs text-gray-500">
                                    <Clock size={14} className="mr-1" />
                                    <span>{task.deadline}</span>
                                </div>
                            </div>
                        </Card>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
            {/* <button
                className="w-full py-2 mt-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                onClick={() => router.push('/assign')}
            >
                <Plus size={16} className="mr-2" />
                Add new
            </button> */}

            {SHEET_SIDES.map((side) => (
                <Sheet key={side}>
                    <SheetTrigger asChild>
                        {/* <Button variant="outline">{side}</Button> */}
                        <button
                            className="w-full py-2 mt-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                            <Plus size={16} className="mr-2" />
                            Add new
                        </button>
                    </SheetTrigger>
                    <SheetContent side={side} className="w-[400px] sm:w-[540px]">
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                                {/* <div className="flex justify-between items-center p-4 border-b">
                                    <div className="flex items-center space-x-2">
                                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                            <X size={20} />
                                        </button>
                                        <Maximize2 size={20} className="text-gray-500" />
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button className="flex items-center text-gray-600 hover:text-gray-800">
                                            <Share size={18} className="mr-1" />
                                            Share
                                        </button>
                                        <button className="flex items-center text-gray-600 hover:text-gray-800">
                                            <Star size={18} className="mr-1" />
                                            Favorite
                                        </button>
                                    </div>
                                </div> */}

                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                                        <Share size={18} className="mr-1" />
                                        Share
                                    </button>
                                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                                        <Star size={18} className="mr-1" />
                                        Favorite
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="p-6 space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="w-full text-2xl font-bold border-b border-gray-300 focus:border-blue-500 outline-none text-black"
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                                                <CheckCircle size={18} className="text-gray-500" />
                                                <select
                                                    value={status}
                                                    onChange={handleChangeStatus}
                                                    className="bg-transparent outline-none w-full text-black"
                                                >
                                                    <option value="">-- Select status --</option>
                                                    {statusOptions.map((status) => (
                                                        <option key={status.value} value={status.value}>
                                                            {status.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                                                <Flag size={18} className="text-gray-500" />
                                                <select
                                                    value={priority}
                                                    onChange={handleChangePriority}
                                                    className="bg-transparent outline-none w-full text-black"
                                                >
                                                    <option value="">-- Select priority --</option>
                                                    {priorityOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                                                <Calendar size={18} className="text-gray-500" />
                                                <DatePicker
                                                    selected={deadline}
                                                    onChange={(date: Date | null) => setDeadline(date)}
                                                    dateFormat={'yyyy-MM-dd'}
                                                    className="text-gray-500"
                                                />
                                                <input type="text"
                                                    placeholder='Due Date'
                                                    value={deadline ? deadline.toLocaleDateString() : ''}
                                                    readOnly
                                                    className="bg-transparent outline-none w-full text-black"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-2 bg-gray-100 p-2 rounded">
                                            <Edit size={18} className="text-gray-500 mt-1" />
                                            <textarea
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="bg-transparent outline-none w-full h-24 resize-none text-black"
                                            />
                                        </div>

                                        {error && <p className='text-red-500'>{error}</p>}

                                        <div className="flex justify-end space-x-2">
                                            {/* <button
                                                type="button"
                                                onClick={onClose}
                                                className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
                                            >
                                                Cancel
                                            </button> */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                                            >
                                                {isSubmitting ? 'Creating...' : 'Create Task'}
                                            </button>
                                        </div>

                                        <button className="flex items-center text-blue-600 hover:text-blue-800">
                                            <Plus size={18} className="mr-1" />
                                            Add custom property
                                        </button>

                                        <hr className="my-4" />

                                        <div className="text-center text-gray-500">
                                            Start writing, or drag your own files here.
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))
            }
        </div >
    );
};

export default TaskBoard;