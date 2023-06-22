const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

export const fetchMakes = () => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("log", data);
        return dispatch({ type: "FETCH_MAKES", value: data.Results });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteMake = (makeId) => {
  return {
    type: "DELETE_MAKES",
    value: makeId,
  };
};
