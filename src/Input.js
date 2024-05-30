export default function Input({
  currentTodo,
  onCurrentTodoChanged,
  onAddTodo,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentTodo}
        onChange={(e) => onCurrentTodoChanged(e.target.value)}
        placeholder="Enter new todo..."
      ></input>
      <button>Add Todo</button>
    </form>
  );
}
