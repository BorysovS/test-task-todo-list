export const TaskItem = ({ task, toggleCompleted, deleteTask }) => {
    console.log(task.isCompleted)
    return (
      <div >
        <input
          type="checkbox"
          onChange={() => toggleCompleted(task.id)}
          checked={task.isCompleted}
        />
        <p >{task.text}</p>
        <button type="button" onClick={() => deleteTask(task.id)}>Delete
        </button>
      </div>
    );
  };