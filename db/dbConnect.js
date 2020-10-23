const { Pool } = require('pg')

const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    ssl: {
        rejectUnauthorized: false,
    }
};

const pool = new Pool(config);

module.exports = {
    query: (sql, value, cb) => {
        return pool.query(sql, value, cb);
    }
}