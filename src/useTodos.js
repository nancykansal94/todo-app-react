import { useState, useRef, useEffect, useCallback } from "react";

// let count = 0;
export function useTodos() {
  //const [todoList, setTodoList] = useState([]);

  const count = useRef(0);
  const [todoList, setTodoList] = useState(() => {
    try {
      const storedValue = localStorage.getItem("todos");
      return storedValue ? JSON.parse(storedValue) : [];
    } catch (ex) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    count.current = (function () {
      try {
        const storedValue = localStorage.getItem("count");
        return storedValue ? parseInt(storedValue) : 0;
      } catch (ex) {
        return 0;
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("count", parseInt(count.current));
  }, [count.current]);

  //const xyz = useCallback(() =>{}, [])
  const handleDeleteTodo = useCallback((deletedTodo) => {
    setTodoList((todos) => todos.filter((todo) => todo !== deletedTodo));
  }, []);

  const handleAddTodo = (currentTodo) => {
    if (currentTodo.trim() === "") {
      return;
    }
    console.log(count.current);
    count.current++;
    setTodoList((todos) => [
      ...todos,
      { id: count.current, name: currentTodo.trim(), checked: false },
    ]);
  };

  const handleUpdateTodo = useCallback((id, updatedTodo) => {
    setTodoList((todos) =>
      todos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  }, []);

  const handleClearCompletedTodo = () => {
    setTodoList((todos) => todos.filter((todo) => !todo.checked));
  };

  const handleClearAllTodo = () => {
    setTodoList([]);
  };

  return {
    todoList: todoList,
    onAddTodo: handleAddTodo,
    onUpdateTodo: handleUpdateTodo,
    onDeleteTodo: handleDeleteTodo,
    onClearCompletedTodo: handleClearCompletedTodo,
    onClearAllTodo: handleClearAllTodo,
  };
}
