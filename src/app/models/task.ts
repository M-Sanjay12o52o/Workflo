interface Task {
    title: string;
    status: string;
    description: string;
    priority: 'Urgent' | 'Medium' | 'Low';
    deadline: string;
}

interface Tasks extends Task {
    id: string;
}