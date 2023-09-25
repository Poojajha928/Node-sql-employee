const mysql = require("mysql");
const dbConfig = require("../config/dbConfig");


const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
    const createTableSQL = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )
  `;
    connection.query(createTableSQL, (createTableErr) => {
        if (createTableErr) {
            console.error('Error creating table:', createTableErr);
            return;
        }
        console.log('Table created successfully');
    });
});
const insertInitialValuesSQL = `
  INSERT INTO employees (firstName, lastName, email)
  VALUES ('John', 'Doe', 'john.doe@example.com'),
         ('Jane', 'Smith', 'jane.smith@example.com')
`;

connection.query(insertInitialValuesSQL, (insertValuesErr) => {
    if (insertValuesErr) {
        console.error('Error inserting initial values:', insertValuesErr);
    } else {
        console.log('Initial values inserted successfully');
    }
});

function getALL (){
    return new Promise (function (resolve,reject){
        const getAllQuery = `select * from employees`;
        connection.query(getAllQuery, (err,data) => {
            if (err) {
                console.error('Error getting  values:', err);
                return reject(new err('ERROR !!!'))
            } else {
                console.log(data);
                return resolve(data);
            }
        });
    })
}
function updateEmployeeByID (id,firstName,lastName,email){
    return new Promise (function (resolve,reject) {
        const updateQuery = 'UPDATE employees SET firstName = ?, lastName = ?, email = ? WHERE id = ?';
        connection.query(updateQuery, [firstName, lastName, email, id], (err, result) => {
            if (err) {
                console.error('Error updating employee:', err);
                return reject(500)
            }

            if (result.affectedRows === 0) {
                return resolve(400)
            }

            return resolve(200)
        });
    })
}

function deleteEmployeeByID (id){
    const sql = 'DELETE FROM employees WHERE id = ?';
    return new Promise (function (resolve,reject) {
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return reject(500)
        }

        if (result.affectedRows === 0) {
            return resolve(400)
        }
        return resolve(200);
    })
})
}
module.exports = {
    getALL,
    updateEmployeeByID,
    deleteEmployeeByID

};