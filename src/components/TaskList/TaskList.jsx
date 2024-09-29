import { TaskItem } from '../TaskItem/TaskItem';

import styles from './TaskList.module.css';

export const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <ul className={styles.task_list}>
      {tasks.length < 1 && (
        <p>You don`t have any tasks or plans... it's impossible :)</p>
      )}
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
