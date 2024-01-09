import AddTask from "./AddTask"
import ToDoList from "./ToDoList"
import { getAllTodos } from "../../apis"

import dbConnect from "../utils/dbConnect"

export default async function Page() {

    // await dbConnect('GET');
    const tasks = await getAllTodos();

    return ( 
        <div>
        <div className="flex flex-col items-center justify-center content-center mt-5" >
            <h1 className='font-semibold text-xl mb-5'>To Do List Application.</h1>
        </div>
        <AddTask />
        <ToDoList tasks={tasks}/>
      </div>
    )
  }