import React, { useState } from "react";
import { useGlobalContext } from "./context";
function App() {
  const {setTodo,todo,todoList,setTodoList}=useGlobalContext()
  return (
    <div className="App">
      <input type="text" placeholder="Enter a todo" onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>setTodoList([...todoList,todo])}>Add todo</button>
      {todoList?.map(item=><li>{item}</li>)}

    </div>
  );
}

export default App;
