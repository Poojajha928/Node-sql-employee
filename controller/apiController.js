const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const  connection = require('../model/db')


app.use(bodyParser.json());

function getAllEmployees(req, res) {
        connection.getALL().then(function(data){
            res.json({ data: data });
        }).catch(function (err) {
            res.status(200).json({msg: 'Please Try Again'});
        })
}
function updateEmployee(req,res){
        const id = parseInt(req.params.id);
        const { firstName, lastName, email } = req.body;
        connection.updateEmployeeByID(id,firstName,lastName,email).then(function(data){
           if(data == 500){
                res.status(500).json({ error: 'Error updating employee' });
           }
           else if(data == 400){
                res.status(404).json({ error: 'Employee not found' });
           }
           else
               res.status(200).json({ msg: 'SuccessFully Updated !!!' });
        }).catch(function (err) {
            res.status(200).json({msg: 'Please Try Again'});
        })
}
function deleteEmployee(req, res) {
        const deleteId = parseInt(req.params.id);
        connection.deleteEmployeeByID(deleteId).then(function(data){
            if(data == 500){
                res.status(500).json({ error: 'Error deleting  employee' });
            }
            else if(data == 400){
                res.status(404).json({ error: 'Employee not found' });
            }
            else
                res.status(200).json({ msg: 'SuccessFully Deleted !!!' });
        }).catch(function (err){
        res.status(200).json({ msg: 'Please Try Again' });
    })

}
module.exports = {
    getAllEmployees,
    updateEmployee,
    deleteEmployee
}
