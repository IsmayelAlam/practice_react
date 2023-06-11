import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.data);

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCars = cars.map((car) => {
    return (
      <div className="panel" key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderCars}
      <hr />
    </div>
  );
}

export default CarList;
