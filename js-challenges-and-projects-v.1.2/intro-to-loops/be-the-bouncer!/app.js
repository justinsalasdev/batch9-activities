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

nightClubRegister.forEach(person => {
  const { name, lastname, age, gender } = person;
  const salutation = `${gender == "male" ? "Mr." : "Ms."}`;
  if (age < 18) {
    console.log(`${salutation} ${name} ${lastname}, you are too young for this.`);
  } else {
    console.log(`Welcome to heaven, ${salutation} ${name} ${lastname}`);
  }
});
