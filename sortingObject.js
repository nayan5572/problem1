// Step 1: Create an array of car objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2022 },
];

// sort the cars by years
const sortByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

// sort the cars by years
const sortedCars = sortByYear(cars);
console.log(sortedCars);
