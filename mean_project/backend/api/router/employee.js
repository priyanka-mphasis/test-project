const express = require('express');
const router = express.Router();
const employeeRouter = require('../controller/employee');
router.get('/getEmployee',employeeRouter.getEmployee);
router.post('/storeEmployee',employeeRouter.storeEmployee);
router.get('/:employeeId',employeeRouter.getOneEmployee);
router.delete('/:employeeId',employeeRouter.deleteEmployee);
router.put('/:employeeId',employeeRouter.updateEmployee);
module.exports = router;