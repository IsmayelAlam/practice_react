import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./style/AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
