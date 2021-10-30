const sql = require('mssql');
const config = {user: 'userApi',
password: '1234',
server: 'DESKTOP-HMTCD4F\\SQLEXPRESS',
database: 'exampleLogin',
options: {
trustedconection: false,
enableArithAbort: true,
encrypt: false,
}
};
exports.config = config;
exports.sql = sql;
