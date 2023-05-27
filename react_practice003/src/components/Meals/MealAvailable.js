import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./MealAvailable.module.css";
import MealItem from "./MealItems/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const MealAvailable = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const getMeal = async () => {
      const response = await fetch(
        "https://test-ddb51-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      // console.log(response);
      if (!response.ok)
        throw new Error(`${response.statusText}: something is not working `);

      const responseData = await response.json();

      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    getMeal().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <h1>Loading...</h1>
        </Card>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <h1>{httpError}</h1>
        </Card>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      id={meal.id}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealAvailable;
