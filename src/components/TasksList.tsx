"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export function TaskList() {
    const tasks = useQuery(api.tasks.getTasks);
    const updateTask = useMutation(api.tasks.completeTask);

    const onChangeCompleteTask = async (id: any, complete: boolean) => {
        await updateTask({ id, complete });
    }

    return (
        <div className="grid gap-4">
            {tasks?.map((task) => (
                <Card key={task._id} className="bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-semibold">{task.text}</CardTitle>
                        <Badge variant={task.complete ? "default" : "secondary"}>
                            {task.complete ? "Completed" : "Pending"}
                        </Badge>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-2">
                        <Checkbox
                            checked={task.complete}
                            onCheckedChange={(checked) => 
                                onChangeCompleteTask(task._id, checked as boolean)
                            }
                        />
                        <span className="text-sm text-muted-foreground">
                            Mark as complete
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}