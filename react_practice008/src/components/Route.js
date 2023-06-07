import { useContext } from "react";
import NavContext from "../contexts/navContext";

function Route({ path, children }) {
  const { curPath } = useContext(NavContext);

  if (path === curPath) return children;

  return null;
}

export default Route;
