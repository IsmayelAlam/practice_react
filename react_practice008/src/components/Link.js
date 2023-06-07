import { useContext } from "react";
import NavContext from "../contexts/navContext";

function Link({ to, children }) {
  const { navigate } = useContext(NavContext);

  console.log(navigate);

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
