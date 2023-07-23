import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorageState(true, "isDark");

  const toggleDarkMode = () => setIsDark((isDark) => !isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark_mode");
      document.documentElement.classList.remove("light_mode");
    } else {
      document.documentElement.classList.add("light_mode");
      document.documentElement.classList.remove("dark_mode");
    }
  });

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("dark mode was used outside of context");

  return context;
}

export { useDarkMode, DarkModeProvider };
