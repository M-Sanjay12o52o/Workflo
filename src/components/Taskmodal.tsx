'use client';

import React, { FC, useState } from 'react';
import { X, Maximize2, Share, Star, CheckCircle, Flag, Calendar, Tag, Edit, Plus } from 'lucide-react';

interface TaskmodalProps {
    onClose: () => void;
}

const Taskmodal: FC<TaskmodalProps> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                <div className="flex justify-between items-center p-4 border-b">
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
                </div>

                <div className="p-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-2xl font-bold border-b border-gray-300 focus:border-blue-500 outline-none"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                            <CheckCircle size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                            <Flag size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                            <Calendar size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Due Date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                            <Tag size={18} className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Tags"
                                className="bg-transparent outline-none w-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-start space-x-2 bg-gray-100 p-2 rounded">
                        <Edit size={18} className="text-gray-500 mt-1" />
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-transparent outline-none w-full h-24 resize-none"
                        />
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
            </div>
        </div>
    );
};

export default Taskmodal;