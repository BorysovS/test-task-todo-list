import { TaskItem } from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

export const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <ul className={styles.task_list}>
      {tasks?.map(task => (
        <li key={task.id}>
          <TaskItem
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
