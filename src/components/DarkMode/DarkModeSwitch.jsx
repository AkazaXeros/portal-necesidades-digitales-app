import { useDarkMode } from "./DarkModeContext";

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌛" : "☀️"}</div>
  );
}

export default DarkModeSwitch;
