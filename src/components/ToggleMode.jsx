import { useState } from "react";
import { setDarkMode } from "../features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";

function ToggleMode() {
  const { darkmode } = useSelector((state) => state.home);
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
    dispatch(setDarkMode());
  }

  return (
    <div className="flex items-center gap-6">
      {darkmode ? (
        <img src="/assets/icon-sun-light.svg" alt="sun icon" />
      ) : (
        <img src="/assets/icon-sun-dark.svg" alt="sun icon" />
      )}
      <label
        htmlFor="toggle"
        className={`relative block h-[28px] w-[48px] cursor-pointer rounded-full bg-purple before:absolute before:left-2 before:top-[4px] before:h-[20px] before:w-[20px] before:rounded-full before:bg-white before:transition-all before:duration-300 ${
          theme ? "before:translate-x-full" : "before:translate-x-0"
        }`}
      >
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          value={theme}
          onChange={toggleTheme}
        />
        <div></div>
      </label>
      {darkmode ? (
        <img src="/assets/icon-moon-light.svg" alt="moon icon" />
      ) : (
        <img src="/assets/icon-moon-dark.svg" alt="moon icon" />
      )}
    </div>
  );
}

export default ToggleMode;
