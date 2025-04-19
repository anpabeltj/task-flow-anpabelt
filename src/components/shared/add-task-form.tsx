import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CreateTaskData } from "@/modules/task/type";

export function AddTaskForm({
  addTask,
}: {
  addTask: (createTaskData: CreateTaskData) => void;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTask = {
      title: String(formData.get("title")),
    };

    addTask(newTask);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" name="title" />
      </div>

      <Button>Add Task</Button>
    </form>
  );
}
