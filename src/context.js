import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [todo, setTodo]=useState("")
    const [todoList, setTodoList]=useState(['abc','abd'])

  return (
    <AppContext.Provider value={{ todo, setTodo,todoList, setTodoList }}>
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
