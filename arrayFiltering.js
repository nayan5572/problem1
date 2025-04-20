// create array object people
const people = [
  { name: "Nayan", age: 25, gender: "male" },
  { name: "Sujon", age: 35, gender: "male" },
  { name: "Chandan", age: 27, gender: "male" },
  { name: "Bishwajit", age: 25, gender: "male" },
  { name: "Manik", age: 25, gender: "male" },
  { name: "Laboni", age: 25, gender: "female" },
  { name: "Tama", age: 25, gender: "female" },
  { name: "Biponna", age: 25, gender: "female" },
  { name: "Lamiya", age: 25, gender: "female" },
  { name: "Riya", age: 20, gender: "female" },
];

// filter people by gender
const filterByFemale = people
  .filter((person) => person.gender === "female")
  .map((person) => person.name);
console.log(filterByFemale);
