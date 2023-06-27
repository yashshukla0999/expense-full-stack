const express = require('express');
const router = express.Router();
const expenseControl = require('../controller/controls')
router.get('/', expenseControl.showForm)
router.post('/expense',expenseControl.postExpense)
router.get('/expense',expenseControl.showUser)
router.delete('/expense/:id', expenseControl.deleteUser)
router.put('/expense/:id', expenseControl.editUser)
module.exports=router;