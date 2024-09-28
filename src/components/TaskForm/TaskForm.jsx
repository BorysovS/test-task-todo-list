import { useState } from "react";


export const TaskForm = ({addTask}) => {
    const [taskName,setTaskName] = useState('');

    const handleSubmit = (evt) => {
      evt.preventDefault();
      const newTask = {
        id: Date.now(),
        date: Date.now(),
        text: taskName,
        isCompleted: false,
      }
      addTask(newTask);
      setTaskName('');
    };


  
    return (
      <form  onSubmit={handleSubmit}>
        <input type="text"
             value={taskName}
             onChange={evt => setTaskName(evt.target.value)}
             placeholder="Your next task..."/>
        <button type="submit">Add task</button>
      </form>
    );
  };