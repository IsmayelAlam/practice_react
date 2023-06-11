import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      const update = state.data.filter((car) => car.id !== action.payload);

      state.data = update;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
