import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./style/CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
