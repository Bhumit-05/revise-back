import React, { useState, useEffect } from "react";
import api from "./api";
import TodoCard from "./todoCard";

const App = () => {
  
  const [todos, setTodos] = useState([]);

  async function getTodos(){
    try{
      const res = await api.get("/todo");
      setTodos(res.data);
    }
    catch(e){

    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  console.log(todos);

  return(
    <div>
      <TodoCard/>
    </div>
  );
};

export default App;