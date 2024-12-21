import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  // Função disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras.");
      return;
    }
    // Adiciona a tarefa
    const newTasks = [
      ...tasks, // Pega todas as tarefas que já existam e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }
  // função para mostrar se a tarefa foi concluida ou não
  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  // Função para remover uma tarefa
  function handleRemoveTask(taskId: number) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>
        <button type="submit">Adicionar tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className={styles.removeButton}
              >
                Remover
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
