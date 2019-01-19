// import mysql from 'promise-mysql';
// var mysql = require('mysql');

import keys from './keys';

const mysql = require("promise-mysql");
const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });
    export default pool;