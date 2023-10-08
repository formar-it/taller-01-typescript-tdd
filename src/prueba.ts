interface Task {
  id: number;
  name: string;
  status: "in-progress" | "done" | "todo"; //Union de tipos
}

type TaskPrintCallback = (task: Task) => string;

const tarea = {
  id: 15,
  name: "Estudiar typescript",
  status: "in-progress",
} as const;

const nuevaTarea: Task = {
  id: 16,
  name: "Estudiar TDD",
  status: "done",
};

const tasks: Task[] = [nuevaTarea, tarea];

tasks.push({
  id: 15,
  name: "Estudiar POO",
  status: "todo",
});

function print(task: Task) {
  return `[${[task.id]}] ${task.name} (${task.status})`;
}

function printAll(task: Task[], cb: TaskPrintCallback) {
  task.forEach((t) => {
    const printString = cb(t);
    console.log(printString);
  });
}

const printMalisimo = (t: Task, p?: string) => "Hola Mundo";

printAll(tasks, print);
printAll(tasks, printMalisimo);
