import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurPath(to);
  };

  return (
    <NavContext.Provider value={{ curPath, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavContext;
export { NavProvider };
