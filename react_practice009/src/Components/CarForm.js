import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => dispatch(changeName(event.target.value));

  const handleCostChange = (event) => dispatch(changeCost(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-from panel">
      <h4 className="subtitle is-3">Add Cars</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              placeholder="Add name"
              required
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              placeholder="Add cost"
              required
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>

          <button className="button is-link">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
