import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, capturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, capturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, capturing]
  );

  return ref;
}
