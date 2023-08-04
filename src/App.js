import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import ToDo from './Components/ToDo';
import {useState} from 'react';

function App() {
  const[nextToDo, setNextToDo] =useState([])
  const addToList =(task) => {
    setNextToDo([...nextToDo, task])
  }
  const deleteTask=(deleteIdx)=>{
    const byeTask = nextToDo.filter((eachTask, Idx) => Idx !== deleteIdx)
    setNextToDo(byeTask)
  }
  const updateTask = (updateIdx, isChecked) =>{
    const newTasks = nextToDo.map((eachTask, Idx) =>{
      if(updateIdx === Idx){
        return {...eachTask, isCompleted:isChecked}
      }
      else{
        return eachTask;
      }
    })
    setNextToDo(newTasks)
  }

  return (
    <div className="App">
      <ToDo newToDo={addToList}></ToDo>
      <Display show={nextToDo} byeTask = {deleteTask} updateTask={updateTask}></Display>
    </div>
  );
}

export default App;
