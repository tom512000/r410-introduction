import { useState } from "react";

function useShowable(shown = false, baseClassName = "") {
  const [isShown, setIsShown] = useState(shown);

  const toggleShown = () => {
    setIsShown((prev) => !prev);
  };

  const extendedClassName = `${baseClassName} ${isShown ? "shown" : ""}`;

  return {
    isShown,
    toggleShown,
    setIsShown,
    extendedClassName,
  };
}

export default useShowable;
