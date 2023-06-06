import Button from "./Button";

function App() {
  return (
    <div className="bg-slate-700 h-screen text-center">
      <Button outline primary>
        Button 01
      </Button>
      <Button outline secondary>
        Button 02
      </Button>
      <Button rounded outline success>
        Button 03
      </Button>
      <Button rounded outline warning>
        Button 04
      </Button>
      <Button rounded outline danger>
        Button 05
      </Button>
    </div>
  );
}

export default App;
