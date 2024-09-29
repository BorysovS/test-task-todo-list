import { useState } from 'react';

import styles from './TaskForm.module.css';

export const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTask = {
      id: Date.now(),
      date: new Date().toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      text: taskName,
      isCompleted: false,
    };
    addTask(newTask);
    setTaskName('');
  };

  return (
    <form className={styles.task_form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        className={styles.form_input}
        onChange={evt => setTaskName(evt.target.value)}
        placeholder="Your next task..."
      />
      <button className={styles.submit_btn} type="submit">
        Add task
      </button>
    </form>
  );
};
