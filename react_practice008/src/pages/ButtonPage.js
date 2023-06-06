import Button from "../components/Button";
import { GoBell, GoAlert, GoCheck } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => console.log("click");
  const handleMove = () => console.log("move");
  const handleLeave = () => console.log("leave");

  return (
    <div className="bg-slate-700">
      <Button outline primary onClick={handleClick} customclass="mb-5">
        <GoBell />
        Button 01
      </Button>
      <Button outline secondary onMouseMove={handleMove}>
        Button 02
      </Button>
      <Button rounded outline success onMouseLeave={handleLeave}>
        <GoCheck />
        Button 03
      </Button>
      <Button rounded outline warning>
        Button 04
      </Button>
      <Button rounded outline danger>
        <GoAlert />
        Button 05
      </Button>
    </div>
  );
}

export default ButtonPage;
