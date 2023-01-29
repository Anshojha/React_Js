import { useState } from 'react'

const Addtask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefalut()
        if (!text) {
            alert("Please add the task!")
            return
        }
        
        onAdd({ text, day, remainder })
        
        setText('')
        setDay('')
        setRemainder(false)

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task' />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Day & Time' />
            </div>

            <div className='form-control form-control-check'>
                <label>SetRemainder</label>
                <input type='checkbox' checked={remainder} value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)} />
            </div>

            <input type='submit' className='btn btn-block' value='Save Task' />
        </form>
    )
}

export default Addtask
