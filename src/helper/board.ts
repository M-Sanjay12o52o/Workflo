interface Tasks extends Task {
    id: string;
}

export const boards: Array<{ title: string; tasks: Tasks[] }> = [
    {
        title: "To do",
        tasks: [
            {
                id: "1",
                title: "Implement user authentication",
                description: "Develop and integrate user authentication using email and password.",
                status: "To do",
                priority: "Urgent",
                deadline: "2024-12-31"
            },
            {
                id: "2",
                title: "Design basic UI components",
                description: "Create reusable UI components for buttons, inputs, and cards.",
                status: "To do",
                priority: "Medium",
                deadline: "2024-11-30"
            },
            {
                id: "5",
                title: "Create database schema",
                description: "Define the structure for storing user data and tasks.",
                status: "To do",
                priority: "Urgent",
                deadline: "2024-11-25"
            },
            {
                id: "6",
                title: "Develop API endpoints",
                description: "Create RESTful API endpoints for user management and task operations.",
                status: "To do",
                priority: "Medium",
                deadline: "2024-12-15"
            }
        ]
    },
    {
        title: "In progress",
        tasks: [
            {
                id: "3",
                title: "Develop core application logic",
                description: "Implement the main functionalities of the application.",
                status: "In progress",
                priority: "Urgent",
                deadline: "2024-11-15"
            },
            {
                id: "7",
                title: "Implement user registration flow",
                description: "Develop user registration and account creation functionality.",
                status: "In progress",
                priority: "Urgent",
                deadline: "2024-11-20"
            },
            {
                id: "8",
                title: "Design responsive layout",
                description: "Create a responsive design for different screen sizes.",
                status: "In progress",
                priority: "Medium",
                deadline: "2024-12-05"
            }
        ]
    },
    {
        title: "Under review",
        tasks: [
            {
                id: "9",
                title: "Implement user profile management",
                description: "Allow users to edit their profile information.",
                status: "Under review",
                priority: "Medium",
                deadline: "2024-11-28"
            },
            {
                id: "10",
                title: "Test accessibility",
                description: "Ensure the application is accessible to users with disabilities.",
                status: "Under review",
                priority: "Low",
                deadline: "2024-12-10"
            }
        ]
    },
    {
        title: "Finished",
        tasks: [
            {
                id: "4",
                title: "Write unit tests",
                description: "Create comprehensive unit tests for the application.",
                status: "Finished",
                priority: "Low",
                deadline: "2024-11-01"
            },
            {
                id: "11",
                title: "Deploy application to production",
                description: "Release the application to the public.",
                status: "Finished",
                priority: "Low",
                deadline: "2024-12-20"
            },
            {
                id: "12",
                title: "Create user documentation",
                description: "Develop user guides and tutorials.",
                status: "Finished",
                priority: "Medium",
                deadline: "2024-12-15"
            }
        ]
    }
];
