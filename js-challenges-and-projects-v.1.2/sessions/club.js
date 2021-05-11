// Array of Objects
const nightClubRegister = [
  {
    name: "Tony",
    lastname: "Stark",
    age: 25,
    gender: "male"
  },
  {
    name: "Harry",
    lastname: "Potter",
    age: 16,
    gender: "male"
  },
  {
    name: "Hermione",
    lastname: "Granger",
    age: 17,
    gender: "female"
  },
  {
    name: "Steve",
    lastname: "Rogers",
    age: 62,
    gender: "male"
  }
];

for (let i = 0; i < nightClubRegister.length; i++) {
  const { name, lastname, age, gender } = nightClubRegister[i];
  const salutation = gender === "male" ? "Mr." : "Ms.";
  if (age < 18) {
    console.log(`You are too young for this ${salutation} ${lastname}`);
  } else {
    console.log(`Yeahh!! ${salutation} ${lastname}`);
  }
}
