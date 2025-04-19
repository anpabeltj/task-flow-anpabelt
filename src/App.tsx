import { AddTaskForm } from "@/components/shared/add-task-form";
import { Tasks } from "@/components/tasks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import type { CreateTaskData, Task } from "@/modules/task/type";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "a",
      title: "Go to gym",
      completed: false,
      datetime: new Date("2025-03-04 07:00"),
    },
    {
      id: "b",
      title: "Read a book",
      completed: true,
      datetime: new Date("2025-03-04 10:00"),
    },
    {
      id: "c",
      title: "Lunch",
      completed: true,
      datetime: new Date("2025-03-04 12:00"),
    },
    {
      id: "d",
      title: "Go to Office",
      completed: false,
      datetime: new Date("2025-03-04 14:00"),
    },
    {
      id: "f",
      title: "Meeting with client",
      completed: false,
      datetime: new Date("2025-03-04 15:00"),
    },
  ]);

  function removeTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function addTask(createTaskData: CreateTaskData) {
    const newTask: Task = {
      id: String(tasks.length + 1),
      title: createTaskData.title,
      completed: false,
      datetime: new Date(),
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 flex justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-800">TaskFlow</h1>
          <h2 className="mt-2 text-2xl font-semibold">Task management app</h2>
        </div>

        <div>
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/anpabeltj.png" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-10">
        <div>
          <AddTaskForm addTask={addTask} />
        </div>

        <Tasks tasks={tasks} removeTask={removeTask} />
      </main>
    </div>
  );
}
