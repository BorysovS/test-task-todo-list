import styles from './TaskItem.module.css';

import sprite from '../../../public/sprite.svg';

export const TaskItem = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div
      className={styles.task_item}
      style={{ opacity: task.isCompleted ? 0.5 : 1 }}
    >
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={() => toggleCompleted(task.id)}
          checked={task.isCompleted}
          className={styles.checkbox_input}
        />
        <span className={styles.slider}></span>
      </label>
      <p
        className={styles.task_text}
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.text}
      </p>
      <div className={styles.date_wrapper}>
        <svg
          width={16}
          height={16}
          aria-label="icon-calendar"
          className={styles.date_icon}
        >
          <use href={sprite + '#icon-calendar'}></use>
        </svg>
        <p className={styles.task_item_date}>{task.date}</p>
      </div>
      <button
        className={styles.del_btn}
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        <svg
          width={16}
          height={16}
          aria-label="icon-bin"
          className={styles.del_icon}
        >
          <use href={sprite + '#icon-bin'}></use>
        </svg>
      </button>
    </div>
  );
};
