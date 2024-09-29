import styles from './TaskCounter.module.css';

export const TaskCounter = ({ total, completed }) => {
  const activeValue = total - completed;

  return (
    <div>
      <p className={styles.counter_title}>Total : {total}</p>
      <p className={styles.counter_title}>Active: {activeValue}</p>
      <p className={styles.counter_title}>Completed: {completed}</p>
    </div>
  );
};
