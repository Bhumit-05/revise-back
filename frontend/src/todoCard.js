import React from 'react'
import { addTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

const TodoCard = (todo) => {
  
  const todoId = todo.todo._id;
  const dispatch = useDispatch();

  const fetchTodo = async () => {
    const res = await fetch("http://localhost:4000/todo");
    const data = await res.json();

    dispatch(addTodo(data));
  };

  async function handleRemove(){
    await fetch("http://localhost:4000/todo",{
      method : "DELETE",
      headers: {
        "Content-Type": "application/json", 
      },
      body : JSON.stringify({todoId})
    })
    fetchTodo();
  }

  return (
    <div className='border-2 border-solid hover:cursor-default border-black w-[300px] h-[150px] mb-[40px] rounded-2xl shadow-2xl hover:scale-105 ease-in-out duration-300'>
      <div className='mx-auto max-w-fit text-2xl mt-[10px]'>
        Title : {todo.todo.title}
      </div>
      <div className='mx-auto max-w-fit text-2xl'>
        Duration : {todo.todo.duration} hrs
      </div>
      <div className='mx-auto max-w-fit'>
        <button className=' mt-[15px] text-xl border-2 border-dotted border-black rounded-xl p-[2px] px-[4px] hover:bg-slate-200 duration-300'
        onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default TodoCard;