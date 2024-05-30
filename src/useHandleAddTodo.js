import { useEffect } from "react";

export default function useHandleAddTodo() {
  function handleAddTodo() {
    if (currentTodo.trim() === "") return;
    count++;
    setTodoList((todos) => [
      ...todos,
      { id: count, name: currentTodo.trim(), checked: false },
    ]);
    setCurrentTodo("");
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Enter") {
          handleAddTodo();
        }
      }
      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [handleAddTodo]
  );
}
