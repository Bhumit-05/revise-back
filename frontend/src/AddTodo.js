import React, { useRef } from 'react'
import { addTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const dispatch = useDispatch();

    const fetchTodo = async () => {
        const res = await fetch("https://revise-back.onrender.com");
        const data = await res.json();
    
        dispatch(addTodo(data));
    };

    const title = useRef();
    const duration = useRef();

    const handleAdd = async () => {

        const addTitle = title.current.value;
        const addDuration = duration.current.value;

        await fetch("https://revise-back.onrender.com",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                title : addTitle,
                duration : addDuration
            })
        })
        fetchTodo();
    };

  return (
    <div className='h-[150px] mb-[50px] mt-[50px] w-[300px]'>
        <form 
            className='flex flex-col items-center justify-center h-full'
            onSubmit={(e)=> e.preventDefault()}>
            <input 
                ref={title} 
                placeholder='Title' 
                className='max-w-fit mb-[10px] text-xl rounded-lg border-2 border-solid border-black pl-[7px]'>
            </input>

            <input 
                ref={duration} 
                placeholder='Duration in hours' 
                className='max-w-fit mb-[10px] text-xl rounded-lg border-2 border-solid border-black pl-[7px]'>
            </input>

            <button 
                onClick={handleAdd}
                className='bg-white text-lg rounded-lg border-2 border-solid border-black w-[50px] hover:bg-slate-200 duration-300'
                >Add
            </button>
        </form>
    </div>
  )
}

export default AddTodo;