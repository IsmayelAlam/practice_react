import { NavLink } from "react-router-dom";
import styles from "./style/AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li>
          <NavLink to="country">country</NavLink>
        </li>
      </ul>
    </nav>
  );
}
