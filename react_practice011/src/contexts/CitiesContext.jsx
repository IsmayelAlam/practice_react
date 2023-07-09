import { createContext, useEffect, useState } from "react";

export const CitiesContext = createContext();

const Base_url = "http://localhost:8000";

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${Base_url}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (error) {
        alert("there is an error");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, loading }}>
      {children}
    </CitiesContext.Provider>
  );
}
