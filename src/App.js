import { useState } from "react";
import Filter from "./Filter";
import TodoList, { MemoizedTodoList } from "./TodoList";
import Input from "./Input";
import Footer from "./Footer";
import { useTodos } from "./useTodos";
import { useMemo } from "react";

function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const {
    todoList,
    onAddTodo,
    onUpdateTodo,
    onDeleteTodo,
    onClearCompletedTodo,
    onClearAllTodo,
  } = useTodos();

  const calculateFilteredTodos = () => {
    if (filter === "completed") {
      return todoList.filter((todo) => todo.checked);
    }
    if (filter === "pending") {
      return todoList.filter((todo) => !todo.checked);
    }
    return todoList;
  };
  // let filteredTodos = todoList;
  // if (filter === "completed") {
  //   filteredTodos = todoList.filter((todo) => todo.checked === true);
  // } else if (filter === "pending") {
  //   filteredTodos = todoList.filter((todo) => todo.checked === false);
  // }

  const filteredTodos = useMemo(calculateFilteredTodos, [todoList, filter]);
  return (
    <div className="App">
      <Input
        currentTodo={currentTodo}
        onCurrentTodoChanged={setCurrentTodo}
        onAddTodo={() => {
          onAddTodo(currentTodo);
          setCurrentTodo("");
        }}
      />
      <MemoizedTodoList
        todos={filteredTodos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
      />
      <Filter filter={filter} setFilter={setFilter} />
      <Footer
        onClearCompletedTodo={onClearCompletedTodo}
        onClearAllTodo={onClearAllTodo}
      />
    </div>
  );
}

export default App;

// const handleAddTodo = useCallback(() => {
//   if (currentTodo.trim() === "") {
//     return;
//   }

//   count++;
//   setTodoList((todos) => [
//     ...todos,
//     { id: count, name: currentTodo.trim(), checked: false },
//   ]);
//   setCurrentTodo("");
// }, [currentTodo]);

// useEffect(function () {
//   function callback(e) {
//     if (e.code === "Enter") {
//       handleAddTodo();
//     }
//   }
//   document.addEventListener("keydown", callback);

//   return () => document.removeEventListener("keydown", callback);
// }, []);

//---------------------------------------------------------------------------------------

// const [todoList, setTodoList] = useState([]);
// const handleDeleteTodo = (deletedTodo) => {
//   setTodoList((todos) => todos.filter((todo) => todo !== deletedTodo));
// };

// const handleAddTodo = () => {
//   if (currentTodo.trim() === "") {
//     return;
//   }

//   count++;
//   setTodoList((todos) => [
//     ...todos,
//     { id: count, name: currentTodo.trim(), checked: false },
//   ]);
//   setCurrentTodo("");
// };

// const handleUpdateTodo = (id, updatedTodo) => {
//   setTodoList((todos) =>
//     todos.map((todo) => (todo.id === id ? updatedTodo : todo))
//   );
// };

// const handleClearCompletedTodo = () => {
//   setTodoList((todos) => todos.filter((todo) => !todo.checked));
// };

// const handleClearAllTodo = () => {
//   setTodoList([]);
// };
