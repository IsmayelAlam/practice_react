import { useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => setCartShow(true);
  const hideCartHandler = () => setCartShow(false);

  return (
    <>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
