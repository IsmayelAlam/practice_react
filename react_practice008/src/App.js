import Button from "./Button";
import { GoBell, GoAlert, GoCheck } from "react-icons/go";

function App() {
  const handleClick = () => console.log("click");
  const handleMove = () => console.log("move");
  const handleLeave = () => console.log("leave");

  return (
    <div className="bg-slate-700 h-screen ">
      <Button outline primary onClick={handleClick}>
        <GoBell />
        Button 01
      </Button>
      <Button outline secondary onMouseMove={handleMove}>
        Button 02
      </Button>
      <Button
        rounded
        outline
        success
        className="mb-5"
        onMouseLeave={handleLeave}
      >
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

export default App;
