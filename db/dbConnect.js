const { Pool } = require("pg");

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

module.exports = {
  query: (sql, value, cb) => {
    return pool.query(sql, value, cb);
  },
};
