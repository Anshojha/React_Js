import { useState , useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {

  const [showAddTask , setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([ ]) 

  useEffect(()=>{
    const getTask = async ()=>{
      const taskFromServer = await fetchTask()
      setTasks(taskFromServer)
    }
    getTask()
   }, [])

   // Fetch data task
   const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/task')
   const data = res.json()

    return data
  }

  // Function to add task

  const addTask = async (task) => {

    const res  = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(task)
    })

    const data = res.json()


    setTasks([...tasks , data])

    // console.log(task)
    // const id = Math.floor(Math.random()*10000)+1
    // console.log(id)

    // const newTask = {id , ...task}
    // setTasks([...tasks , newTask])
  }

  //Function to delete the task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE',
    })
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
      <Header onAdd = {()=>setShowAddTask(!showAddTask) } showAdd = {showAddTask}/>
     { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
        : 'No Task To Show'}
    </div>
  )
}

export default App