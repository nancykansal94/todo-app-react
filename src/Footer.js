export default function Footer({ onClearCompletedTodo, onClearAllTodo }) {
  return (
    <div>
      <button onClick={onClearCompletedTodo}>Clear all completed todos</button>
      <button onClick={onClearAllTodo}>Clear all todos</button>
    </div>
  );
}
