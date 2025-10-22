import { FormTask } from "@/components/FormTask";
import { TaskList } from "@/components/TasksList";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

export default async function Home() {
  const preloaded = await preloadQuery(api.tasks.getTasks);

  return (
    <main className="container mx-auto py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">j2tasks</h1>
        <p className="text-muted-foreground">Manage your tasks efficiently</p>
      </div>
      <FormTask />
      <TaskList getTasks={preloaded} />
    </main>
  );
}
