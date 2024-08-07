import { useState } from "react";
import "./index.css";

export default function Dropdown({ options, selected, onSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onClick={() => {
        setIsOpen((curr) => !curr);
      }}
    >
      {options.filter((option) => option.value === selected)[0].name}
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onSelected(option.value);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
