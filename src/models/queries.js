const pool = require("./pool");

exports.createUser = async (username, password) => {
  const SQL = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
  const {rows} = await pool.query(SQL, [username, password]);
  return rows;
};

exports.getUser = async (username) => {
  const SQL = `SELECT * FROM users WHERE username = $1`
  const {rows} = await pool.query(SQL, [username]);
  return rows[0];
}

exports.getUserById = async (id) => {
  const SQL = `SELECT * FROM users WHERE id=$1`
  const {rows} = await pool.query(SQL, [id]);
  return rows[0];
}