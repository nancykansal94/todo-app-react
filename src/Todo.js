import { useState, useRef, useEffect, memo } from "react";
import { useEnter } from "./useEnter";

const delay = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

export const MemoizedTodo = memo(Todo);

export default function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [currentDeleteTime, setCurrentDeleteTime] = useState(5);

  // console.log(`Rendering todo: ${todo.name}`);
  // useEffect(() => {
  //   if (todo.checked) {
  //     delay(1000).then(() => {
  //       if (currentDeleteTime === 1) {
  //         onDeleteTodo(todo);
  //         return;
  //       }
  //       setCurrentDeleteTime((cur) => cur - 1);
  //     });
  //   }
  // }, [todo, currentDeleteTime]);

  return (
    <li>
      {isEditing ? (
        <EditingTodo
          todo={todo}
          onEditTodo={(updatedValue) => {
            if (updatedValue.trim() === "") return;
            setIsEditing(false);
            onUpdateTodo(todo.id, { ...todo, name: updatedValue });
          }}
        />
      ) : (
        <>
          <DisplayTodo todo={todo} onUpdateTodo={onUpdateTodo} />
          {todo.checked ? (
            <>
              <button onClick={() => onDeleteTodo(todo)}>Delete Todo</button>
              {/* <span>Deleting in {currentDeleteTime} seconds...</span> */}
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit Todo</button>
          )}
        </>
      )}
    </li>
  );
}

function EditingTodo({ todo, onEditTodo }) {
  const [currentValue, setCurrentValue] = useState(todo.name);

  useEnter(() => {
    // console.log(`enter ${currentValue}`);
    onEditTodo(currentValue);

    // setCurrentValue((latestCurrentVal) => {
    //   onEditTodo(latestCurrentVal);
    //   return latestCurrentVal;
    // });
  });

  return (
    <>
      <input
        type="text"
        value={currentValue}
        autoFocus
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
        onBlur={() => {
          // console.log("blur");
          onEditTodo(currentValue);
        }}
      ></input>
    </>
  );
}

function DisplayTodo({ todo, onUpdateTodo }) {
  return (
    <>
      <input
        type="checkbox"
        value={todo.checked}
        checked={todo.checked}
        onChange={() =>
          onUpdateTodo(todo.id, { ...todo, checked: !todo.checked })
        }
      ></input>
      <span style={todo.checked ? { textDecoration: "line-through" } : {}}>
        {todo.name}
      </span>
    </>
  );
}

// useEffect(() => {
//   if (todo.checked) {
//     delay(5000).then(() => {
//       console.log("5 sec delay timer");
//       onDeleteTodo(todo);
//     });
//   }
// }, [todo]);
