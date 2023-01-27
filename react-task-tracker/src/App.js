import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks , setTasks] = useState(
    [
        {
            id : 1,
            text : 'Doctors Appointment',
            day : 'Feb 5th at 2:30pm',
            remainder:true,
        },
        {
            id:2,
            text : 'Meeting at school',
            day : 'Feb 6th at 2:30pm',
            remainder : true,
        },
        {
            id : 3,
            text : 'Food Shooping',
            day : 'Feb 5th at 2:30pm',
            reminder : false,
        }
    ]
)

//Function to delete the task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !==id))
}
  return (
    
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App