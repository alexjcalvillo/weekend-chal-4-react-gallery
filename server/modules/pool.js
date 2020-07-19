const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'gallery', // the name of the database
  host: 'localhost', // local machine
  port: 5432, // default port # for database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000, // 30 seconds to try to connect
};

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('pg connected');
});

pool.on('error', (err, client) => {
  console.log('Error', err);
  process.exit(-1);
});

module.exports = pool;
