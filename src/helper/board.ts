export const boards: Array<{ title: string; tasks: Task[] }> = [
    {
        title: "To do",
        tasks: [
            {
                title: "Implement User Authentication",
                description: "Develop and integrate user authentication using email and password.",
                status: "To do",
                priority: "Urgent",
                deadline: "March 15, 2023"
            }
        ]
    },
    {
        title: "In progress",
        tasks: [
            {
                title: "Design Home page UI",
                description: "Develop and integrate user authentication using email and password.",
                status: "In progress",
                priority: "Urgent",
                deadline: "March 15, 2023"
            },
            {
                title: "Conduct User Feedback Survey",
                status: "To do",
                description: "Collect and analyze user feedback to improve app features.",
                priority: "Low",
                deadline: "March 15, 2023"
            }
        ]
    },
    {
        title: "Under review",
        tasks: [
            {
                title: "Integrate Cloud Storage",
                status: "To do",
                description: "Enable cloud storage for note backup and synchronization.",
                priority: "Urgent",
                deadline: "March 15, 2023"
            }
        ]
    },
    {
        title: "Finished",
        tasks: [
            {
                title: "Test Cross-browser Compatibility",
                status: "Finished",
                description: "Ensure the app works seamlessly across different web browsers.",
                priority: "Medium",
                deadline: "March 15, 2023"
            }
        ]
    },
    // ... other boards
];