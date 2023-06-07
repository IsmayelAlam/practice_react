import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Link from "./components/Link";
import Route from "./components/Route";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="bg-slate-700 h-screen flex gap-5 p-10">
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Drop down</Link>
        <Link to="/button">Button</Link>
        <Link to="/modal">Modal</Link>
      </div>

      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropDownPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/modal">
        <ModalPage />
      </Route>
    </div>
  );
}

export default App;
