const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Mysql@420",
});

// Inserting New data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["456", "456_newuser", "def@gmail.com", "def"],
  ["789", "789_newuser", "ghi@gmail.com", "ghi"],
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(getRandomUser());
