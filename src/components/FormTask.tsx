"use client";

import { useState } from "react";
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function FormTask() {
    const createTask = useMutation(api.tasks.createTasks);
    const [text, setText] = useState("");

    const newTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            await createTask({ text });
            setText("");
        }
    }

    return (
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
                <form onSubmit={newTask} className="flex space-x-2">
                    <Input
                        type="text"
                        name="text"
                        placeholder="Add a new task..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1"
                    />
                    <Button type="submit" variant="secondary">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Task
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}