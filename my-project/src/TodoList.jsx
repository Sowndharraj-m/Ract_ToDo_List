import React, { useState } from 'react'
function ToDoList() {
    const [tasks, setTasks] = useState(["Hello All","How is your day"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if( newTask.trim() !== ""){
            setTasks([...tasks,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
          const updatedTasks = tasks.filter((_,i)=>i !== index);
          setTasks(updatedTasks);
    }

    function MoveTaskUp(index) {
          const updatedTasks = [...tasks];
          const [movedTask] = updatedTasks.splice(index,1);
          updatedTasks.splice(index-1,0,movedTask);
          setTasks(updatedTasks);
    }

    function MoveTaskDown(index) {
          const updatedTasks = [...tasks];
          const [movedTask] = updatedTasks.splice(index,1);
          updatedTasks.splice(index+1,0,movedTask);
          setTasks(updatedTasks);
    }

    return (

        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder='Enter a task' />
                <button
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-up-button' onClick={() => MoveTaskUp(index)}>Up</button>
                        <button className='move-down-button' onClick={() => MoveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default ToDoList
