const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Mysql@420",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
];
};

app.get("/", (req, res) => {
  let q = `SELECT count (*) FROM user`;
try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result[0] ["count (*)"]);
    res.send("success");
  });
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});



// connection.end();




