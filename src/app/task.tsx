"use client";

import { ITask } from "../../types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../apis";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className='w-60% pl-5'>{task.text}</td>
      <td className='flex gap-5 w-20% pl-10'>
        <form onSubmit={handleSubmitEditTodo}>
            <div className='modal-action'>
              
              <TextField id="filled-basic" label="Edit Task" variant="filled" 
              value={taskToEdit} onChange={(e) => {setTaskToEdit(e.target.value)}}
              className="my-2"/> 
              
              <Button type="submit" className="btn ml-2 mt-2" variant="outlined">
                  <FiEdit onClick={() => handleSubmitEditTodo} cursor='pointer' className='text-blue-500' size={25} />
              </Button>
            </div>
        </form>
        <div className='modal-action'>
          <Button type="submit" className="btn ml-1 mt-2" variant="outlined" color="error" onClick={() => handleDeleteTask(task.id)}>
            <FiTrash2 onClick={() => handleDeleteTask(task.id)} cursor='pointer' className='text-red-500' size={25}/>
          </Button>
        </div>    
      </td>
    </tr>
  );
};

export default Task;