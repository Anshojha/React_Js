import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {


  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 2:30pm',
        remainder: true,
      },
      {
        id: 3,
        text: 'Food Shooping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      }
    ]
  )

  // Function to add task

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1

    const newTask = {id , ...task}
    setTasks([...tasks , newTask])
  }

  //Function to delete the task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // Toggle Remainder

  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, remainder:
            !task.remainder
        } : task))
  }






  return (

    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
        : 'No Task To Show'}
    </div>
  )
}

export default App