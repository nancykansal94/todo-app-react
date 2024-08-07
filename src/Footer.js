export default function Footer({ onClearCompletedTodo, onClearAllTodo }) {
  return (
    <div className="clearBtn-container">
      <button className="clearBtn" onClick={onClearCompletedTodo}>
        Clear completed
      </button>
      <button className="clearBtn" onClick={onClearAllTodo}>
        Clear all
      </button>
    </div>
  );
}
