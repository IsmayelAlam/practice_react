import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./style/CountryList.module.css";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country).includes(city.country)) return arr;
    return [...arr, { country: city.country, emoji: city.emoji, id: city.id }];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}
