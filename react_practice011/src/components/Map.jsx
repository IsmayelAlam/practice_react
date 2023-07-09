import { useSearchParams } from "react-router-dom";
import styles from "./style/Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
    </div>
  );
}
