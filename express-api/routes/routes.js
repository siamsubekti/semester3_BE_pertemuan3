// import express
const express = require("express");
 
// import page controller
const FruitController = require('../controller/FruitController');
 
// init express router
const router = express.Router();
 
router.get('/', FruitController.get);
router.get('/fruits', FruitController.index);
router.post('/fruits', FruitController.store);
router.put('/fruits/:id', FruitController.update);
router.delete('/fruits/:id', FruitController.destroy);
 
// export default router
module.exports = router;