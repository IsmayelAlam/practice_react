import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import style from "./style/SIdebar.module.css";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />

      <AppNav />

      <Outlet />

      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WW Inc.
        </p>
      </footer>
    </div>
  );
}
