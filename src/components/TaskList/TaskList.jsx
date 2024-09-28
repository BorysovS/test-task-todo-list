import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({tasks, toggleCompleted, deleteTask}) => {
    return (
      <ul >
        {tasks.map(task => (
          <li  key={task.id}>
            <TaskItem task={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask}/>
          </li>
        ))}
      </ul>
    );
  };