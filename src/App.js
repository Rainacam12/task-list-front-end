import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  
  },
];

const App = () => {
  const [tasks, setTasks] = React.useState(TASKS)

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      const updatedTask = prevTasks.filter(task => task.id !== id)
      return updatedTask
    })
  }
  const toggleTask = (id) => {
    setTasks(prevTasks => {
      const updatedTask = prevTasks.map(task => {
        return task.id === id ? { ...task, isComplete: !task.isComplete} : task
      })
      return updatedTask
    })
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
