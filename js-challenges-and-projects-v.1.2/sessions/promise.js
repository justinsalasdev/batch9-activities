var data = { firstName: "First", age: 20, email: "mail@mail.com" };

const getData = new Promise((resolve, reject) => {
  //get data from faraway galaxy
  if (data) {
    resolve(data);
  } else {
    reject("no data found");
  }
});

getData.then(data => console.log(data)).catch(err => console.log(err));
