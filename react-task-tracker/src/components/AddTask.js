import {useState} from 'react'

const Addtask = () => {

const   [text , setText] = useState('')
const   [day , setDay] = useState('')
const   [remainder , setRemainder] = useState(false)


  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task'/>
      </div>
      <div className='form-control'>
        <label>Add Day & Time</label>
        <input type='text' placeholder='Day & Time'/>
      </div>
      <div className='form-control form-control-check'>
        <label>SetRemainder</label>
        <input type='checkbox'/>
      </div>
      <input type='submit' className='btn btn-block' value='Save Task'/>
    </form>
  )
}

export default Addtask
