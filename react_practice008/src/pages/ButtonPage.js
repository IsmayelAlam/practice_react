import Button from "../components/Button";
import { GoBell, GoAlert, GoCheck } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => console.log("click");
  const handleMove = () => console.log("move");
  const handleLeave = () => console.log("leave");

  return (
    <div>
      <Button primary onClick={handleClick}>
        <GoBell />
        Button 01
      </Button>
      <Button secondary onMouseMove={handleMove}>
        Button 02
      </Button>
      <Button success rounded onMouseLeave={handleLeave}>
        <GoCheck />
        Button 03
      </Button>
      <Button warning rounded customclass="mb-5">
        Button 04
      </Button>
      <Button danger rounded outline>
        <GoAlert />
        Button 05
      </Button>
    </div>
  );
}

export default ButtonPage;
