const express = require('express')
const router = express.Router();


const meController = require('../controllers/MeController')
router.get('/for/me', meController.creatme)

router.get('/trash/me', meController.creatagain)



module.exports = router