import Button from "./Button";
import { GoBell, GoAlert, GoCheck } from "react-icons/go";

function App() {
  return (
    <div className="bg-slate-700 h-screen ">
      <Button outline primary>
        <GoBell />
        Button 01
      </Button>
      <Button outline secondary>
        Button 02
      </Button>
      <Button rounded outline success>
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
