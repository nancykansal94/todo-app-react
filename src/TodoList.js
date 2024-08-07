import { memo } from "react";
import Todo, { MemoizedTodo } from "./Todo";

export const MemoizedTodoList = memo(TodoList);

export default function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  console.log("rendering todolist");
  return (
    <ul className="todolist">
      {todos.map((todo) => (
        <MemoizedTodo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}
