import { useEffect, useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { AppBar } from './components/AppBar/AppBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

import './App.css';

const getInitialTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return savedTasks;
};

function App() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortNewestTask, setSortNewestTask] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks.length ? tasks : []));
  }, [tasks]);

  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const updateTaskCompleted = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const removeTask = id => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id);
    });
  };

  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'active') {
      return !task.isCompleted;
    } else if (filterStatus === 'complited') {
      return task.isCompleted;
    }
    return tasks;
  });

  const sortTasksByDate = sortNewestTask
    ? filteredTasks.reverse()
    : filteredTasks;

  const handleSorted = () => {
    setSortNewestTask(prevSortNewestTask => !prevSortNewestTask);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <Layout>
      <AppBar
        total={totalTasks}
        setFilterStatus={setFilterStatus}
        completed={completedTasks}
        setSorted={handleSorted}
      />
      <div className="task_section_wrapper">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={sortTasksByDate}
          toggleCompleted={updateTaskCompleted}
          deleteTask={removeTask}
        />
      </div>
    </Layout>
  );
}

export default App;
