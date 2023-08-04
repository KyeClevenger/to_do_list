import React, {useState} from 'react'

const ToDo = (props) => {
    const [toDo, setToDo] = useState("")


    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(toDo)
        const tasks = {toDo, isCompleted: false}
        props.newToDo(tasks)
        // setToDo("")
    }
    const updateToDo = (e) => {
        setToDo(e.target.value)
    }

return (
    <div>
        <form action="">
            <label htmlFor="todo">To Do</label>
            <input type="text" name='todo' value= {toDo} onChange={updateToDo}/>
            <button onClick={handlesubmit}>Add</button>
        </form>
    </div>
)
}


export default ToDo