import { Link } from "react-router-dom";
import styles from "./style/AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="cities">cities</Link>
        </li>
        <li>
          <Link to="country">country</Link>
        </li>
      </ul>
    </nav>
  );
}
