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
        className="todoInput"
        type="text"
        autoFocus
        value={currentTodo}
        onChange={(e) => onCurrentTodoChanged(e.target.value)}
        placeholder="What needs to be done?"
      ></input>
      {/* <button>Add Todo</button> */}
    </form>
  );
}
