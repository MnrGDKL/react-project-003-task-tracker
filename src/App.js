import './App.css';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks';
import { useState } from 'react';

function App() {
  const header = "Task Tracker";
  const [showAddTask, setShowAddTask] = useState (false)

  const handleShow = () => setShowAddTask(!showAddTask)
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Dentist Appointment',
    day: 'Apr 8th at 10:30am',
    reminder:  false,
  },
  {
    id: 2,
    text: 'Meeting at Clarusway',
    day: 'Mar 26th at 1:30pm',
    reminder:  true,
  },
  {
    id: 3,
    text: 'Grocery Shopping',
    day: 'Apr 5th at 2:30pm',
    reminder:  false,
  }
])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  
  return (
    <div className='container'>
      <Header title={header} onAdd={handleShow} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} 
        /> 
      : <span>No Tasks to Show</span>}
      
    </div>
  )
}

export default App;