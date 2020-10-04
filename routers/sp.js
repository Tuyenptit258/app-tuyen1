const express = require('express')
const router = express.Router();


const spController = require('../controllers/spController')
router.get('/creat', spController.creat)

router.post('/store', spController.store)
router.get('/:id/edit', spController.edit)
router.put('/:id',spController.sua)
router.patch('/:id/restore',spController.suamot)
router.delete('/:id',spController.destroy)
router.delete('/:id/force',spController.forceDestroy)


 router.get('/:slug', spController.show)

module.exports = router