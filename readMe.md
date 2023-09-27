# Employee Management CRUD API

This is a Node.js API for managing employee records with CRUD (Create, Read, Update, Delete) operations. It uses MySQL as the database to store employee data.

## Table of Contents

- [Endpoints](#endpoints)
    - [Get All Employees](#get-all-employees)
    - [Update Employee](#update-employee)
    - [Delete Employee](#delete-employee)
    - 
 Before running the API, make sure you have the following installed:

- Node.js and npm
- MySQL (with a database(testdb) created for this project)
- Dependencies (run `npm install` to install required packages)
1. Clone this repository to your local machine.
2. Set up your MySQL database and update the database configuration in `index.js`.
3. Install project dependencies: `npm install`.
4. Start the API: `node index.js`.

The API will be running on `http://localhost:3001` by default. You can change the port in the `index.js` file.


## Endpoints

### Update Employee
URL: /updateEmployee/:id
Method: PUT
Request Body:

{
"firstName": "Updated First Name",
"lastName": "Updated Last Name",
"email": "updated.email@example.com"
// Update more fields as needed
}

res : {
"msg": "SuccessFully Updated !!!"
}

### Delete Employee

URL: /deleteEmployees/:id
Method: DELETE

res : {
"msg": "SuccessFully Deleted !!!"
}

### GetAll Employee

URL: /fetchAllEmployee
Method: GET
 ## Response
```
{
    "data": [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 3,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 4,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 5,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 6,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 7,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 8,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 9,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 10,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 11,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 12,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 13,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 14,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        },
        {
            "id": 15,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com"
        },
        {
            "id": 16,
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com"
        }
    ]
}
```
