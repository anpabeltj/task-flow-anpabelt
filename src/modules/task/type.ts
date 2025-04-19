export type Task = {
  id: string;
  title: string;
  completed: boolean;
  datetime?: Date;
};

export type Tasks = Task[];

// export type CreateTask = {
//   title: string;
// }

export type CreateTaskData = Pick<Task, "title">;
