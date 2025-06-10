import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeContextExample = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>{theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-blue-400 p-1 text-white rounded-md"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeContextExample;
