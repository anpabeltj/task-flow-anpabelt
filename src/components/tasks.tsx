import type { Tasks } from "@/modules/task/type";
import { Badge } from "@/components/ui/badge";
import { formatDateFriendly } from "@/lib/datetime";
import { Button } from "./ui/button";
// import { DeleteIcon } from "lucide-react";
import { Trash2, Pencil, Calendar } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

export function Tasks({
  tasks,
  removeTask,
}: {
  tasks: Tasks;
  removeTask: (id: string) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-6">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="rounded border border-gray-200 bg-white p-4 shadow"
        >
          <section className="flex items-end justify-between">
            <h3 className="text-lg font-semibold">{task.title}</h3>

            <div className="flex space-x-2">
              <Button
                onClick={() => removeTask(task.id)}
                size="icon-xs"
                variant="destructive"
              >
                <Trash2 />
                {/* <DeleteIcon /> */}
              </Button>

              <Button
                onClick={() => removeTask(task.id)}
                size="icon-xs"
                variant="default"
              >
                <Pencil />
                {/* <DeleteIcon /> */}
              </Button>
            </div>
          </section>

          <section className="flex items-end justify-between">
            <div>
              {task.datetime && (
                <time
                  dateTime={task.datetime.toLocaleString()}
                  className="text-sm text-gray-600"
                >
                  {formatDateFriendly(task.datetime)}
                </time>
              )}
              <Popover.Root>
                <Popover.Trigger asChild>
                  <Button size="icon-xs" variant="default">
                    <Calendar />
                  </Button>
                </Popover.Trigger>
                <Popover.Content className="border bg-white p-2 shadow">
                  <div>Popover content</div>
                  <Popover.Arrow />
                </Popover.Content>
              </Popover.Root>
            </div>

            <div className="mt-2 inline-block text-xs font-medium">
              {!task.completed && <Badge variant="pending">Pending</Badge>}
              {task.completed && <Badge variant="completed">Completed</Badge>}
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
