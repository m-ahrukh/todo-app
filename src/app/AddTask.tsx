'use client'

import { FormEventHandler, useState } from "react"
import { addTodo } from "../../apis";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from 'uuid';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddTask = ()=>{

    const [data, setData] = useState('');
    
    const router = useRouter();
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement>= async (e) =>{
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            text: data
        });
        console.log('Data saved:', data);
        setData("");
        router.refresh();
    }
    return ( 

        <div >
            <form onSubmit={handleSubmitNewTodo} className="flex flex-col items-center justify-center content-center max-w-md m-auto py-5 px-2 py-2">
                <TextField id="standard-basic" label="Add your task" 
                placeholder="Add your todo task" value={data} 
                variant="standard" onChange={(e) =>{setData(e.target.value)}}/>
                
                <Button type="submit" 
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold rounded border-black w-full mt-2" 
                variant="contained">Add</Button>
            </form>
        </div>

    )
}

export default AddTask