var mysql = require('mysql');
var connection = mysql.createConnection({
    // host: 'localhost',
    // host: '192.168.4.43',
    host: 'jia-lei.vicp.io',
    user: 'root',
    password: '666666',
    database: 'mysql',
    port: '52751'
})

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();