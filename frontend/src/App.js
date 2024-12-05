import { useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoCard from "./todoCard";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

const App = () => {
  
  const dispatch = useDispatch();
  
  const todos = useSelector(store => store.todo.todos);

  const fetchTodo = async () => {
    const res = await fetch("https://revise-back.onrender.com");
    const data = await res.json();

    dispatch(addTodo(data));
  };

  useEffect(() => {
    fetchTodo();
  }, [])

  console.log(todos);

  return(
    <div className="mx-auto max-w-fit">
      <div className=" mt-[50px] text-5xl mx-auto max-w-fit font-serif">
        TODOS
      </div>
      <div className="bg-gray-200 rounded-xl mix-blend-multiply ">
        <AddTodo/>
      </div>
      <div>
        {todos && todos.length > 0 ? (
          todos.map(todo => <TodoCard key={todo._id} todo={todo} />)
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </div>
  );
};

export default App;