// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
  index,
} = require('../controllers/productsControllers');



// ************ Rutas Generales ************
router.get('/', index); 


module.exports = router;
