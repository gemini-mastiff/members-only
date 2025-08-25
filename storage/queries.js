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

async function findUserByUsername(username) {
  const { rows } = await pool.query(
    `
    SELECT * FROM users
    WHERE username = $1
    `,
    [username]
  );
  return rows;
}

async function findUserById(id) {
  const { rows } = await pool.query(
    `
    SELECT * FROM users
    WHERE id = $1
    `,
    [id]
  );
  return rows;
}

module.exports = {
  addUser,
  findUserByUsername,
  findUserById,
};
