import { useEffect } from "react";
import { useKey } from "./useKey";

export function useEnter(onEnterPressed) {
  useKey("enter", onEnterPressed);
}
