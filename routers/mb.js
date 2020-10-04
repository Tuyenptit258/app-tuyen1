const express = require('express')
const router = express.Router();


const mbController = require('../controllers/MbController')
router.get('/done/ce', mbController.donece)

router.post('/done/de', mbController.donede)

module.exports = router