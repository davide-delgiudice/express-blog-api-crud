// importo express
const express = require('express');

// assegno il router ad una variabile
const router = express.Router();


// importo il controller che mi servirà per le operazioni di router
const postsController = require('../controller/postsController.js');

// index
router.get('/', postsController.index);

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update
router.put('/:id', postsController.update);

// modify
router.patch('/:id', postsController.modify);

// destroy
router.delete('/:id', postsController.destroy);


// esporto il router
module.exports = router;