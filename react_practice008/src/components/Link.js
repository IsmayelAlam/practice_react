import { useContext } from "react";
import NavContext from "../contexts/navContext";

function Link({ to, children }) {
  const { navigate } = useContext(NavContext);

  const classes =
    "border rounded shadow cursor-pointer bg-gray-300 py-3 px-5 mb-2 w-full flex";

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
}

export default Link;
