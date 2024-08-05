import React, { useEffect, useState } from "react";

const LightDarkTheme = () => {
  const [theme, SetTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const ToggleTheme = () => {
    SetTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="bg-white p-5 dark:bg-slate-950 dark:text-white">
      <div className="text-center p-5 bg-slate-300 dark:bg-slate-600 dark:text-white">
        <h1 className="text-2xl p-5">Light/Dark Mode Page</h1>
        <button
          onClick={ToggleTheme}
          className=" rounded-md p-5 bg-slate-400 dark:accent-slate-400 dark:text-white"
        >
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <div>
        <p className="text-2xl">
          This is a simple page demonstrating how to implement light and dark
          modes in a React application.
        </p>
        <ul className="list-disc ml-5">
          {["item1", "item2", "item3", "item4", "item5"].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LightDarkTheme;
