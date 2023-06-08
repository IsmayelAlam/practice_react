import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Link from "./components/Link";
import Route from "./components/Route";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="flex gap-5 p-10">
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Drop down</Link>
        <Link to="/button">Button</Link>
        <Link to="/modal">Modal</Link>
        <Link to="/table">Table</Link>
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
      <Route path="/table">
        <TablePage />
      </Route>
    </div>
  );
}

export default App;
