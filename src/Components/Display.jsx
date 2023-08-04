// collaborated with owen, richard, josh, daisy, eric, christain, anthony

import React, {useState} from 'react'

const Display = (props) => {

    const byeTask = (Idx) => {
        props.byeTask(Idx)
        console.log(Idx)
    }

const makeComplete = (Idx, isChecked) => {
    props.updateTask(Idx,isChecked)
    console.log(Idx)
}
return (
    <div style={{display:'inline-flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        {props.show.map((eachTask, Idx) =>{
            return(
                <div style={{background: 'purple', height:100, width:100,margin:20}}>
                    {eachTask.isCompleted? <p style={{textDecoration: 'line-through'}}> {eachTask.toDo}</p>:<p>{eachTask.toDo}</p>}
                    <p></p>
                    <input type="checkbox" checked={eachTask.isCompleted} onChange={e=>makeComplete(Idx,e.target.checked)}/>
                    <button name='delete' onClick={() => byeTask(Idx)}>Delete</button>
                </div>
            )
        })}
    </div>
)
}

export default Display