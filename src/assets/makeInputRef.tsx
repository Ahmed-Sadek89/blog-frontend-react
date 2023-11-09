import { useEffect, useRef } from "react";

const makeInputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef
};

export default makeInputRef;
