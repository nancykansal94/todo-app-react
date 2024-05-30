import { useEffect } from "react";

export function useKey(key, onKeyPressed) {
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        onKeyPressed();
      }
    };

    // console.log("event registered");
    document.addEventListener("keydown", onKeyPress);

    return () => document.removeEventListener("keydown", onKeyPress);
  }, [key, onKeyPressed]);
}
