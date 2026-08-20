import { useState } from "react";

function TodoList()
{
    const [tasks, setTasks] = useState([""]);

    const updateTask:any = () => {

    }

    const deleteTask:any = () => {
        
    }

    return(
        <>
            <input placeholder = "add new task..." onChange={(e:any) => setTask(e.input.value)}/>
            <p>+</p>
            <p>-</p>
            {tasks.map((item:string, id:number) => (
                
            ))}
        </>
    )
}

export default TodoList