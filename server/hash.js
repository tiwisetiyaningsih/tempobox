// hash.js
const bcrypt = require("bcrypt");

const password = "admin123"; // ganti sesuai keinginan

bcrypt.hash(password, 10, (err, hash) => {
  console.log(hash);
});
