const express = require('express');
const app = express();
const apiController = require('../controller/apiController')
const router = express.Router();

router.get('/fetchAllEmployee',  (req, res) => {
   apiController.getAllEmployees( req, res)});

router.put('/updateEmployee/:id',  (req, res) => {
   apiController.updateEmployee( req, res)});

router.delete('/deleteEmployees/:id', (req, res) => {
   apiController.deleteEmployee( req, res);
});

module.exports = router;
