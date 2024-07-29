import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        console.log('postTask', body);

        if (!body.title || !body.description || !body.status) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks`;
        console.log('backendUrl', backendUrl);
        if (!backendUrl) {
            return NextResponse.json(
                { error: "Missing backend URL" },
                { status: 500 }
            );
        }
        const response = await fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(errorData, { status: response.status });
        }

        // successful response
        const createdTask = await response.json();
        return NextResponse.json(createdTask, { status: 201 });
    } catch (error) {
        console.error('Error creating task:', error);
        return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
    }
}