const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

const PetController = require('../controllers/pet');

router.post('/', PetController.add);

module.exports = router;
