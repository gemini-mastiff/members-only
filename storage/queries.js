const pool = require("./pool.js");

async function addUser(username, password) {
  await pool.query(
    `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    `,
    [username, password]
  );
  console.log(`User "${username}" added`);
  return;
}

module.exports = {
  addUser,
};
